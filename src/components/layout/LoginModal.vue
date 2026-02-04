<template>
  <div class="fixed inset-0 z-[160] flex items-center justify-center p-4">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" @click="$emit('close')"></div>

    <!-- Modal Content -->
    <div class="relative bg-white dark:bg-[#1e212b] w-full max-w-sm rounded-2xl shadow-2xl p-6 md:p-8 transform transition-all scale-100">
      <button 
        @click="$emit('close')"
        class="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500 dark:text-gray-400"
      >
        <span class="material-symbols-outlined">close</span>
      </button>

      <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        {{ t('auth.login_title') }}
      </h2>

      <div class="space-y-4">
        <a 
          href="https://sert.mc.uz/" 
          target="_blank"
          class="flex items-center gap-4 w-full p-4 rounded-xl border-2 border-primary hover:bg-primary hover:text-white text-primary transition-all group"
        >
          <div class="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-white/20 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-2xl group-hover:text-white">card_membership</span>
          </div>
          <div class="text-left">
            <h3 class="font-bold text-sm uppercase tracking-wide">{{ t('auth.certificate_system') }}</h3>
            <span class="text-xs opacity-70">sert.mc.uz</span>
          </div>
          <span class="material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
        </a>

        <a 
          href="https://monitoring.mc.uz/login" 
          target="_blank"
          class="flex items-center gap-4 w-full p-4 rounded-xl border-2 border-secondary hover:bg-secondary hover:text-white text-secondary transition-all group"
        >
          <div class="w-10 h-10 rounded-lg bg-secondary/10 group-hover:bg-white/20 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-2xl group-hover:text-white">monitoring</span>
          </div>
          <div class="text-left">
            <h3 class="font-bold text-sm uppercase tracking-wide">{{ t('auth.monitoring_system') }}</h3>
            <span class="text-xs opacity-70">monitoring.mc.uz</span>
          </div>
          <span class="material-symbols-outlined ml-auto opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineEmits(['close']);
const { t } = useI18n();
</script>
