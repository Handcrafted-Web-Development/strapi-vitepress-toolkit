ARG NODE_VERSION

FROM node:${NODE_VERSION}

USER root

WORKDIR /strapi

RUN chown node:node -R /strapi

USER node

CMD npm install && npm run build && npm run develop