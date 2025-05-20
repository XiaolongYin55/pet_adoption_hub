
<template>
  <div class="public-home">
    <header class="header">
      <h1>Welcome to Pet Adoption Hub</h1>
                <li><router-link to="/login">Sign In &nbsp; &nbsp;|</router-link></li>
                <li><router-link to="/login">Sign Up</router-link></li>
    </header>

    <div class="content">
      <img src="/images/pet_adoption.jpg" alt="">
    </div>

    <footer class="footer">
      <p>&copy; 2025 Pet Adoption Hub. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped src="@/assets/public-home.css"></style>