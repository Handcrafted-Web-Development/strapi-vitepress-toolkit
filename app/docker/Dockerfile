# Utilisation de Node.js® 20 (latest)
FROM node:20

# Définition du répertoire de travail
WORKDIR /app

# Installation de Strapi
RUN npx create-strapi-app@latest strapi

# Installation de VitePress
RUN mkdir vitepress && cd vitepress && npm create vitepress@latest . && npm install

# Exposer les ports de Strapi (1337) et VitePress (5173)
EXPOSE 1337 5173

# Démarrer Strapi et VitePress (lancement en parallèle)
CMD cd strapi && npm run develop & cd ../vitepress && npm run dev