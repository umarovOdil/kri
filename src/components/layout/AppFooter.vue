<template>
  <footer class="bg-[#14161e] text-white border-t-4 border-secondary">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div class="lg:col-span-2 flex flex-col gap-6">
          <div class="flex items-center gap-4">
            <img src="/logo_white.png" alt="KRI Logo" class="h-12 w-auto object-contain" />
            <div class="hidden sm:flex flex-col">
              <span class="text-white dark:text-white text-lg sm:text-lg font-extrabold leading-none tracking-tight uppercase">Kompetensiyani Rivojlantirish</span>
              <span class="text-[12px] uppercase font-bold text-white leading-snug ">Instituti</span>
            </div>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed max-w-sm">
            Kompetensiyani Rivojlantirish Instituti O'zbekiston qurilish sohasida professional sertifikatlashtirish bo'yicha markaziy organ hisoblanadi. Biz milliy infratuzilmada xavfsizlik, sifat va innovatsiyalarni ta'minlaymiz.
          </p>
          <div class="flex gap-4 mt-2">
            <a class="w-10 h-10 bg-white/5 hover:bg-primary flex items-center justify-center transition-colors" href="#">
              <span class="material-symbols-outlined text-sm">public</span>
            </a>
            <a class="w-10 h-10 bg-white/5 hover:bg-primary flex items-center justify-center transition-colors" href="#">
              <span class="material-symbols-outlined text-sm">share</span>
            </a>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-bold mb-6 text-white uppercase tracking-wider">Institut</h3>
          <ul class="flex flex-col gap-3">
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">Biz haqimizda</a></li>
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">Rahbariyat</a></li>
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">Tuzilma</a></li>
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">Bo'sh ish o'rinlari</a></li>
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">Me'yoriy hujjatlar</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-bold mb-6 text-white uppercase tracking-wider">Tezkor Havolalar</h3>
          <ul class="flex flex-col gap-3">
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">Ta'lim dasturlari</a></li>
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">Imtihon jadvali</a></li>
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">Masofaviy ta'lim</a></li>
            <li><a class="text-gray-400 hover:text-white text-sm transition-colors" href="#">Sertifikatni tekshirish</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-bold mb-6 text-white uppercase tracking-wider">Bog'lanish</h3>
          <div class="flex flex-col gap-4">
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-secondary text-sm mt-1">location_on</span>
              <span class="text-gray-400 text-sm">Toshkent sh., Abay ko'chasi, 6-uy</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-secondary text-sm">call</span>
              <span class="text-gray-400 text-sm">+998 71 123 45 67</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-secondary text-sm">mail</span>
              <span class="text-gray-400 text-sm">info@kri.uz</span>
            </div>
            <button class="mt-4 w-full border border-gray-700 hover:border-white text-white text-xs font-bold py-3 uppercase tracking-wider transition-colors">
              Xabar yuborish
            </button>
          </div>
        </div>
      </div>
      <div class="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-500 text-xs">© 2026 Kompetensiyani Rivojlantirish Instituti. Barcha huquqlar himoyalangan.</p>
        <div class="flex gap-6 text-xs text-gray-500">
          <a class="hover:text-white" href="#">Maxfiylik siyosati</a>
          <a class="hover:text-white" href="#">Foydalanish shartlari</a>
          <a class="hover:text-white" href="#">Sayt xaritasi</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No logic needed for this static footer yet
</script>
