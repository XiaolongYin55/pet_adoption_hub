<template>
  
  <div class="user-home">
    <header>
      <h2>Welcome, {{ username }}</h2>
    </header>
    
    <div class="layout">
      
      <aside class="sidebar">
        <ul>
          <li><router-link to="/admin/smartphones">Users</router-link></li>
          <li><router-link to="/admin/laptops">Products</router-link></li>
          <li><router-link to="/admin/news">News</router-link></li>
          <li><router-link to="/">Logout</router-link></li>
        </ul>
      </aside>

      <main class="content">
        <router-view />
      </main>
    </div>
    
    <footer class="footer">
      <p>&copy; 2025 MyCartExpress. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const username = sessionStorage.getItem('username') || 'Guest';
const router = useRouter();
</script>

<style scoped src="@/assets/user-home.css"></style>