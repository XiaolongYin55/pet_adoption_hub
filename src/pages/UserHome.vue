
<template>
  
  <div class="user-home">
    <header>
      <h2>Welcome, {{ username }}</h2>
    </header>
    
    <div class="layout">
      
      <aside class="sidebar">
        <ul>
          <li><router-link to="/user/smartphones">Smartphones</router-link></li>
          <li><router-link to="/user/laptops">Laptops</router-link></li>
          <li><router-link to="/user/accessories">Accessories</router-link></li>
          <li><router-link to="/user/wearables">Wearables</router-link></li>
          <li><router-link to="/user/cart">My Cart</router-link></li>
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

// 在一个合适的地方（比如 UserHome.vue 的 mounted 生命周期）存储数据
// const productData = {
//   smartphones: [
//     { id: 1, name: "iPhone 14", price: 999, brand: "Apple", quantity: 1, image: "p1.jpg" },
//     { id: 2, name: "Galaxy S22", price: 799, brand: "Samsung", quantity: 1, image: "p2.jpg"},
//     { id: 3, name: "Pixel 6", price: 599, brand: "Google", quantity: 1, image: "p3.jpg" },
//     { id: 4, name: "OnePlus 9", price: 699, brand: "OnePlus", quantity: 1, image: "p4.jpg" }
//   ],
//   laptops: [
//     { id: 1, name: "MacBook Pro", price: 1299, brand: "Apple", quantity: 1, image: "l1.jpg" , totalPrice: 0 },
//     { id: 2, name: "Dell XPS 13", price: 1099, brand: "Dell", quantity: 1, image: "l2.jpg" , totalPrice: 0 },
//     { id: 3, name: "HP Spectre x360", price: 1199, brand: "HP", quantity: 1, image: "l3.jpg" , totalPrice: 0 },
//     { id: 4, name: "Surface Laptop 4", price: 1299, brand: "Microsoft", quantity: 1, image: "l4.jpg" , totalPrice: 0 }
//   ],
//   accessories: [
//     { id: 1, name: "AirPods Pro", price: 249, brand: "Apple", quantity: 1, image: "e1.jpg" , totalPrice: 0 },
//     { id: 2, name: "Galaxy Buds Pro", price: 199, brand: "Samsung", quantity: 1, image: "e2.jpg", totalPrice: 0},
//     { id: 3, name: "Sony WH-1000XM4", price: 350, brand: "Sony", quantity: 1, image: "e3.jpg" , totalPrice: 0 },
//     { id: 4, name: "JBL Flip 5", price: 120, brand: "JBL", quantity: 1, image: "e4.jpg" , totalPrice: 0 }
//   ],
//   wearables: [
//     { id: 1, name: "Apple Watch Series 7", price: 399, brand: "Apple", quantity: 1, image: "w1.jpg" , totalPrice: 0 },
//     { id: 2, name: "Galaxy Watch 4", price: 249, brand: "Samsung", quantity: 1, image: "w2.jpg" , totalPrice: 0 },
//     { id: 3, name: "Fitbit Charge 5", price: 179, brand: "Fitbit", quantity: 1, image: "w3.jpg" , totalPrice: 0 },
//     { id: 4, name: "Garmin Venu 2", price: 399, brand: "Garmin", quantity: 1, image: "w4.jpg", totalPrice: 0   }
//   ]
// };

// sessionStorage.setItem("productData", JSON.stringify(productData));

</script>

<style scoped src="@/assets/user-home.css"></style>

