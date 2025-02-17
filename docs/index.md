---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Strapi Vitepress Toolkit"
  text: "A VitePress Site"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup>
import { ref, onMounted } from 'vue';
import { getArticles } from '.vitepress/strapi/api';

const articles = ref([]);

onMounted(async () => {
  articles.value = await getArticles();
});
</script>

# Articles de Strapi

<ul>
  <li v-for="article in articles" :key="article.id">
    <h2>{{ article.attributes.title }}</h2>
    <p>{{ article.attributes.content }}</p>
  </li>
</ul>
