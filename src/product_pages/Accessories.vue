<template>
  <div class="product-list">
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
        <tr v-for="item in accessories" :key="item.id">
          <td>{{ item.id }}</td>
          <td><img :src="`/images/${item.image}`" alt="item" width="60px" /></td>
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
const accessories = ref([]);
const isLoading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const category = route.path.split('/').pop();
    accessories.value = await productsService.getProductsByCategory(category);
  } catch (err) {
    error.value = `Failed to load products: ${err.message}`;
    console.error(err);
  } finally {
    isLoading.value = false;
  }
});

// 添加商品到购物车
function addToCart(item) {
  item.category = 'accessories'; // 确保商品的分类信息
  cartStore.addToCart(item);
}
</script>

<style scoped src="@/assets/user-home.css"></style>
