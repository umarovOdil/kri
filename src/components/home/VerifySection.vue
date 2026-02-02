<template>
  <section class="py-20 bg-primary relative overflow-hidden">
    <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-3xl font-bold text-white mb-4">Mutaxassislar Reestridan Qidirish</h2>
          <p class="text-blue-200 mb-8">Yagona milliy ma'lumotlar bazasida muhandislik xodimlarining sertifikatlari va malaka holatini tekshirish.</p>
          <div class="bg-white p-2 flex rounded-sm shadow-2xl">
            <input class="flex-1 border-none focus:ring-0 text-gray-800 px-4 placeholder-gray-400" placeholder="Sertifikat ID yoki Mutaxassis ismini kiriting" type="text">
            <button class="bg-secondary text-white px-6 py-3 font-bold hover:bg-red-700 transition-colors uppercase tracking-wider text-sm">
              Tekshirish
            </button>
          </div>
          <div class="mt-4 flex gap-4 text-xs text-blue-200">
            <a class="hover:text-white underline" href="#">Kengaytirilgan qidiruv</a>
            <span>|</span>
            <a class="hover:text-white underline" href="#">Muammo haqida xabar berish</a>
          </div>
        </div>
        <div class="bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-bold text-white flex items-center gap-2">
              <span class="material-symbols-outlined">science</span> Ilmiy Nashrlar
            </h3>
            <a class="text-white/70 hover:text-white text-sm" href="#">Arxivni ko'rish</a>
          </div>
          <div class="space-y-4">
            <a class="block bg-white/5 hover:bg-white/10 p-4 transition-colors border-l-2 border-transparent hover:border-secondary" href="#">
              <h4 class="text-white font-bold text-sm mb-1">Seysmik xavfni baholashning zamonaviy metodologiyalari</h4>
              <p class="text-xs text-blue-200">Qurilish muhandisligi jurnali • 42-jild, 2024</p>
            </a>
            <a class="block bg-white/5 hover:bg-white/10 p-4 transition-colors border-l-2 border-transparent hover:border-secondary" href="#">
              <h4 class="text-white font-bold text-sm mb-1">Jamoat binolarida energiya samaradorligi standartlari</h4>
              <p class="text-xs text-blue-200">KRI Axborotnomasi • 3-nashr, 2024</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
