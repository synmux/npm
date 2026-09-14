# syntax=docker/dockerfile:1

# Node 24 on Alpine, pinned by digest. Dependabot keeps the pin fresh.
FROM node:26.8-alpine3.24@sha256:ef24c5053d50fdc3e4e56eb4e7ddb7861874ab0fdc797046ba897581deb8e868 AS base

# pnpm comes from Corepack, which reads the pinned version (and its integrity
# hash) from the `packageManager` field in package.json.
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0 \
    PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH
RUN corepack enable pnpm
WORKDIR /app

# Install every dependency and build dist/.
FROM base AS build
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --ignore-scripts
COPY . .
RUN pnpm run build

# Install only the runtime dependencies.
FROM base AS prod-deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --prod --frozen-lockfile --ignore-scripts

# Final image: the built CLI and its runtime dependencies, run as a non-root user.
FROM base AS runtime
RUN adduser -D -u 1337 -h /app syn-horse && chown -R syn-horse:syn-horse /app
COPY --chown=syn-horse:syn-horse package.json ./
COPY --from=prod-deps --chown=syn-horse:syn-horse /app/node_modules ./node_modules
COPY --from=build --chown=syn-horse:syn-horse /app/dist ./dist
USER 1337

# Add a healthcheck to ensure the application is working
HEALTHCHECK --interval=60s --timeout=10s --start-period=20s --retries=3 CMD ["node", "dist/cmd.js"]

# Set the default command to run the CLI
CMD ["node", "dist/cmd.js"]
