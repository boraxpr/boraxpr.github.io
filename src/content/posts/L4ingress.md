---
title: "L4, L7 Ingress. When L7 load balance is not over-engineering but necessity"
published: 2026-08-26
tags: ["SRE", "Software Architecture"]
---

**L4 ingress x Event Loop (non-blocking concurrency model) = Kaboom!**

If you are a developer deploying applications on Azure Kubernetes Service (AKS), there is a default behavior you might not be aware of until it quietly takes your system down.

The standard workflow goes like this: you write your app, containerize it, deploy it to AKS, and expose it to the public internet using a Service with `type: LoadBalancer`. Azure provisions a public IP and an Azure Standard Load Balancer. Traffic flows in, your app responds, and everything seems fine.

But under the hood, how is that traffic actually reaching your pods?

By default, AKS relies on `kube-proxy` manipulating `iptables` rules on your nodes to route that incoming traffic. This is strictly Layer 4 (Transport Layer) networking. And in the context of modern web applications, L4 routing is a trap waiting to spring.

## The Illusion of L4 Fairness

At Layer 4, the network sees IP addresses and TCP/UDP ports. It does not know what an HTTP request is.

When a client hits your AKS Load Balancer, `iptables` intercepts the traffic and has to decide which pod gets the workload. It doesn't do this intelligently by checking pod metrics. It uses simple probability. If you have three pods, each has a roughly 33% chance of getting the connection.

Once that dice is rolled, the Linux kernel's connection tracking (`conntrack`) takes over. It binds that client's TCP connection to that specific pod.

This is where the architecture breaks. Modern applications don't open and close a TCP connection for every single request. They use **HTTP Keep-Alive** or **HTTP/2 multiplexing**. A client will open *one* TCP connection and blast 1,000 requests through it.

Because `iptables` (L4) only load-balances at the connection level, it sees one pipe and assumes the load is light. It has no idea that 1,000 heavy HTTP requests are traveling through that single pipe, hammering one unlucky pod while the other pods sit idle.

## The Asynchronous Trap

This L4 limitation becomes fatal if you are running asynchronous applications—like a Python FastAPI/Uvicorn server using an event loop.

Let's say one of your pods receives a connection that sends a massive, CPU-intensive task. The worker threads lock up, and the pod's CPU usage spikes to 99%.

You would expect Kubernetes to notice this and stop sending traffic to the dying pod. It won't.

Because of the nature of asynchronous Python, the event loop remains unblocked just enough to instantly answer Kubernetes' `/api/health` readiness probe with a `200 OK`. To the L4 load balancer, this pod looks perfectly healthy. It continues to route traffic to a pod that is effectively suffocating, leading to cascading timeouts and dropped database connections.

## Why L7 is Not Over-Engineering

This is the exact scenario where deploying an L7 Ingress (like Istio's Envoy) stops being "over-engineering" and becomes an architectural necessity.

An L7 load balancer doesn't care about TCP connections; it terminates the connection at the gateway, opens the payload, and looks at the actual HTTP requests.

If you configure an L7 proxy with a `LEAST_REQUEST` algorithm, it maintains a real-time tally of the active, in-flight HTTP requests inside every single pod. If a client sends 100 requests over a single TCP connection, the L7 proxy unpacks them and distributes them one by one. If Pod A is chewing on a heavy task and has a queue building up, the proxy instantly sees this and routes the next request to the idle Pod B.

When you rely on default L4 `iptables`, you are balancing network pipes, not application workloads. If your architecture handles long-lived connections or utilizes event loops that easily spoof standard health checks, sticking to the default AKS `LoadBalancer` will eventually fail you. You don't just need to route the traffic; you need a gateway that actually understands it.