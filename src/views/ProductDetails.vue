<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useApi } from '../composables/useApi'
import { usePageMeta } from '../utils/meta'
import { formatPrice } from '../utils/currency'

interface Product {
  id: string
  name: string
  description: string
  price: number
}

const route = useRoute()
const { data: product, error, loading, fetch } = useApi<Product>(`/products/${route.params.id}`)

onMounted(() => {
  fetch()
})

// Update meta tags when product data is available
watch(() => product.value, (newProduct) => {
  if (newProduct) {
    usePageMeta({
      title: newProduct.name,
      description: newProduct.description,
      url: window.location.href
    })
  }
})
</script>

<template>
  <div class="max-w-2xl mx-auto p-6">
    <div v-if="loading" class="text-center">
      <p>Loading product...</p>
    </div>
    
    <div v-else-if="error" class="text-red-500">
      {{ error }}
    </div>
    
    <div v-else-if="product" class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h1 class="text-2xl font-bold mb-4">{{ product.name }}</h1>
      <p class="text-gray-600 dark:text-gray-300 mb-4">{{ product.description }}</p>
      <p class="text-lg font-semibold text-primary-light dark:text-primary-dark">
        {{ formatPrice(product.price) }}
      </p>
    </div>
  </div>
</template>