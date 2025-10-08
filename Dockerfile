# Multi-stage build for YMCA Website Services Docs
# Uses Hugo extended 0.139.4 to match GitHub Actions workflow
# Supports both amd64 and arm64 architectures

FROM alpine:3.19 AS builder

# Set Hugo version to match GitHub Actions
ARG HUGO_VERSION=0.139.4
ARG TARGETARCH

# Install dependencies
RUN apk add --no-cache \
    ca-certificates \
    git \
    wget \
    go \
    libc6-compat \
    libstdc++

# Download and install Hugo extended for the correct architecture
RUN HUGO_ARCH=$([ "$TARGETARCH" = "arm64" ] && echo "arm64" || echo "amd64") && \
    wget -q https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-${HUGO_ARCH}.tar.gz && \
    tar -xzf hugo_extended_${HUGO_VERSION}_linux-${HUGO_ARCH}.tar.gz && \
    mv hugo /usr/local/bin/hugo && \
    rm hugo_extended_${HUGO_VERSION}_linux-${HUGO_ARCH}.tar.gz && \
    hugo version

WORKDIR /src

# Runtime stage
FROM alpine:3.19

# Copy Hugo binary from builder
COPY --from=builder /usr/local/bin/hugo /usr/local/bin/hugo

# Install runtime dependencies
RUN apk add --no-cache \
    ca-certificates \
    git \
    go \
    nodejs \
    npm \
    libc6-compat \
    libstdc++

# Set working directory
WORKDIR /src

# Set Go environment for Hugo modules
ENV GOFLAGS="-mod=readonly"

# Expose port for Hugo server
EXPOSE 1313

# Default command
CMD ["hugo", "server", "--bind=0.0.0.0", "--buildDrafts", "--buildFuture", "--disableFastRender"]
