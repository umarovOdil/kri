<template>
  <section class="py-20 bg-[#F4F6F8] dark:bg-background-dark clip-slope">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mb-8">
          <h2 class="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-2">{{ t('courses.title') }}</h2>
        </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(course, index) in courses" :key="index" class="group bg-white dark:bg-[#1e212b] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full border-t-4 border-primary">
          <div class="relative h-48 overflow-hidden">
            <div class="absolute inset-0 bg-primary/20 z-10 group-hover:bg-transparent transition-colors"></div>
            <div class="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700" :style="{ backgroundImage: `url('${course.image}')` }"></div>
            <div class="absolute bottom-0 left-0 bg-primary text-white text-xs font-bold px-3 py-1.5 z-20" :class="course.badgeColor ? 'bg-' + course.badgeColor : 'bg-primary'">{{ course.category }}</div>
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-lg font-bold text-[#121316] dark:text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">{{ course.title }}</h3>
            <p class="text-sm text-gray-500 line-clamp-3">{{ course.description }}</p>
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

const courses = computed(() => [
  {
    category: t('courses.categories.engineering'),
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx2DuIG6ziGji875iR5xhhXBWunx7RKy99rUYASCys8KjFsOAxtB24CW0QmeoFlCEg8miquvGu3V7ZkKyjYnSxKleIszduKk4_pHvBT0caw6dQlY-MZONdKuvv6BRBLEGIh_AQ48-ssAKcLDFaT8uRHtayzNhllBhY3ziAZJf_6rhC9BSkPXRcycsZ_yWqWdraHnYQfA1np2k0G5CBzP9us0AOEG4Mt23yDDLkMGMAV38OlG7Tn-ILEUH3XArSUON46diCm-Ok4gaK',
    title: t('courses.items.engineering.title'),
    description: t('courses.items.engineering.description'),
    duration: '144 Soat',
    badgeColor: 'primary'
  },
  {
    category: t('courses.categories.safety'),
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvLALYW8ee4f1RO0-tUMph46LtLg-iJiN4fnRCiktMMLgCsUdFXiEGPtgq2uk0jpUXK8PHKZvUVhOk-5hJ5iVtjiQlvRmZ_h4bfkbY31ChM8xud35se5j1xt72aZ53g373aX-wF5CCr50nIxxEvz_f59e4tVVp9GALF8gJv5hGUKbE6YpGSwbPzfF7vNvRRS5Fl85wAZ_gZkel316_-IWiMgeLuHgzGbVzZEP84KTHoNZVWRDl1rP_qFfEpzDw3JoJqdQRPMah9_Dm',
    title: t('courses.items.safety.title'),
    description: t('courses.items.safety.description'),
    duration: '72 Soat',
    badgeColor: 'secondary'
  },
  {
    category: t('courses.categories.architecture'),
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAQPnyt_gdpj0McvElPycNM0ZwexMoNlpGZT8rr1Kg7-9B03AwsYCpz2zOH-V7ZKLVJ8LwSUBvd6AT_b9IxUdKFPOn9F67VBTMUz-lRxJSb7pLl7WhHUGzs3RK9hOUdzsfIxAA4284sE0sCWdhHOEpvznLy4_I18OEiqfMiWAk8DBUpUSIF6VLaH0zLskIfmmqHHLAoWjrDv8IyQdMVrJiyB84k5DSB5LxX495ce38hhv3n8yVTBSRX2R49F3tPnCGaEdkhv2qfzF_',
    title: t('courses.items.architecture.title'),
    description: t('courses.items.architecture.description'),
    duration: '3 Oy',
    badgeColor: 'primary'
  }
]);
</script>
