<template>
  <div class="product-list">
    <!-- <h2>Smartphones</h2> -->
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Brand</th>
          <th>FREE Delivery</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in smartphones" :key="item.id">
          <td>{{ item.id }}</td>
          <td><img :src="`/images/${item.image}`" alt="item" width="50" /></td>
          <td>{{ item.name }}</td>
          <td>${{ item.price }}</td>
          <td>{{ item.brand }}</td>
          <td>YES</td>
          <td><button @click="addToCart(item)">Add to Cart</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '@/stores/cart';
import productsService from '@/services/products';

const cartStore = useCartStore();
const route = useRoute();
const smartphones = ref([]);
const isLoading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const category = route.path.split('/').pop(); // "smartphones"
    smartphones.value = await productsService.getProductsByCategory(category);
  } catch (err) {
    error.value = `Failed to load products: ${err.message}`;
    console.error(err);
  } finally {
    isLoading.value = false;
  }
});

function addToCart(item) {
    item.category = 'smartphones'; // 或根据需要修改为其他分类
  cartStore.addToCart(item);
}
</script>

<style scoped src="@/assets/user-home.css"></style>