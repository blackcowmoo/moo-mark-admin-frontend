FROM node:12-alpine as BUILD_IMAGE

WORKDIR /app

COPY . .

# install dependencies
RUN yarn --production --frozen-lockfile
RUN yarn build

FROM node:12-alpine

WORKDIR /app

# copy from build image
COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public

EXPOSE 3000
CMD ["yarn", "start"]
