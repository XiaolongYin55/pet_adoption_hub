
<template>
  
  <div class="user-home">
    <header>
      <h2>Welcome, {{ username }}</h2>
    </header>
    
    <div class="layout">
      
      <aside class="sidebar">
        <ul>
          <!-- <li><router-link to="/user/smartphones">Smartphones</router-link></li> -->
          <li><router-link to="/user/laptops">Products</router-link></li>
          <li><router-link to="/user/accessories">Pets</router-link></li>
          <li><router-link to="/user/publish">Publish</router-link></li>
          <li><router-link to="/user/news">News</router-link></li>
          <li><router-link to="/user/cart">My Cart</router-link></li>
          <li><router-link to="/">Logout</router-link></li>
        </ul>
      </aside>

      <main class="content">
        <router-view />
      </main>
    </div>
    
    <footer class="footer">
      <p>&copy; 2025 Pet Adoption Hub. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const username = sessionStorage.getItem('username') || 'Guest';
const router = useRouter();
</script>

<style scoped src="@/assets/user-home.css"></style>

