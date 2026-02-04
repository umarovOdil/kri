<template>
  <section class="py-16 bg-white dark:bg-[#1a1d26]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold text-primary dark:text-primary mb-12">{{ t('useful_links.title') }}</h2>
      
      <div class="flex flex-wrap justify-center items-start gap-8">
        <a v-for="(link, index) in links" :key="index" :href="link.url" target="_self" class="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.5rem)] lg:w-[calc(20%-2rem)] flex flex-col items-center group cursor-pointer">
          <div class="w-24 h-24 mb-4 flex items-center justify-center transition-transform group-hover:scale-110">
             <img :src="link.logo" :alt="link.title" class="w-full h-full object-contain" />
          </div>
          <p class="text-primary text-sm font-medium leading-tight max-w-[200px]">{{ link.title }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const links = computed(() => [
  {
    title: t('useful_links.president'),
    logo: '/logo_gerb.png',
    url: 'https://president.uz'
  },
  {
    title: t('useful_links.civil_service'),
    logo: '/logo_gerb.png',
    url: 'https://bsa.uz'
  },
  {
    title: t('useful_links.government'),
    logo: '/logo_gerb.png',
    url: 'https://gov.uz'
  },
  {
    title: t('useful_links.assessment'),
    logo: '/bma-logo.svg',
    url: 'https://my.uzbmb.uz'
  },
  {
    title: t('useful_links.economy'),
    logo: '/logo_gerb.png',
    url: 'https://www.imv.uz'
  }
]);
</script>
