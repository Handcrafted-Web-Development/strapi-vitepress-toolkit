ARG NODE_VERSION

FROM node:${NODE_VERSION}

USER root

WORKDIR /vitepress

RUN chown node:node -R /vitepress

USER node

CMD npm install && npm run build && npm run dev -- --host