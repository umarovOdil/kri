<template>
  <div class="pt-24 pb-16 min-h-screen bg-white dark:bg-[#1a1d26]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <button @click="goBack" class="inline-flex items-center text-primary mb-6 hover:underline bg-transparent border-none cursor-pointer">
        <span class="material-symbols-outlined mr-2">arrow_back</span>
        {{ t('news.back') }}
      </button>
      
      <article v-if="news" class="bg-white dark:bg-[#1e212b] rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div class="relative h-64 md:h-96 w-full">
          <img :src="news.image" :alt="t(`news_data.${news.id}.title`)" class="w-full h-full object-cover">
          <!-- <div class="absolute top-4 left-4 bg-primary text-white p-2 rounded-lg text-center leading-tight shadow-md">
            <span v-html="news.dateBadge" class="text-sm font-bold"></span>
          </div> -->
        </div>
        
        <div class="p-8">
          <div class="flex items-center gap-4 mb-6 text-sm">
            <span class="text-primary font-bold bg-primary/10 px-3 py-1 rounded-full">{{ t('news.badge') }}</span>
          </div>
          
          <h1 class="text-2xl md:text-3xl font-bold text-[#121316] dark:text-white mb-6">{{ t(`news_data.${news.id}.title`) }}</h1>
          
          <div class="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300" v-html="t(`news_data.${news.id}.content`)"></div>
        </div>
      </article>
      
      <div v-else class="text-center py-20">
        <div class="text-2xl font-bold text-gray-400">{{ t('news.not_found') }}</div>
        <router-link to="/" class="mt-4 inline-block px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          {{ t('news.to_home') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { newsList } from '@/data/news';

const { t } = useI18n();
const route = useRoute();
const router = useRouter();
const newsId = Number(route.params.id);

const goBack = () => {
  if (window.history.length > 2) {
    router.back();
  } else {
    router.push('/');
  }
};

const news = computed(() => newsList.find(item => item.id === newsId));
</script>
