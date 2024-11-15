<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { createApp, h } from 'vue'

const props = defineProps<{
  code: string
}>()

const previewContainer = ref<HTMLElement | null>(null)

onMounted(() => {
  if (previewContainer.value) {
    // Clear previous content
    previewContainer.value.innerHTML = ''
    
    // Create a new app instance for the preview
    const app = createApp({
      template: `<div>${props.code}</div>`
    })
    
    // Mount the preview
    app.mount(previewContainer.value)
  }
})
</script>

<template>
  <div ref="previewContainer"></div>
</template>