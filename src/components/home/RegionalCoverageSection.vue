<template>
  <section class="py-20 bg-[#F4F6F8] dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative overflow-hidden flex flex-col justify-center items-center text-center">
        <h2 class="text-3xl font-bold text-primary dark:text-white mb-2">{{ t('news.map_title') }}</h2>
        <div class="w-24 h-1 bg-primary rounded-full mb-12"></div>
        
        <div class="w-full max-w-7xl flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          <div class="w-full lg:w-2/3 flex items-center">
            <UzbekistanMap />
          </div>
          
          <div class="w-full lg:w-1/3 h-100 bg-white dark:bg-[#1e212b] rounded-xl border border-gray-100 dark:border-gray-800 text-left overflow-hidden flex flex-col">
            <div class="h-58 w-100 relative">
              <img 
                src="/images/gallery/IMG_5542.JPG" 
                alt="Institute Building" 
                class="w-full h-full object-cover"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 class="absolute bottom-4 left-6 text-xl font-bold text-white">{{ t('contact.title') }}</h3>
            </div>
            
            <div class="p-8 space-y-6">
              <!-- Address -->
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <h4 class="font-bold text-xs text-gray-500 uppercase tracking-wider mb-1">{{ t('contact.address_title') }}</h4>
                  <a href="https://www.google.com/maps/search/?api=1&query=Toshkent+shahri,+Shayxontohur+tumani,+Abdulla+Qodiriy+koʻchasi,+7" target="_blank" class="text-sm font-medium text-gray-900 dark:text-white hover:text-primary transition-colors leading-relaxed block">
                    {{ t('contact.address') }}
                  </a>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-primary">call</span>
                </div>
                <div>
                  <h4 class="font-bold text-xs text-gray-500 uppercase tracking-wider mb-1">{{ t('contact.phone') }}</h4>
                  <a href="tel:+998503332405" class="text-lg font-bold text-primary hover:underline block">
                    (50) 333-24-05
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-primary">mail</span>
                </div>
                <div>
                  <h4 class="font-bold text-xs text-gray-500 uppercase tracking-wider mb-1">{{ t('contact.email') }}</h4>
                  <a href="mailto:info@ukri.uz" class="text-sm font-medium text-gray-900 dark:text-white hover:text-primary transition-colors">
                    info@ukri.uz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import UzbekistanMap from './UzbekistanMap.vue';

const { t } = useI18n();
</script>
