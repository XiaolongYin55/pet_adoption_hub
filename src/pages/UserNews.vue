<template>
  <div class="product-list">
    <h1>Pet News</h1>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Title</th>
          <th>Summary</th>
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
    title: 'Volunteers Launch “Stray Animals Home” Campaign',
    summary: 'Dozens of volunteers took to the streets this weekend to provide food and shelter for stray cats and dogs, encouraging adoption over buying.',
  },
  {
    date: '2025-05-17',
    title: 'Community Introduces “Pets for Seniors” Pilot Program',
    summary: 'A new initiative pairs friendly pets with elderly residents living alone to reduce loneliness and improve well-being.',
  },
  {
    date: '2025-05-16',
    title: 'Free Spay and Neuter Services to Control Stray Population ',
    summary: 'Animal clinics and welfare groups are offering free sterilization services this month, promoting responsible pet ownership.',
  },
]);
</script>
<style scoped src="@/assets/user-home.css"></style>