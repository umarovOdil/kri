<template>
  <section class="py-12 bg-white dark:bg-[#1e212b] border-t border-gray-100 dark:border-gray-800">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <p class="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">{{ t('partners.title') }}</p>
      <div class="flex justify-center flex-wrap gap-8 md:gap-16">
        
        <!-- President Administration -->
        <a href="https://president.uz/oz/pages/view/about_staff?menu_id=15" target="_blank" class="flex flex-col items-center gap-3 group opacity-70 hover:opacity-100 transition-opacity duration-300">
           <div class="w-16 h-16 flex items-center justify-center transition-transform hover:scale-110 duration-300">
             <img src="/logo_gerb.png" alt="Gerb" class="w-full h-full object-contain">
           </div>
           <span class="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center max-w-[200px]">{{ t('partners.president_admin') }}</span>
        </a>

        <!-- Ministry of Construction -->
        <a href="https://gov.uz/oz/mc" target="_blank" class="flex flex-col items-center gap-3 group opacity-70 hover:opacity-100 transition-opacity duration-300">
           <div class="w-16 h-16 flex items-center justify-center transition-transform hover:scale-110 duration-300">
             <img src="/logo_gerb.png" alt="Gerb" class="w-full h-full object-contain">
           </div>
           <span class="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center max-w-[200px]">{{ t('partners.min_construction') }}</span>
        </a>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
