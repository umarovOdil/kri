<template>
  <section class="py-12 bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap justify-between items-center gap-8 text-center md:text-left">
        <div v-for="(stat, index) in stats" :key="index" class="flex items-center gap-4">
          <div class="bg-gray-100 dark:bg-gray-800 p-3 rounded-none">
            <span class="material-symbols-outlined text-3xl text-primary dark:text-blue-400">{{ stat.icon }}</span>
          </div>
          <div>
            <div class="text-3xl font-extrabold text-[#121316] dark:text-white">{{ stat.value }}</div>
            <div class="text-xs uppercase font-bold text-gray-500 tracking-wider">{{ stat.label }}</div>
          </div>
          <div v-if="index < stats.length - 1" class="w-px h-12 bg-gray-200 dark:bg-gray-700 hidden md:block ml-8"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { icon: 'groups', value: '12,450', label: 'Tayyorlangan mutaxassislar' },
  { icon: 'domain', value: '850+', label: 'Hamkor kompaniyalar' },
  { icon: 'science', value: '42', label: 'Ilmiy loyihalar' },
  { icon: 'map', value: '14', label: 'Hududiy markazlar' }
]
</script>
