import axios from 'axios';

const STRAPI_URL = 'http://localhost:1337';

export async function getArticles() {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/articles`);
    return response.data.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des articles:', error);
    return [];
  }
}