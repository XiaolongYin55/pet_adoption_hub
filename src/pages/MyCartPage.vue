<template>
  <div class="product-list">
    <div v-if="cart.length === 0">Your cart is empty.</div>
    <table v-else>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="`${item.id}-${item.category}`"> <!-- 唯一key -->
          <td><img :src="`/images/${item.image}`" alt="item" width="50" /></td>
          <td>{{ item.name }}</td>
          <td>${{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
          <td>
            <button @click="increase(item.id, item.category)">+</button>
            <button @click="decrease(item.id, item.category)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="cart.length > 0" class="total-section">
      <p><strong>Total: ${{ total.toFixed(2) }}</strong></p>
      <router-link to="/user/payment">
        <button>Proceed to Payment</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
const { cart } = storeToRefs(cartStore);

// 通过 id + category 精确查找商品
function increase(id, category) {
  const item = cart.value.find(i => i.id === id && i.category === category);
  if (item) {
    item.quantity++;
    sessionStorage.setItem('cart', JSON.stringify(cart.value));
  }
}

function decrease(id, category) {
  const index = cart.value.findIndex(i => i.id === id && i.category === category);
  if (index !== -1) {
    if (cart.value[index].quantity > 1) {
      cart.value[index].quantity--;
    } else {
      cart.value.splice(index, 1); // 移除商品
    }
    sessionStorage.setItem('cart', JSON.stringify(cart.value));
  }
}

// 计算总价（无需修改）
const total = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
</script>

<style scoped src="@/assets/user-home.css"></style>
