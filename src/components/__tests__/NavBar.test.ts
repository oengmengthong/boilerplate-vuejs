import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import NavBar from '../NavBar.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: { template: '<div>Home</div>' } },
    { path: '/about', component: { template: '<div>About</div>' } },
    { path: '/login', component: { template: '<div>Login</div>' } }
  ]
})

describe('NavBar', () => {
  it('renders navigation links correctly', () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router, createPinia()]
      }
    })

    expect(wrapper.find('a[to="/"]').exists()).toBe(true)
    expect(wrapper.find('a[to="/about"]').exists()).toBe(true)
  })

  it('shows login button when user is not authenticated', () => {
    const wrapper = mount(NavBar, {
      global: {
        plugins: [router, createPinia()]
      }
    })

    expect(wrapper.find('a[to="/login"]').exists()).toBe(true)
    expect(wrapper.find('button:contains("Logout")').exists()).toBe(false)
  })
})