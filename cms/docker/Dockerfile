ARG NODE_VERSION

FROM node:${NODE_VERSION}

USER root

WORKDIR /strapi

RUN chown node:node -R /strapi

USER node

# Garde le conteneur actif en attendant les instructions
CMD ["tail", "-f", "/dev/null"]

#CMD npm install && npm run build && npm run develop