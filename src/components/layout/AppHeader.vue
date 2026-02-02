<template>
  <header class="w-full bg-white dark:bg-[#1e212b] shadow-md z-50">
    <!-- Top Bar: Logo & Tools -->
    <div class="px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1e212b]">
      <div class="max-w-[1440px] mx-auto py-4 flex items-center justify-between">
        <!-- Logo Area -->
        <div class="flex items-center gap-4">
          <img src="/logo.png" alt="KRI Logo" class="h-12 w-auto object-contain" />
          <div class="hidden sm:flex flex-col">
            <span class="text-[#273469] dark:text-white text-lg sm:text-lg font-extrabold leading-none tracking-tight uppercase">Kompetensiyani Rivojlantirish</span>
            <span class="text-[12px] uppercase font-bold text-[#273469] leading-snug ">Instituti</span>
          </div>
        </div>

        <!-- Right Tools -->
        <div class="flex items-center gap-6">
          <div class="hidden md:flex items-center gap-6 text-sm font-bold text-gray-500">
             <button class="hover:text-primary flex items-center gap-1">
               <span class="material-symbols-outlined text-[20px]">search</span>
             </button>
             <div class="relative" ref="accessibilityMenu">
               <button @click="showAccessibility = !showAccessibility" class="hover:text-primary flex items-center gap-1 border border-gray-200 px-3 py-1 rounded-sm">
                 <span class="material-symbols-outlined text-[18px]">visibility</span>
                 <span class="text-xs">Maxsus imkoniyatlar</span>
               </button>

               <!-- Accessibility Popup -->
               <div v-if="showAccessibility" class="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-[#1e212b] shadow-2xl rounded-xl p-6 z-[100] border border-gray-100 dark:border-gray-700">
                 <h3 class="text-lg font-bold text-[#121316] dark:text-white mb-4">Tashqi ko'rinish</h3>
                 
                 <div class="flex gap-3 mb-6">
                   <button @click="setTheme('default')" class="w-14 h-14 rounded-lg bg-[#1e40af] text-white text-2xl font-bold flex items-center justify-center hover:opacity-90 transition-opacity ring-2 ring-offset-2 ring-transparent focus:ring-blue-500">
                     A
                   </button>
                   <button @click="setTheme('gray')" class="w-14 h-14 rounded-lg bg-[#757575] text-white text-2xl font-bold flex items-center justify-center hover:opacity-90 transition-opacity ring-2 ring-offset-2 ring-transparent focus:ring-gray-500">
                     A
                   </button>
                   <button @click="setTheme('contrast')" class="w-14 h-14 rounded-lg bg-[#333333] text-white text-2xl font-bold flex items-center justify-center hover:opacity-90 transition-opacity ring-2 ring-offset-2 ring-transparent focus:ring-black">
                     A
                   </button>
                 </div>

                 <h3 class="text-lg font-bold text-[#121316] dark:text-white mb-2">Shrift o'lchami</h3>
                 <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">{{ fontSize }}% ga kattalashtirish</p>
                 
                 <input 
                   type="range" 
                   min="0" 
                   max="50" 
                   step="5" 
                   v-model="fontSize" 
                   @input="updateFontSize"
                   class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                 >
               </div>
             </div>

             <div class="flex items-center border border-gray-200 rounded-sm overflow-hidden">
                <button class="px-3 py-1 bg-primary text-white text-xs">O'ZB</button>
                <button class="px-3 py-1 hover:bg-gray-100 text-xs">РУС</button>
                <button class="px-3 py-1 hover:bg-gray-100 text-xs">ENG</button>
             </div>
          </div>
          <button class="flex items-center gap-2 bg-primary hover:bg-[#1a254a] text-white px-5 py-2 transition-colors duration-200 shadow-lg shadow-blue-900/20 text-sm font-bold uppercase rounded-sm">
            <span class="material-symbols-outlined text-[18px]">login</span>
            <span>Kirish</span>
          </button>

          <!-- Mobile Hamburger Trigger -->
          <button @click="toggleMobileMenu" class="lg:hidden p-2 text-primary hover:bg-blue-50 rounded-lg">
             <span class="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar (Blue) - Hidden on Mobile, Visible on Desktop -->
    <div class="hidden lg:block bg-primary text-white relative">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center text-[13px] font-bold uppercase tracking-wide">
          <div v-for="(item, index) in menuItems" :key="index" class="group relative">
            <a href="#" class="block py-4 px-4 hover:bg-white/10 transition-colors flex items-center gap-1">
              {{ item.title }}
              <span v-if="item.children" class="material-symbols-outlined text-[16px] opacity-70">expand_more</span>
            </a>
            
            <!-- Dropdown Menu -->
            <div v-if="item.children" 
                 class="absolute left-0 top-full w-[320px] bg-white text-[#121316] shadow-2xl invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50 transform origin-top-left border-t-2 border-secondary">
              <ul class="py-2">
                <li v-for="(child, cIndex) in item.children" :key="cIndex" class="relative group/sub">
                  <a href="#" class="block px-6 py-2.5 hover:bg-gray-50 hover:text-primary transition-colors border-b border-gray-50 last:border-0 flex justify-between items-center text-[12px]">
                    <span class="block pr-2">{{ child.title }}</span>
                    <span v-if="child.subChildren" class="material-symbols-outlined text-[14px] text-gray-400 shrink-0">chevron_right</span>
                  </a>

                  <!-- Sub-Dropdown (Level 3) -->
                  <div v-if="child.subChildren" 
                       class="absolute left-full top-0 w-[400px] bg-white shadow-xl invisible group-hover/sub:visible opacity-0 group-hover/sub:opacity-100 transition-all duration-200 border-l border-gray-100">
                    <ul class="py-2 max-h-[500px] overflow-y-auto custom-scrollbar">
                       <li v-for="(sub, sIndex) in child.subChildren" :key="sIndex">
                          <a href="#" class="block px-6 py-2.5 hover:bg-gray-50 hover:text-primary text-[11px] leading-tight border-b border-gray-50 last:border-0">
                            {{ sub }}
                          </a>
                       </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[100] lg:hidden">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="toggleMobileMenu"></div>
      <div class="absolute top-0 right-0 w-[85%] max-w-[320px] h-full bg-white dark:bg-[#1e212b] shadow-2xl overflow-y-auto">
        <div class="p-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
           <img src="/logo.png" alt="KRI Logo" class="h-8 w-auto" />
           <button @click="toggleMobileMenu" class="p-2 hover:bg-gray-100 rounded-full dark:hover:bg-gray-800 transition-colors">
             <span class="material-symbols-outlined">close</span>
           </button>
        </div>
        
        <div class="p-4">
           <!-- Utility Buttons Mobile -->
           <div class="flex flex-wrap gap-2 mb-6">
               <button v-for="lang in ['O\'ZB', 'РУС', 'ENG']" :key="lang" class="px-3 py-1 text-xs border border-gray-200 rounded-sm hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300">
                   {{ lang }}
               </button>
           </div>

           <nav class="flex flex-col gap-1">
             <div v-for="(item, index) in menuItems" :key="index">
               <div 
                 @click="item.children ? toggleMobileSubmenu(index) : null"
                 class="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                 :class="{ 'bg-blue-50 text-primary dark:bg-blue-900/20 dark:text-blue-400': activeMobileSubmenu === index }"
               >
                 <span class="font-bold text-sm text-[#121316] dark:text-white">{{ item.title }}</span>
                 <span v-if="item.children" class="material-symbols-outlined text-gray-400 transition-transform duration-300" :class="{ 'rotate-180': activeMobileSubmenu === index }">expand_more</span>
               </div>

               <!-- Mobile Submenu -->
               <div v-if="item.children && activeMobileSubmenu === index" class="pl-4 pr-2 pb-2 space-y-1">
                  <div v-for="(child, cIndex) in item.children" :key="cIndex" class="py-2 border-l-2 border-gray-100 pl-3">
                     <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ child.title }}</p>
                     <ul v-if="child.subChildren" class="space-y-2 mt-2">
                        <li v-for="(sub, sIndex) in child.subChildren" :key="sIndex">
                           <a href="#" class="text-xs text-gray-500 dark:text-gray-400 hover:text-primary block leading-tight">
                             {{ sub }}
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
             </div>
           </nav>

           <div class="mt-8 pt-4 border-t border-gray-100 dark:border-gray-700">
             <button class="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
                <span class="material-symbols-outlined">login</span>
                Kirish
             </button>
           </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const showAccessibility = ref(false);
