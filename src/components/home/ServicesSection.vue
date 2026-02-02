<template>
  <section class="relative z-30 mb-16 lg:-mt-16">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 shadow-2xl">
        <div v-for="(service, index) in services" :key="index" class="bg-white dark:bg-[#252836] p-8 border-r border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#2a2d3d] transition-colors group cursor-pointer relative overflow-hidden">
          <div class="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-300"></div>
          <div class="mb-4 text-primary dark:text-blue-400">
            <span class="material-symbols-outlined text-4xl">{{ service.icon }}</span>
          </div>
          <h3 class="text-lg font-bold text-[#121316] dark:text-white mb-2">{{ service.title }}</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">{{ service.description }}</p>
        </div>
        <div class="bg-primary text-white p-8 flex flex-col justify-between relative overflow-hidden group">
          <div class="absolute -right-4 -bottom-4 text-white/10">
            <span class="material-symbols-outlined text-[120px]">help</span>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2">Yordam kerakmi?</h3>
            <p class="text-blue-200 text-sm mb-6">Yordam olish uchun qo'llab-quvvatlash markaziga murojaat qiling.</p>
          </div>
          <a class="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all" href="#">
            Qo'llab-quvvatlash markazi <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: 'person_search',
    title: 'Mutaxassisni izlash',
    description: 'Sertifikatlangan ekspertlarning milliy reestridan qidirish.'
  },
  {
    icon: 'library_books',
    title: 'Elektron kutubxona',
    description: 'Texnik reglamentlar va ilmiy maqolalar bazasiga kirish.'
  },
  {
    icon: 'edit_document',
    title: 'Imtihonga ariza topshirish',
    description: 'Malaka attestatsiyasi uchun hujjatlarni topshirish.'
  }
]
</script>
