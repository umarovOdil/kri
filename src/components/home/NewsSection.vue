<template>
  <section class="py-20 bg-white dark:bg-[#1a1d26]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-3 gap-12">
        <div class="lg:col-span-1">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-2xl font-bold text-primary dark:text-white">So'nggi Yangiliklar</h2>
            <a class="text-sm font-bold text-gray-500 hover:text-primary" href="#">Barcha yangiliklar</a>
          </div>
          <div class="flex flex-col gap-6">
            <article v-for="(news, index) in newsList" :key="index" class="flex gap-4 group cursor-pointer">
              <div class="w-20 h-20 shrink-0 bg-gray-200 overflow-hidden relative">
                <div class="absolute top-0 left-0 w-8 h-8 flex items-center justify-center text-white text-[10px] font-bold text-center leading-tight p-1" :class="index === 0 ? 'bg-secondary' : 'bg-gray-800'">
                  <span v-html="news.dateBadge"></span>
                </div>
                <div class="w-full h-full bg-cover bg-center" :style="{ backgroundImage: `url('${news.image}')` }"></div>
              </div>
              <div>
                <h3 class="text-sm font-bold text-[#121316] dark:text-white group-hover:text-primary transition-colors mb-2 leading-snug">{{ news.title }}</h3>
                <span class="text-xs text-gray-500 flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">schedule</span> {{ news.time }}</span>
              </div>
            </article>
          </div>
        </div>
        <div class="lg:col-span-2 bg-[#F4F6F8] dark:bg-background-dark p-8 relative overflow-hidden flex flex-col justify-center items-center text-center border border-gray-100 dark:border-gray-800">
          <div class="absolute top-0 left-0 w-full h-1 bg-primary"></div>
          <h2 class="text-2xl font-bold text-primary dark:text-white mb-6 relative z-10">Hududiy Qamrov</h2>
          <div>
            <UzbekistanMap />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import UzbekistanMap from './UzbekistanMap.vue';

const newsList = [
  {
    dateBadge: '12<br>OKT',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvLALYW8ee4f1RO0-tUMph46LtLg-iJiN4fnRCiktMMLgCsUdFXiEGPtgq2uk0jpUXK8PHKZvUVhOk-5hJ5iVtjiQlvRmZ_h4bfkbY31ChM8xud35se5j1xt72aZ53g373aX-wF5CCr50nIxxEvz_f59e4tVVp9GALF8gJv5hGUKbE6YpGSwbPzfF7vNvRRS5Fl85wAZ_gZkel316_-IWiMgeLuHgzGbVzZEP84KTHoNZVWRDl1rP_qFfEpzDw3JoJqdQRPMah9_Dm',
    title: 'Seysmik barqarorlikni sertifikatlash bo\'yicha yangi qoidalar joriy etildi',
    time: '2 soat oldin'
  },
  {
    dateBadge: '08<br>OKT',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAQPnyt_gdpj0McvElPycNM0ZwexMoNlpGZT8rr1Kg7-9B03AwsYCpz2zOH-V7ZKLVJ8LwSUBvd6AT_b9IxUdKFPOn9F67VBTMUz-lRxJSb7pLl7WhHUGzs3RK9hOUdzsfIxAA4284sE0sCWdhHOEpvznLy4_I18OEiqfMiWAk8DBUpUSIF6VLaH0zLskIfmmqHHLAoWjrDv8IyQdMVrJiyB84k5DSB5LxX495ce38hhv3n8yVTBSRX2R49F3tPnCGaEdkhv2qfzF_',
    title: 'KRI da yashil qurilish materiallari bo\'yicha xalqaro konferensiya bo\'lib o\'tdi',
    time: '2 kun oldin'
  },
  {
    dateBadge: '01<br>OKT',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx2DuIG6ziGji875iR5xhhXBWunx7RKy99rUYASCys8KjFsOAxtB24CW0QmeoFlCEg8miquvGu3V7ZkKyjYnSxKleIszduKk4_pHvBT0caw6dQlY-MZONdKuvv6BRBLEGIh_AQ48-ssAKcLDFaT8uRHtayzNhllBhY3ziAZJf_6rhC9BSkPXRcycsZ_yWqWdraHnYQfA1np2k0G5CBzP9us0AOEG4Mt23yDDLkMGMAV38OlG7Tn-ILEUH3XArSUON46diCm-Ok4gaK',
    title: 'Toshkent Arxitektura Instituti bilan hamkorlik e\'lon qilindi',
    time: '1 hafta oldin'
  }
]
</script>