const fontSize = ref(0);
const accessibilityMenu = ref<HTMLElement | null>(null);
const isMobileMenuOpen = ref(false);
const activeMobileSubmenu = ref<number | null>(null);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const toggleMobileSubmenu = (index: number) => {
  if (activeMobileSubmenu.value === index) {
    activeMobileSubmenu.value = null;
  } else {
    activeMobileSubmenu.value = index;
  }
};

const setTheme = (mode: string) => {
  const html = document.documentElement;
  // Reset
  html.style.filter = '';
  html.classList.remove('grayscale-mode', 'high-contrast-mode', 'dark');
  
  if (mode === 'gray') {
    html.style.filter = 'grayscale(100%)';
    html.classList.add('grayscale-mode');
  } else if (mode === 'contrast') {
    // 3rd option: Dark Mode + Grayscale (based on user image)
    html.classList.add('dark');
    html.style.filter = 'grayscale(100%)';
  }
};

const updateFontSize = () => {
  const html = document.documentElement;
  // Base size 16px. Percentage increase.
  const scale = 1 + (fontSize.value / 100);
  html.style.fontSize = `${scale * 100}%`;
};

// Close on click outside
const handleClickOutside = (event: MouseEvent) => {
  if (accessibilityMenu.value && !accessibilityMenu.value.contains(event.target as Node)) {
    showAccessibility.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

const menuItems = ref([
  { title: "Bosh Sahifa", link: "/" },
  { 
    title: "Institut", 
    children: [
      { title: "Institut haqida" },
      { title: "Rektor murojaati" },
      { title: "Institut Kengashi" },
      { title: "Rahbariyat" },
      { title: "Institut tuzilmasi" },
      { title: "Hududiy filiallar" },
      { 
        title: "Tarkibiy bo'limlar",
        subChildren: [
           "Qayta tayyorlash va malaка oshirish markazi",
           "Malakani baholash markazi",
           "O'quv-uslubiy bo'lim",
           "AKT va masofadan o'qitish bo'limi",
           "Moliyalashtirish va buxgalteriya",
           "Yuriskonsult",
           "Inson resurslari (HR)",
           "Xalqaro aloqalar bo'limi",
           "Xo'jalik ishlari",
           "Ijro nazorati shu'basi"
        ]
      },
      { title: "Kafedralar" },
      { title: "Bo'sh ish o'rinlari" },
      { 
         title: "Bog'lanish",
         subChildren: [
            "Toshkent markaziy apparat",
            "Samarqand filiali",
            "Namangan filiali",
            "Nukus filiali"
         ]
       }
    ]
  },
  { 
    title: "Ta'lim Dasturlari",
    children: [
      { title: "Magistratura: Qurilish muhandisligi" },
      { title: "Qayta tayyorlash: Qurilish muhandisligi" },
      { 
        title: "Malaka oshirish (VMQ 460)",
        subChildren: [
           "Qurilish obyektlarida texnik nazoratni olib borish",
           "Qurilish obyektlarida pudrat tashkilotining ichki nazorati",
           "Shaharsozlik hujjatlarini ishlab chiqish va mualliflik nazorati",
           "Loyiha bosh muhandisi kompetensiyasini rivojlantirish",
           "Loyiha bosh arhitektori kompetensiyasini rivojlantirish",
           "Qurilish obyektlarida nazorat o'lchovi",
           "Shaharsozlik hujjatlarini ekspertiza qilish",
           "Qurilish va shaharsozlik sohasida davlat nazorati",
           "Ko'p kvartirali uylar boshqaruvi",
           "Arxitektura va qurilish boshqaruvi",
           "Davlat nazorati (Ichimlik suvi ta'minoti)",
           "Davlat nazorati (Ko'p kvartirali uylar)",
           "Texnik nazorat (Avtomobil yo'llari)",
           "Ichki nazorat (Avtomobil yo'llari)",
           "Mualliflik nazorati (Avtomobil yo'llari)",
           "Loyiha bosh muhandisi (Avtomobil yo'llari)",
           "Loyiha bosh arhitektori (Avtomobil yo'llari)"
        ]
      },
      {
        title: "Maxsus kurslar (VMQ 451)",
        subChildren: [
          "Qurilishda energiya samaradorlik",
          "Instrumental-texnik tekshiruv o'tkazish"
        ]
      }
    ]
  },
  { 
    title: "Ilmiy Faoliyat",
    children: [
      { title: "Ilmiy kengash tarkibi" },
      { title: "Ilmiy seminar a'zolari" },
      { title: "Maqola va tezislar" },
      { title: "Darslik va qo'llanmalar" },
      { title: "Kontentlar" },
      { title: "Me'yoriy-huquqiy hujjatlar" },
      { title: "Ochiq ma'lumotlar" }
    ]
  },
  { 
    title: "Xalqaro Aloqalar",
    children: [
      { title: "Xalqaro hamkorlar" },
      { title: "Hamkorlik" },
      { title: "Safar va uchrashuvlar" }
    ]
  },
  {
    title: "Axborot Xizmati",
    children: [
      { title: "Yangiliklar" },
      { title: "Press relizlar" },
      { title: "E'lonlar" },
      { title: "Video/Foto galereya" }
    ]
  },
  { title: "Korrupsiya", children: [{title: "Ma'lumotlar"}, {title: "Murojaat qilish"}] },
  { title: "FAQ" },
  { title: "Bog'lanish" }
]);
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 2px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #aaa;
}
</style>
