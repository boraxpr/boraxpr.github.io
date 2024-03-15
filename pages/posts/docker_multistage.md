---
type: post
title: 'Understanding Docker Multi-Stage Builds'
date: 2024-02-25
---

Docker has revolutionized the way we develop, package, and deploy applications. It provides a way to run applications isolated in containers, which are lightweight and include everything needed to run the application. One of the key features of Docker is the ability to build images using a Dockerfile. A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image.

## What are Multi-Stage Builds?

In Docker, a multi-stage build is a process where you use multiple FROM statements in your Dockerfile. Each FROM instruction can use a different base, and each of them begins a new stage of the build. You can selectively copy artifacts from one stage to another, leaving behind everything you don’t want in the final image.

The primary reason behind using multi-stage builds is to keep the final images small in size. The smaller the image, the faster it can be transferred and the less disk space it takes up.

## Why Use Multi-Stage Builds?

### 1.Image Size

When building Docker images, size matters. A smaller Docker image will lead to faster deployment times, which is critical in a CI/CD environment. It also reduces the attack surface area and thus improves security. 2. Build-Time Dependencies

### 2.Build-Time Dependencies

There might be some dependencies required during the build time, but not needed in the runtime. With multi-stage builds, you can install these dependencies in the first stage where the building happens and not include them in the final stage.

### 3. Separation of Build and Run Stages

With multi-stage builds, you can use one base image for building the application and a different image for running the application. This separation can lead to more efficient images. For example, you might need a full-fledged Rust environment to build a Rust application, but you might only need a minimal Fedora image to run it.
An Example of Multi-Stage Build

Here’s an example of a Dockerfile for a Rust application using multi-stage builds:

```dockerfile
# Use an official Rust runtime as a parent image

FROM rust:1.76 as builder

# Set the working directory in the container to /usr/src/rust_axum_service

WORKDIR /usr/src/rust_service

# Copy the current directory contents into the container at /usr/src/rust_axum_service

COPY . .

# Build the application

RUN cargo build

# Start a new stage. This is for the runtime environment

FROM fedora:41 as runtime

# Install openssl and ca-certificates and other dependencies that will be needed

RUN dnf -y update && dnf -y install openssl-devel ca-certificates && dnf clean all

# Set the working directory in the container to /usr/local/bin

WORKDIR /usr/local/bin

# Copy the binary from builder to this new stage

COPY --from=builder /usr/src/rust_service/target/debug/app /usr/local/bin

# Run the binary executable

CMD ["./app"]
```

## Conclusion

Docker's multi-stage builds feature is a powerful tool for creating efficient Docker images. By separating build and runtime environments and selectively copying artifacts between stages, you can create smaller, more secure Docker images. This leads to faster deployment times and less disk space usage, making it beneficial in a production environment. As always, it's important to understand your application's specific needs and adjust your Dockerfile accordingly.
