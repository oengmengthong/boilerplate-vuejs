<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="bg-gray-100 dark:bg-gray-800 mt-auto">
    <div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Vue 3 + Vite</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400">
            © {{ new Date().getFullYear() }} {{ t('footer.rights') }}
          </p>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">{{ t('footer.links.title') }}</h4>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark">
                {{ t('footer.links.privacy') }}
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark">
                {{ t('footer.links.terms') }}
              </a>
            </li>
            <li>
              <a href="#" class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark">
                {{ t('footer.links.contact') }}
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-lg font-semibold mb-4">{{ t('language') }}</h4>
          <select
            v-model="$i18n.locale"
            class="input text-sm"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </div>
    </div>
  </footer>
</template>