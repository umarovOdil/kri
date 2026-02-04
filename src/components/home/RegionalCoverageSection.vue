<template>
  <section class="py-20 bg-[#F4F6F8] dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative overflow-hidden flex flex-col justify-center items-center text-center">
        <h2 class="text-3xl font-bold text-primary dark:text-white mb-2">{{ t('news.map_title') }}</h2>
        <div class="w-24 h-1 bg-primary rounded-full mb-12"></div>
        
        <div class="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div class="w-full lg:w-3/4">
            <UzbekistanMap />
          </div>
          
          <div class="w-full lg:w-1/4 bg-white dark:bg-[#1e212b] p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 text-left">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-100 dark:border-gray-700 pb-4">{{ t('contact.title') }}</h3>
            
            <div class="space-y-6">
              <!-- Address -->
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
                  <span class="material-symbols-outlined text-primary">location_on</span>
                </div>
                <div>
                  <h4 class="font-bold text-xs text-gray-500 uppercase tracking-wider mb-1">{{ t('contact.address_title') }}</h4>
                  <a href="https://www.google.com/maps/search/?api=1&query=Toshkent+shahri,+Shayxontohur+tumani,+Abdulla+Qodiriy+koʻchasi,+7A" target="_blank" class="text-sm font-medium text-gray-900 dark:text-white hover:text-primary transition-colors leading-relaxed block">
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
                  <a href="tel:+998503332401" class="text-lg font-bold text-primary hover:underline block">
                    (50) 333-24-01
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
                  <a href="mailto:info@kri.uz" class="text-sm font-medium text-gray-900 dark:text-white hover:text-primary transition-colors">
                    info@kri.uz
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
