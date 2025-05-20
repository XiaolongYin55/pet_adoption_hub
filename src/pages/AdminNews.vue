<template>
  <div class="product-list">
    <h1>Pet News</h1>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Title</th>
          <th>Summary
            <button @click="publishNews(item)">publish</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(news, index) in petNews" :key="index">
          <td>{{ news.date }}</td>
          <td>{{ news.title }}</td>
          <td>{{ news.summary }}</td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const petNews = ref([
  {
    date: '2025-05-18',
    title: 'New Pet Adoption Center Opens Downtown',
    summary: 'A new center for pet adoption has opened, offering free vaccines for the first 100 pets.',
  },
  {
    date: '2025-05-17',
    title: 'Top 10 Dog Breeds for Families in 2025',
    summary: 'Experts share the best dog breeds for households with children and elderly.',
  },
  {
    date: '2025-05-16',
    title: 'How to Keep Your Cat Healthy During Summer',
    summary: 'Veterinarians recommend tips to keep your feline friends cool and hydrated.',
  },
]);
</script>
<style scoped src="@/assets/user-home.css"></style>