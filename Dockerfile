# syntax=docker/dockerfile:1

# Use a minimal base image
FROM alpine:3.24.1@sha256:28bd5fe8b56d1bd048e5babf5b10710ebe0bae67db86916198a6eec434943f8b AS base

# Install dependencies for bun (with version pinning)
RUN apk update \
    && apk add --no-cache \
    bash=5.3.9-r1 \
    ca-certificates=20260611-r0 \
    curl=8.21.0-r0 \
    libstdc++=15.2.0-r5 \
    libgcc=15.2.0-r5

# Set shell with pipefail for better error handling
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Set working directory
WORKDIR /app

# Create and use a non-root user (Alpine style)
RUN mkdir -p /app && \
    adduser -D -u 1337 -h /app syn-horse && \
    chown -R syn-horse /app

# Switch to non-root user for security
USER 1337
WORKDIR /app

# Install bun (JavaScript runtime)
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/app/.bun/bin:$PATH"

# Copy package files first to leverage caching
COPY --chown=syn-horse:syn-horse package.json bun.lock ./

# Install dependencies using bun
RUN bun install

# Copy the rest of the project files
COPY --chown=syn-horse:syn-horse . .

# Build the project
RUN bun run build

# Add a healthcheck to ensure the application is working
HEALTHCHECK --interval=60s --timeout=10s --start-period=20s --retries=3 CMD ["bun", "dist/cmd.js"]

# Set the default command to run the CLI
CMD ["bun", "dist/cmd.js"]
