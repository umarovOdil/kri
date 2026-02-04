<template>
<div class="py-6 bg-gray-50 dark:bg-gray-900 min-h-screen flex justify-center">
    <div class="max-w-3xl w-full px-4 sm:px-6 lg:px-8">
      <!-- Contact Information -->
      <div class="bg-white dark:bg-[#1e212b] rounded-xl shadow-sm p-8 md:p-12">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 border-b pb-4 text-center">
          {{ t('corruption.title_appeal') }}
        </h1>
        
        <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-center">
          {{ t('corruption.desc_appeal') }}
        </p>

        <div class="space-y-6 max-w-lg mx-auto">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-primary text-2xl">call</span>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-1">{{ t('corruption.hotline') }}</h3>
              <p class="text-lg text-primary font-bold">(71) 241-11-73</p>
              <p class="text-xs text-gray-500 mt-1">Du-Ju: 09:00 - 18:00</p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-primary text-2xl">mail</span>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-1">{{ t('corruption.email') }}</h3>
              <a href="mailto:info@kri.uz" class="text-lg text-primary font-bold hover:underline">info@kri.uz</a>
            </div>
          </div>

          <!-- <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
              <span class="material-symbols-outlined text-primary text-2xl">smart_toy</span>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-1">{{ t('corruption.bot') }}</h3>
              <a href="#" class="text-lg text-primary font-bold hover:underline">@KRI_Anticor_Bot</a>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
