<template>
  <section class="py-20 bg-[#F4F6F8] dark:bg-background-dark border-t border-gray-100 dark:border-gray-800">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative overflow-hidden flex flex-col justify-center items-center text-center">
        <h2 class="text-3xl font-bold text-primary dark:text-white mb-2">{{ t('news.map_title') }}</h2>
        <div class="w-24 h-1 bg-primary rounded-full mb-12"></div>
        
        <div class="w-full max-w-7xl flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          <div class="w-full lg:w-2/3 flex items-center px-10">
            <UzbekistanMap :regions="regions" />
          </div>
          
          <div class="w-full lg:w-1/3 bg-white dark:bg-[#1e212b] rounded-xl border border-gray-100 dark:border-gray-800 text-left flex flex-col shadow-lg h-full">
            <div class="p-6 border-b border-gray-100 dark:border-gray-700 bg-primary/5">
              <h3 class="text-xl font-bold text-primary dark:text-white flex items-center gap-2">
                <span class="material-symbols-outlined">analytics</span>
                Hududlar kesimida
              </h3>
            </div>
            
            <div class="p-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div 
                  v-for="(region, index) in regions" 
                  :key="region.id"
                  class="flex items-center justify-between p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-primary/30 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all group cursor-default"
                >
                  <div class="flex items-center gap-2 overflow-hidden">
                    <div class="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px] shrink-0">
                      {{ index + 1 }}
                    </div>
                    <span class="font-medium text-sm text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors truncate" :title="region.name">{{ region.name }}</span>
                  </div>
                  <span class="font-bold text-primary text-sm shrink-0">
                    {{ region.count }}
                  </span>
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
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import UzbekistanMap from './UzbekistanMap.vue';

const { t } = useI18n();

const regions = ref([
 { id: 'UZ-QR', name: 'Qoraqalpog\'iston', x: 200, y: 180, count: 45 },
 { id: 'UZ-NW', name: 'Navoiy', x: 400, y: 230, count: 23 },
 { id: 'UZ-BU', name: 'Buxoro', x: 350, y: 350, count: 18 },
 { id: 'UZ-XO', name: 'Xorazm', x: 210, y: 270, count: 31 },
 { id: 'UZ-QA', name: 'Qashqadaryo', x: 480, y: 420, count: 27 },
 { id: 'UZ-SU', name: 'Surxondaryo', x: 530, y: 480, count: 19 },
 { id: 'UZ-SA', name: 'Samarqand', x: 480, y: 360, count: 34 },
 { id: 'UZ-JI', name: 'Jizzax', x: 540, y: 330, count: 22 },
 { id: 'UZ-SI', name: 'Sirdaryo', x: 590, y: 320, count: 15 },
 { id: 'UZ-TK', name: 'Toshkent sh.', x: 620, y: 260, count: 56 },
 { id: 'UZ-TO', name: 'Toshkent v.', x: 660, y: 240, count: 42 },
 { id: 'UZ-NG', name: 'Namangan', x: 720, y: 260, count: 28 },
 { id: 'UZ-FA', name: 'Farg\'ona', x: 690, y: 340, count: 36 },
 { id: 'UZ-AN', name: 'Andijon', x: 760, y: 300, count: 29 },
])
</script>
