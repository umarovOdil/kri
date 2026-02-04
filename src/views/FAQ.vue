<template>
  <div class="py-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div class="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('faq.title') }}
        </h1>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div class="space-y-4">
        <div 
          v-for="(item, index) in faqItems" 
          :key="index"
          class="bg-white dark:bg-[#1e212b] rounded-xl shadow-sm overflow-hidden transition-all duration-300"
        >
          <button 
            @click="toggleItem(index)"
            class="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          >
            <span class="font-bold text-gray-900 dark:text-white text-lg pr-8">{{ item.question }}</span>
            <span 
              class="material-symbols-outlined text-primary transition-transform duration-300 shrink-0"
              :class="{ 'rotate-180': openIndex === index }"
            >
              expand_more
            </span>
          </button>
          
          <div 
            v-show="openIndex === index"
            class="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700/50 pt-4"
          >
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, tm } = useI18n();

const openIndex = ref<number | null>(0);

const faqItems = computed(() => {
  return tm('faq.items') as { question: string; answer: string }[];
});

const toggleItem = (index: number) => {
  if (openIndex.value === index) {
    openIndex.value = null;
  } else {
    openIndex.value = index;
  }
};
</script>
