<template>
  <div>
    <h3>Tech Gadgets</h3>
    <div class="product-grid">
      <div v-for="item in products" :key="item.id" class="product-card">
        <img :src="`/images/${item.image}`" :alt="item.name" />
        <h4>{{ item.name }}</h4>
        <p>{{ item.description }}</p>
        <p>${{ item.price }}</p>
        <button @click="addToCart(item)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const products = ref([]);

onMounted(() => {
  const cached = sessionStorage.getItem('productList');
  if (cached) {
    products.value = JSON.parse(cached);
  }
});

function addToCart(item) {
  let cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
  const existing = cart.find(p => p.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  sessionStorage.setItem('cart', JSON.stringify(cart));
  alert('商品已加入到 My Cart 页面');
}
</script>
