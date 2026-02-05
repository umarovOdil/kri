<template>
  <footer class="bg-[#14161e] text-white border-t-4 border-secondary">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div class="lg:col-span-2 flex flex-col gap-6">
          <div class="flex items-center gap-4">
            <img src="/logo_white.png" alt="KRI Logo" class="h-12 w-auto object-contain" />
            <div class="hidden sm:flex flex-col">
              <span class="text-white dark:text-white text-lg sm:text-lg font-extrabold leading-none tracking-tight uppercase">{{ t('footer.institute_name') }}</span>
              <span class="text-[12px] uppercase font-bold text-white leading-snug ">{{ t('footer.institute_sub') }}</span>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed max-w-sm">
            {{ t('footer.about') }}
          </p>

        </div>
        <div>
          <h3 class="text-sm font-bold mb-6 text-white uppercase tracking-wider">{{ t('footer.sections.institute') }}</h3>
          <ul class="flex flex-col gap-3">
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">{{ t('footer.links.about') }}</a></li>
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">{{ t('footer.links.leadership') }}</a></li>
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">{{ t('footer.links.structure') }}</a></li>
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">{{ t('footer.links.jobs') }}</a></li>
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">{{ t('footer.links.docs') }}</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-bold mb-6 text-white uppercase tracking-wider">{{ t('footer.sections.quick_links') }}</h3>
          <ul class="flex flex-col gap-3">
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">{{ t('footer.links.programs') }}</a></li>
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">{{ t('footer.links.schedule') }}</a></li>
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">{{ t('footer.links.distance') }}</a></li>
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">{{ t('footer.links.check') }}</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-bold mb-6 text-white uppercase tracking-wider">{{ t('footer.sections.contact') }}</h3>
          <div class="flex flex-col gap-4">
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-secondary text-sm mt-1">location_on</span>
              <span class="text-gray-400 text-sm">Toshkent shahri, Shayxontohur tumani, Abdulla Qodiriy koʻchasi, 7</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-secondary text-sm">call</span>
              <span class="text-gray-400 text-sm">(50) 333-24-05</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-secondary text-sm">mail</span>
              <span class="text-gray-400 text-sm">info@uzkri.uz</span>
            </div>

          </div>
        </div>
      </div>
      <div class="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-500 text-xs">{{ t('footer.rights') }}</p>

      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
