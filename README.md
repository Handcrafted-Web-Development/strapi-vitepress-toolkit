<p align="center"><a href="https://strapi.io" target="_blank"><img src="https://strapi.io/assets/strapi-logo-light.svg" width="300" alt="Strapi Logo"></a></p>
<p align="center"><a href="https://vitepress.dev" target="_blank"><img src="https://vitepress.dev/vitepress-logo-mini.svg" width="100" alt="VitePress Logo"></a></p>

# Strapi & Vitepress Toolkit with Docker 🐳 - Une documentation en ligne pour les développeurs Web  👨🏼‍💻

_Lisez attentivement le Readme avant de commencer toute manipulation !_ ✌️

## Prérequis 👨🏼‍🏫

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com)
- [Strapi](https://strapi.io)
- [VitePress](https://vitepress.dev)

## Étapes d'Installation

1. **Cloner le Projet**

Ouvrez un terminal et exécutez la commande suivante pour cloner le projet depuis le dépôt Git :

#### SSH

```shell
git clone git@github.com:Handcrafted-Web-Development/strapi-vitepress-toolkit.git
```

2. **Configurer l’Environnement**

Naviguez dans le répertoire du projet et créez un fichier `.env` à partir du modèle fourni :

```shell
cd strapi-vitepress-toolkit
cp .env .env.local
```

Ouvrez le fichier `.env` et ajustez les variables d’environnement selon vos besoins.

3. **Lancer les Containers Docker**

```shell
docker-compose up -d --build
```

Cette commande va construire les images si nécessaire et démarrer les conteneurs en mode détaché.

4. **Vérifier si les Containers sont lancés**

```shell
docker ps
```

5. **Accéder à Strapi**

Une fois les conteneurs lancés, Strapi sera accessible à l’adresse :

http://localhost:1337/admin/auth/login

Lors de votre première visite, suivez les instructions pour créer un compte administrateur et enregistrer les informations d'authentification dans votre coffre fort numérique.

**Commandes Docker Utiles**

•	Arrêter les conteneurs :
```shell
docker-compose down
```

•	Voir les logs :
```shell
docker-compose logs -f
```

•	Redémarrer les conteneurs :
```shell
docker-compose restart
```

**Connectez-vous à vos Containers dans votre terminal**

•	Strapi :

```shell
docker exec -it strapi sh
```

Pour sortir de ce container :

```shell
exit
```

**Dépannage**

•	Si vous rencontrez des problèmes de permissions, assurez-vous que les dossiers `/app` et `/data` ont les bonnes permissions pour être accessibles par Docker.

•	En cas d’erreur de connexion à la base de données, vérifiez les variables d’environnement dans le fichier `.env`.

**À venir**

L'intégration de Vitepress au projet.
Explication de la connection à la BDD en local.

Bon développement ! 🍀