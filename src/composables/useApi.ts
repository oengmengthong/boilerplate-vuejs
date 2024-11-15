import axios, { AxiosError } from 'axios'
import { ref } from 'vue'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: Number(import.meta.env.VITE_API_TIMEOUT)
})

export function useApi<T>(url: string) {
  const data = ref<T | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(false)

  const fetch = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await api.get<T>(url)
      data.value = response.data
    } catch (e) {
      const axiosError = e as AxiosError
      error.value = axiosError.message
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    error,
    loading,
    fetch
  }
}