<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-[#121316] font-display antialiased">
    <AppHeader />
    <main class="flex-grow">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
