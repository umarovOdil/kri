<template>
  <section class="relative overflow-hidden min-h-[auto] lg:min-h-[78vh] flex items-center py-8 lg:py-16">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40 lg:to-transparent z-10"></div>
      <div 
        v-for="(image, index) in images" 
        :key="index"
        class="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        :class="{ 'opacity-100': currentImageIndex === index, 'opacity-0': currentImageIndex !== index }"
        :style="{ backgroundImage: `url('${image}')` }"
      ></div>
    </div>
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
      
      <!-- Combined Div Container -->
      <div class="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col-reverse lg:flex-row">
        
        <!-- Content Side -->
        <div class="p-8 lg:p-12 flex-1 flex flex-col justify-center">
          <div class="relative text-[#121316]">
            <span class="absolute -top-4 -left-2 text-6xl text-gray-200 font-serif">"</span>
            <p class="text-base md:text-lg italic leading-relaxed mb-6 relative z-10">
              {{ t('hero.quote') }}
            </p>
            <p class="text-base md:text-lg italic leading-relaxed mb-6">
               {{ t('hero.sub_quote') }}
            </p>
            <div class="mt-8 text-right">
              <span class="text-xs text-gray-500 font-bold uppercase block mb-1">{{ t('hero.position') }}</span>
              <span class="text-xl font-extrabold text-primary">{{ t('hero.name') }}</span>
            </div>
          </div>
          
          <div class="mt-8 pt-8 border-t border-gray-100">
             <a href="https://www.lex.uz/docs/-6905975" target="_blank" class="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              {{ t('hero.read_more') }} <span class="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </div>

        <!-- Image Side -->
        <div class="w-full lg:w-1/3 relative min-h-[300px] lg:min-h-[600px]">
            <img src="/president_final.png" alt="Shavkat Mirziyoyev" class="absolute inset-0 w-full h-full object-cover object-top" />
             <!-- Optional Overlay for better text contrast if needed, though image side is separate -->
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const images = [
  'https://gov.uz/_next/image?url=https%3A%2F%2Fapi-portal.gov.uz%2Fuploads%2F14%2F2025%2F03%2F18%2F780d6917-ba18-ea78-a419-3ef528482d51_lists_slider_.jpg&w=3840&q=75',
  'https://i.ytimg.com/vi/_6oG6d9FsGU/maxresdefault.jpg',
  'https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/469897322_122153796896319903_4629817628952688316_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pcW88Xk2CAEQ7kNvwF6RKnW&_nc_oc=AdmCyX8HO8k59IbX2S0Dcg6fL-BI-2ahdlaH2yEwyWJJLq75hjxBdIACXUyG1d9g4pU&_nc_zt=23&_nc_ht=scontent.ftas9-1.fna&_nc_gid=qo2QDorse7sgxFOlqY_maA&oh=00_AftWd1pwcnbRSyVpsk31LeYoltlcCos-Egwa85VHQd8w7w&oe=698647FC'
];

const currentImageIndex = ref(0);

let intervalId: number;

onMounted(() => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
  }, 5000); // Change every 5 seconds
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
