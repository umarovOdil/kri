<template>
  <section class="py-16 relative overflow-hidden bg-primary text-white">
    <!-- Decorative patterns -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
    
    <div class="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> <!-- Removed pb-20 -->
      <div class="flex flex-col items-center text-center">
        <div class="mb-8">
          <div class="bg-blue-500/20 p-4 rounded-2xl backdrop-blur-sm border border-white/10 inline-flex">
            <span class="material-symbols-outlined text-5xl text-white">balance</span>
          </div>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <h2 class="text-xs font-bold mb-4 text-blue-200 uppercase tracking-[0.2em]">{{ t('mission.label') }}</h2>
          <p class="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            {{ t('mission.text') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
