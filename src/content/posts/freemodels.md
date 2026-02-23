---

title: Open-source AI is not free, even on cloud GPUs
published: 2025-12-19
tags: ["AI"]
---

Lately I keep hearing the same pitch.

Open-source AI models.  
Run them yourself.  
Even better, just use cloud GPUs.  
No vendor lock-in. No per-token billing. Problem solved.

It sounds clean. It sounds principled.  
It also ignores how systems actually behave in production.

## “Free weights” is a distraction

Yes, the model weights are free.  
That part is true.

What is not free is everything required to turn those weights into a reliable service.

Inference is not a one-time cost. It is a continuous, operational expense. Once traffic exists, **compute dominates the bill**.

That reality does not change just because the GPU lives in the cloud.

## Cloud GPUs do not change the economics

Using cloud GPUs sounds like a cheat code. No hardware to buy, no racks, no data center drama.

In reality, cloud GPUs only change *how* you pay, not *what* you pay for.

Inference workloads do not scale like stateless web servers. You cannot spin GPUs up and down freely without paying a penalty. Models take time to load, memory is sticky, and latency SLOs force you to keep capacity warm.

So you provision for peaks, not averages.

That means:
- GPUs sit idle and still cost money.
- You pay retail pricing for specialized hardware.
- Redundancy multiplies the bill, not the reliability alone.

At small scale this looks acceptable.  
At sustained traffic, the math stops being friendly.

The cloud does not make this cheap.  
It just delays when you notice the cost.

## You are competing with hyperscalers on their own ground

Managed AI providers:
- Buy GPUs at prices you will never get.
- Run them close to constant utilization.
- Share infrastructure across thousands of customers.
- Optimize the full stack, from kernels to schedulers.

When you run open-source inference on cloud GPUs, you are paying retail to compete with companies built around wholesale economics.

That gap never closes.

## “We can optimize later” is wishful thinking

Performance is not an afterthought.  
It is the product.

Real inference optimization means:
- Kernel-level tuning.
- Memory layout and KV cache strategy.
- Batching, queuing, and request shaping.
- Constant tradeoffs between latency and throughput.

Teams saying “we’ll optimize later” usually discover that optimization was the job they never staffed for.

By then, production traffic has already locked in your worst costs.

## Production is where the math becomes honest

POCs are cheap.  
Production is not.

As soon as users exist:
- Latency complaints arrive.
- Context lengths grow.
- Parallel requests increase.
- Reliability expectations harden.

One GPU becomes two.  
Two become a pool.  
The pool needs redundancy.  
Now you are running GPU infrastructure, not just a model.

At that point, the illusion of “free” is gone.

## When this tradeoff actually makes sense

There *are* valid reasons to run open-source AI yourself:
- Research and experimentation.
- Low, predictable internal workloads.
- Strict data locality or compliance needs.
- Existing infra and ML expertise.

Notice what is missing from that list, saving money by default.

## The honest takeaway

Open-source AI is powerful.  
Cloud GPUs are useful.

But together they do not magically become cheap, simple, or risk-free.

They are a conscious trade:
- Less vendor lock-in.
- More operational responsibility.
- More hidden cost surfaces.

That trade can be worth it.  
Just do not pretend it is free.

Reality always sends the invoice.
