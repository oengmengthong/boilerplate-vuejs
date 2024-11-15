<script setup lang="ts">
import { useAuthStore } from '../stores/auth'
import { useThemeStore } from '../stores/theme'

const authStore = useAuthStore()
const themeStore = useThemeStore()
</script>

<template>
  <nav class="bg-white dark:bg-gray-800 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center space-x-4">
          <router-link 
            to="/" 
            class="text-gray-900 dark:text-white hover:text-primary-light dark:hover:text-primary-dark"
          >
            Home
          </router-link>
          <router-link 
            to="/about"
            class="text-gray-900 dark:text-white hover:text-primary-light dark:hover:text-primary-dark"
          >
            About
          </router-link>
          <router-link 
            to="/components"
            class="text-gray-900 dark:text-white hover:text-primary-light dark:hover:text-primary-dark"
          >
            Components
          </router-link>
        </div>
        
        <div class="flex items-center space-x-4">
          <button 
            @click="themeStore.toggleTheme"
            class="btn"
          >
            {{ themeStore.isDark ? '🌞' : '🌙' }}
          </button>
          
          <router-link
            v-if="!authStore.isAuthenticated"
            to="/login"
            class="btn"
          >
            Login
          </router-link>
          <button
            v-else
            @click="authStore.logout"
            class="btn"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>