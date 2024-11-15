<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => router.push('/')
</script>

<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <button @click="goHome">Go Home</button>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 2rem;
}

button {
  margin-top: 1rem;
}
</style>