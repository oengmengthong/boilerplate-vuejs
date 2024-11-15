import { defineStore } from 'pinia'
import { ref } from 'vue'

interface User {
  id: number
  email: string
  name: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = ref(false)

  function setUser(newUser: User | null) {
    user.value = newUser
    isAuthenticated.value = !!newUser
  }

  function logout() {
    user.value = null
    isAuthenticated.value = false
  }

  return {
    user,
    isAuthenticated,
    setUser,
    logout
  }
})