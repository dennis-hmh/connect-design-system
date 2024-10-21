ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine AS alpine
ARG PNPM_VERSION=8.15.9

RUN apk update
RUN apk add --no-cache libc6-compat git

RUN corepack enable
RUN corepack prepare pnpm@${PNPM_VERSION} --activate

CMD ["/bin/sh"]
