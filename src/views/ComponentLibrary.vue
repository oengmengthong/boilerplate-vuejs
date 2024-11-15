<script setup lang="ts">
import { ref } from 'vue'
import ComponentPreview from '../components/ComponentPreview.vue'

interface Component {
  id: string
  name: string
  description: string
  code: string
  props?: { name: string; type: string; description: string }[]
}

const components: Component[] = [
  {
    id: 'button',
    name: 'Button',
    description: 'A versatile button component with different variants and states.',
    code: '<button class="btn">Click me</button>',
    props: [
      { name: 'variant', type: 'primary | secondary | outline', description: 'Button style variant' },
      { name: 'size', type: 'sm | md | lg', description: 'Button size' }
    ]
  },
  {
    id: 'input',
    name: 'Input',
    description: 'Text input component with validation support.',
    code: '<input type="text" class="input" placeholder="Enter text..." />',
    props: [
      { name: 'type', type: 'text | password | email', description: 'Input type' },
      { name: 'modelValue', type: 'string', description: 'v-model binding value' }
    ]
  },
  {
    id: 'card',
    name: 'Card',
    description: 'Container component for content with consistent padding and styling.',
    code: `<div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
  <h3 class="text-lg font-semibold mb-2">Card Title</h3>
  <p class="text-gray-600 dark:text-gray-400">Card content goes here.</p>
</div>`
  }
]

const selectedComponent = ref(components[0])

const selectComponent = (component: Component) => {
  selectedComponent.value = component
}
</script>

<template>
  <div class="min-h-screen flex">
    <!-- Component Menu -->
    <aside class="w-64 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-4">Components</h2>
        <nav class="space-y-1">
          <button
            v-for="component in components"
            :key="component.id"
            @click="selectComponent(component)"
            class="w-full text-left px-4 py-2 rounded-md transition-colors"
            :class="{
              'bg-primary-light text-white': selectedComponent.id === component.id,
              'hover:bg-gray-200 dark:hover:bg-gray-700': selectedComponent.id !== component.id
            }"
          >
            {{ component.name }}
          </button>
        </nav>
      </div>
    </aside>

    <!-- Component Details -->
    <main class="flex-1 p-6">
      <div v-if="selectedComponent" class="max-w-3xl mx-auto">
        <header class="mb-8">
          <h1 class="text-3xl font-bold mb-2">{{ selectedComponent.name }}</h1>
          <p class="text-gray-600 dark:text-gray-400">{{ selectedComponent.description }}</p>
        </header>

        <!-- Preview -->
        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Preview</h2>
          <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <ComponentPreview :code="selectedComponent.code" />
          </div>
        </section>

        <!-- Code -->
        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Code</h2>
          <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>{{ selectedComponent.code }}</code></pre>
        </section>

        <!-- Props -->
        <section v-if="selectedComponent.props">
          <h2 class="text-xl font-semibold mb-4">Props</h2>
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <table class="w-full">
              <thead>
                <tr class="bg-gray-50 dark:bg-gray-700">
                  <th class="px-4 py-2 text-left">Name</th>
                  <th class="px-4 py-2 text-left">Type</th>
                  <th class="px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="prop in selectedComponent.props" :key="prop.name" class="border-t border-gray-200 dark:border-gray-700">
                  <td class="px-4 py-2 font-mono text-sm">{{ prop.name }}</td>
                  <td class="px-4 py-2 font-mono text-sm">{{ prop.type }}</td>
                  <td class="px-4 py-2">{{ prop.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>