
<template>
  <div class="public-home">
    <header class="header">
      <h1>Welcome to MyCartExpress</h1>
                <li><router-link to="/login">Sign In &nbsp; &nbsp;|</router-link></li>
                <li><router-link to="/login">Sign Up</router-link></li>
    </header>

    <div class="content">
      <img src="/images/public_home2.jpg" alt="">
    </div>

    <footer class="footer">
      <p>&copy; 2025 MyCartExpress. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<style scoped src="@/assets/public-home.css"></style>