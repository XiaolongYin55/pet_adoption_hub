<template>
  <div class="payment-container">
    <h1>Post a Pet for Adoption</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>Pet Name</label>
        <input type="text" v-model="pet.name" required />
      </div>

      <div class="form-group">
        <label>Breed</label>
        <input type="text" v-model="pet.breed" required />
      </div>

      <div class="form-group">
        <label>Age</label>
        <input type="number" v-model="pet.age" required />
      </div>

      <div class="form-group">
        <label>Description</label>
        <textarea v-model="pet.description" required></textarea>
      </div>

      <div class="form-group">
        <label>Upload Image</label>
        <input type="file" @change="handleImageUpload" accept="image/*" />
      </div>

      <button type="submit">Post Pet</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const pet = ref({
  name: '',
  breed: '',
  age: '',
  description: ''
});

const imageFile = ref(null);
const message = ref('');

function handleImageUpload(event) {
  imageFile.value = event.target.files[0];
}

async function submitForm() {
  const formData = new FormData();
  formData.append('name', pet.value.name);
  formData.append('breed', pet.value.breed);
  formData.append('age', pet.value.age);
  formData.append('description', pet.value.description);
  if (imageFile.value) {
    formData.append('image', imageFile.value);
  }

  try {
    await axios.post('http://localhost:8080/pets/upload', formData);
    message.value = 'Pet posted successfully!';
    // 清空表单
    pet.value = { name: '', breed: '', age: '', description: '' };
    imageFile.value = null;
  } catch (error) {
    message.value = 'Failed to post pet.';
  }
}
</script>
<style scoped src="@/assets/payment.css"></style>