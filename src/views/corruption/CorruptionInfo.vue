<template>
  <div class="py-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white dark:bg-[#1e212b] rounded-xl shadow-sm p-6 md:p-8">
        <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b pb-4">
          {{ t('corruption.title_info') }}
        </h1>
        
        <div class="space-y-4">
          <div v-for="(doc, index) in laws" :key="index" class="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 transition-colors">
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-[20px] mt-0.5">gavel</span>
              <div>
                <h3 class="font-bold text-base text-gray-800 dark:text-gray-200 mb-1 leading-snug">
                  {{ doc.title }}
                </h3>
                <p class="text-xs text-gray-500 font-medium">
                  {{ doc.subtitle }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

const laws = computed(() => {
  return tm('corruption.laws') as { title: string; subtitle: string }[];
});
</script>
