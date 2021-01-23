FROM node:12-alpine as BUILD_IMAGE

WORKDIR /app

COPY . .

# install dependencies
RUN yarn install --frozen-lockfile && yarn build

RUN npm prune --production

FROM node:12-alpine

WORKDIR /app

# copy from build image
COPY --from=BUILD_IMAGE /app/.next ./.next

EXPOSE 3000
CMD ["yarn", "start"]
