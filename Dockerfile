# FROM node:12 as builder

# COPY . /node
# WORKDIR /node

# RUN yarn && yarn build && yarn cache clean

# ### Production
# FROM node:12-alpine

# COPY . /node
# COPY --from=builder /node/.next /node/.next
# # COPY .next /node/.next

# WORKDIR /node
# RUN yarn --production

# EXPOSE 3000
# STOPSIGNAL SIGINT

# ENTRYPOINT yarn start
FROM node:12 AS deps

WORKDIR /node
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
# This is where because may be the case that you would try
# to build the app based on some `X_TAG` in my case (Git commit hash)
# but the code hasn't changed.
FROM node:12 AS builder

ENV NODE_ENV=production
WORKDIR /node
COPY . .
COPY --from=deps /node/node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM node:12 AS runner

ARG X_TAG
WORKDIR /node
ENV NODE_ENV=production
COPY --from=builder /node/next.config.js ./
COPY --from=builder /node/public ./public
COPY --from=builder /node/.next ./.next
COPY --from=builder /node/node_modules ./node_modules
EXPOSE 3000
STOPSIGNAL SIGINT
RUN yarn --production
