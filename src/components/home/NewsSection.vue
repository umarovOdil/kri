<template>
  <section class="py-20 bg-white dark:bg-[#1a1d26]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold text-primary dark:text-white">{{ t('news.title') }}</h2>
          <!-- <router-link to="/news" class="text-sm font-bold text-gray-500 hover:text-primary flex items-center gap-1">
            {{ t('news.all') }} <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </router-link> -->
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="(news, index) in newsList" :key="index" class="flex flex-col bg-white dark:bg-[#1e212b] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-800 group h-full relative">
            
            <div class="h-48 overflow-hidden relative">
              <!-- <div class="absolute top-4 left-4 w-10 h-10 flex flex-col items-center justify-center text-white text-[10px] font-bold text-center leading-tight rounded-lg shadow-md z-10" :class="index === 0 ? 'bg-secondary' : 'bg-primary'">
                <span v-html="news.dateBadge"></span>
              </div> -->
              <div class="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700" :style="{ backgroundImage: `url('${news.image}')` }"></div>
              <!-- Full card link overlay -->
              <router-link :to="{ name: 'news-detail', params: { id: news.id } }" class="absolute inset-0 z-0"></router-link>
            </div>
            
            <div class="p-6 flex flex-col flex-1 relative z-10 pointer-events-none">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">{{ t('news.badge') }}</span>
              </div>
              <h3 class="text-lg font-bold text-[#121316] dark:text-white group-hover:text-primary transition-colors mb-4 line-clamp-3">
                <router-link :to="{ name: 'news-detail', params: { id: news.id } }" class="pointer-events-auto">
                  {{ t(`news_data.${news.id}.title`) }}
                </router-link>
              </h3>
              <div class="mt-auto pt-4 border-t border-gray-50 dark:border-gray-700 pointer-events-auto">
                <router-link :to="{ name: 'news-detail', params: { id: news.id } }" class="text-sm font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all inline-flex">
                  {{ t('news.read_more') }} <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </router-link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { newsList } from '@/data/news';

const { t } = useI18n();
</script>
