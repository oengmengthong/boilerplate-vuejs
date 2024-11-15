<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '../stores/theme'

const { t } = useI18n()
const themeStore = useThemeStore()

const features = [
  {
    icon: '⚡️',
    title: t('home.features.fast'),
    description: 'Less than 2kb / module entry'
  },
  {
    icon: '🔑',
    title: t('home.features.typescript'),
    description: 'First-class TypeScript support'
  },
  {
    icon: '📦',
    title: t('home.features.components'),
    description: 'Rich ecosystem of components'
  },
  {
    icon: '🧪',
    title: t('home.features.testing'),
    description: 'Unit and E2E testing ready'
  }
]
</script>

<template>
  <main class="min-h-screen">
    <!-- Hero Section -->
    <section class="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary-dark">
          {{ t('home.title') }}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {{ t('home.subtitle') }}
        </p>
        <button class="btn text-lg px-8 py-3">
          {{ t('home.cta') }}
        </button>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">
          {{ t('home.features.title') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div class="text-4xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>