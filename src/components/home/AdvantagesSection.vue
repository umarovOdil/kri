<template>
  <section class="py-16 bg-white dark:bg-[#1a1d26]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-primary dark:text-primary mb-12">{{ t('advantages.title') }}</h2>

      <div class="flex flex-wrap justify-center gap-6">
        <!-- Top Row (4 items) -->
        <div v-for="(item, index) in topRowItems" :key="index" class="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] flex">
          <div class="bg-white dark:bg-background-dark border border-primary p-6 rounded-none flex flex-col items-center text-center hover:shadow-lg transition-shadow w-full h-full">
             <div class="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-4 text-primary dark:text-white">
                <span class="material-symbols-outlined text-3xl">{{ item.icon }}</span>
             </div>
             <h3 class="text-primary font-semibold text-lg mb-3">{{ item.title }}</h3>
             <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>

        <!-- Bottom Row (3 items) -->
        <div v-for="(item, index) in bottomRowItems" :key="'bottom-' + index" class="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] flex">
           <div class="bg-white dark:bg-background-dark border border-primary p-6 rounded-none flex flex-col items-center text-center hover:shadow-lg transition-shadow w-full h-full">
             <div class="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-4 text-primary dark:text-white">
                <span class="material-symbols-outlined text-3xl">{{ item.icon }}</span>
             </div>
             <h3 class="text-primary font-semibold text-lg mb-3">{{ item.title }}</h3>
             <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const topRowItems = computed(() => [
  {
    icon: 'workspace_premium',
    title: t('advantages.cert.title'),
    description: t('advantages.cert.desc')
  },
  {
    icon: 'school',
    title: t('advantages.course.title'),
    description: t('advantages.course.desc')
  },
  {
    icon: 'menu_book',
    title: t('advantages.manual.title'),
    description: t('advantages.manual.desc')
  },
  {
    icon: 'science',
    title: t('advantages.science.title'),
    description: t('advantages.science.desc')
  }
]);

const bottomRowItems = computed(() => [
  {
    icon: 'public',
    title: t('advantages.inter.title'),
    description: t('advantages.inter.desc')
  },
  {
    icon: 'computer',
    title: t('advantages.digital.title'),
    description: t('advantages.digital.desc')
  },
  {
    icon: 'groups',
    title: t('advantages.expert.title'),
    description: t('advantages.expert.desc')
  }
]);
</script>
