<template>
  <div class="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
    <div class="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-full mb-6 relative">
      <span class="material-symbols-outlined text-6xl text-primary animate-pulse">engineering</span>
      <div class="absolute -bottom-2 -right-2 bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-full border-4 border-white dark:border-[#1e212b]">
        <span class="material-symbols-outlined text-2xl text-yellow-600 dark:text-yellow-400">warning</span>
      </div>
    </div>
    
    <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
      {{ t('construction.title') }}
    </h1>
    
    <p class="text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-lg mb-8">
      {{ t('construction.description') }}
    </p>

    <router-link 
      to="/" 
      class="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
    >
      <span class="material-symbols-outlined">home</span>
      {{ t('construction.back_home') }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
