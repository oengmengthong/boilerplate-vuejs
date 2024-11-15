import { defineStore } from 'pinia'
import { useLocalStorage } from '../composables/useLocalStorage'

export const useThemeStore = defineStore('theme', () => {
  const isDark = useLocalStorage('theme-dark', false)

  function toggleTheme() {
    isDark.value = !isDark.value
    updateTheme()
  }

  function updateTheme() {
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  // Initialize theme on store creation
  updateTheme()

  return {
    isDark,
    toggleTheme
  }
})