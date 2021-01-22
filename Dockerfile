# FROM node:12 as builder

# COPY . /node
# WORKDIR /node

# RUN yarn install --frozen-lockfile && yarn build

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
FROM node:12 AS builder

ENV NODE_ENV=production
WORKDIR /node
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Production image, copy all the files and run next
FROM node:12 AS runner

WORKDIR /node
COPY --from=builder /node/next.config.js ./
COPY --from=builder /node/public ./public
COPY --from=builder /node/.next ./.next
COPY --from=builder /node/node_modules ./node_modules
EXPOSE 3000
STOPSIGNAL SIGINT
RUN yarn --production
