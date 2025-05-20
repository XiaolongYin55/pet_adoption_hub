<!-- Login.vue -->
<template>
  <div class="login-container">
    <header class="header">
      <h1>Pet Adoption Hub</h1>
    </header>

    <div class="login-content">
      <div class="login-box">
        <h2>Welcome</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username</label>
            <input 
              id="username" 
              v-model="username" 
              type="text" 
              required 
              placeholder="Enter your username"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input 
              id="password" 
              v-model="password" 
              type="password" 
              required 
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" class="login-button">Login</button>
        </form>
      </div>
    </div>

    <footer class="footer">
      <p>&copy; 2025 MyCartExpress. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

function login() {
  if (!username.value) {
    alert('请输入用户名');
    return;
  }

  // 简单判断用户名，admin跳到/admin，其它跳到/user
  if (username.value.toLowerCase() === 'admin') {
    sessionStorage.setItem('username', username.value);
    router.push('/admin/smartphones');
  } else {
    sessionStorage.setItem('username', username.value);
    router.push('/user/laptops');
  }
}
</script>

<style scoped src="@/assets/public-home.css"></style>