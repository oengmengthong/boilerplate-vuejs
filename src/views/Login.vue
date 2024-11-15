<script setup lang="ts">
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { useAuthStore } from '../stores/auth'

const authStore = useAuthStore()

const formData = ref({
  email: '',
  password: ''
})

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(8) }
}

const v$ = useVuelidate(rules, formData)

const submitForm = async () => {
  const isFormValid = await v$.value.$validate()
  if (!isFormValid) return

  // Simulate login
  authStore.setUser({
    id: 1,
    email: formData.value.email,
    name: 'User'
  })
}
</script>

<template>
  <div class="max-w-md mx-auto p-6">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-bold mb-6">Login</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium mb-1">Email</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            class="input w-full"
            :class="{ 'border-red-500': v$.email.$error }"
          />
          <p v-if="v$.email.$error" class="mt-1 text-sm text-red-500">
            {{ v$.email.$errors[0].$message }}
          </p>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium mb-1">Password</label>
          <input
            id="password"
            v-model="formData.password"
            type="password"
            class="input w-full"
            :class="{ 'border-red-500': v$.password.$error }"
          />
          <p v-if="v$.password.$error" class="mt-1 text-sm text-red-500">
            {{ v$.password.$errors[0].$message }}
          </p>
        </div>

        <button type="submit" class="btn w-full">Login</button>
      </form>
    </div>
  </div>
</template>