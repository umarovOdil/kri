<template>
  <section class="py-20 bg-[#F4F6F8] dark:bg-background-dark clip-slope">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-2">Ta'lim Yo'nalishlari</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-xl">Davlat standartlariga muvofiq kasbiy o'sish va sertifikatlash uchun mos yo'nalishni tanlang.</p>
        </div>
        <div class="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2">
          <button class="px-6 py-3 bg-primary text-white font-bold text-sm whitespace-nowrap shadow-lg">Malaka oshirish</button>
          <button class="px-6 py-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold text-sm hover:bg-gray-50 whitespace-nowrap border border-gray-200 dark:border-gray-700">Qayta tayyorlash</button>
          <button class="px-6 py-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-bold text-sm hover:bg-gray-50 whitespace-nowrap border border-gray-200 dark:border-gray-700">Masofaviy ta'lim</button>
        </div>
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
            <p class="text-sm text-gray-500 mb-4 line-clamp-3">{{ course.description }}</p>
            <div class="mt-auto flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
              <span class="text-xs font-bold text-gray-500">{{ course.duration }}</span>
              <span class="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">Batafsil <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 text-center">
        <a class="inline-flex items-center gap-2 text-primary font-bold border-b-2 border-primary hover:text-secondary hover:border-secondary transition-colors pb-1" href="#">To'liq kurslar katalogini ko'rish <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const courses = [
  {
    category: 'QURILISH MUHANDISLIGI',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAx2DuIG6ziGji875iR5xhhXBWunx7RKy99rUYASCys8KjFsOAxtB24CW0QmeoFlCEg8miquvGu3V7ZkKyjYnSxKleIszduKk4_pHvBT0caw6dQlY-MZONdKuvv6BRBLEGIh_AQ48-ssAKcLDFaT8uRHtayzNhllBhY3ziAZJf_6rhC9BSkPXRcycsZ_yWqWdraHnYQfA1np2k0G5CBzP9us0AOEG4Mt23yDDLkMGMAV38OlG7Tn-ILEUH3XArSUON46diCm-Ok4gaK',
    title: 'Loyiha Bosh Muhandisi Sertifikatlash Kursi',
    description: 'I va II toifali loyihalar bosh muhandislari uchun attestatsiya imtihoniga har tomonlama tayyorgarlik.',
    duration: '144 Soat',
    badgeColor: 'primary'
  },
  {
    category: 'XAVFSIZLIK',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvLALYW8ee4f1RO0-tUMph46LtLg-iJiN4fnRCiktMMLgCsUdFXiEGPtgq2uk0jpUXK8PHKZvUVhOk-5hJ5iVtjiQlvRmZ_h4bfkbY31ChM8xud35se5j1xt72aZ53g373aX-wF5CCr50nIxxEvz_f59e4tVVp9GALF8gJv5hGUKbE6YpGSwbPzfF7vNvRRS5Fl85wAZ_gZkel316_-IWiMgeLuHgzGbVzZEP84KTHoNZVWRDl1rP_qFfEpzDw3JoJqdQRPMah9_Dm',
    title: 'Qurilish Maydonida Xavfsizlikni Boshqarish',
    description: 'Yangi xavfsizlik qoidalari va xalqaro standartlarga qaratilgan uchastka boshliqlari uchun majburiy qayta tayyorlash.',
    duration: '72 Soat',
    badgeColor: 'secondary'
  },
  {
    category: 'ARXITEKTURA',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAQPnyt_gdpj0McvElPycNM0ZwexMoNlpGZT8rr1Kg7-9B03AwsYCpz2zOH-V7ZKLVJ8LwSUBvd6AT_b9IxUdKFPOn9F67VBTMUz-lRxJSb7pLl7WhHUGzs3RK9hOUdzsfIxAA4284sE0sCWdhHOEpvznLy4_I18OEiqfMiWAk8DBUpUSIF6VLaH0zLskIfmmqHHLAoWjrDv8IyQdMVrJiyB84k5DSB5LxX495ce38hhv3n8yVTBSRX2R49F3tPnCGaEdkhv2qfzF_',
    title: 'Zamonaviy Loyihalashda BIM Texnologiyalari',
    description: 'Binolarni axborot modellashtirish dasturiy ta\'minoti va hamkorlikdagi loyihalash ish oqimlari bo\'yicha amaliy kurs.',
    duration: '3 Oy',
    badgeColor: 'primary'
  }
]
</script>
