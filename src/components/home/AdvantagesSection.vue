<template>
  <section class="py-16 bg-white dark:bg-[#1a1d26]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-primary dark:text-primary mb-12">Bizning ustunliklarimiz</h2>

      <div class="flex flex-wrap justify-center gap-6">
        <!-- Top Row (4 items) -->
        <div v-for="(item, index) in topRowItems" :key="index" class="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] flex">
          <div class="bg-white dark:bg-background-dark border border-primary p-6 rounded-none flex flex-col items-center text-center hover:shadow-lg transition-shadow w-full h-full">
             <div class="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-4 text-primary dark:text-white">
                <span class="material-symbols-outlined text-3xl">{{ item.icon }}</span>
             </div>
             <h3 class="text-primary font-semibold text-lg mb-3">{{ item.title }}</h3>
             <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>

        <!-- Bottom Row (3 items) -->
        <div v-for="(item, index) in bottomRowItems" :key="'bottom-' + index" class="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] flex">
           <div class="bg-white dark:bg-background-dark border border-primary p-6 rounded-none flex flex-col items-center text-center hover:shadow-lg transition-shadow w-full h-full">
             <div class="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mb-4 text-primary dark:text-white">
                <span class="material-symbols-outlined text-3xl">{{ item.icon }}</span>
             </div>
             <h3 class="text-primary font-semibold text-lg mb-3">{{ item.title }}</h3>
             <p class="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const topRowItems = [
  {
    icon: 'public',
    title: 'Global munosabatlar',
    description: "Buyuk Ipak yo'lining markazida joylashganimizni hisobga olib, biz Sharq va G'arbning ilg'or bilim va tajribalarini o'zimizga moslashtirib, undan unumli foydalanamiz"
  },
  {
    icon: 'menu_book',
    title: 'Amaliy bilim va tajriba',
    description: "Barcha o'quv jarayonlari tinglovchilarni biznes dunyosidagi real vaziyatlarga jalb qilish uchun mo'ljallangan"
  },
  {
    icon: 'handshake',
    title: 'Tarmoqlararo aloqalar va hamkorlik uchun eng qulay imkoniyat',
    description: "Bizning tinglovchilar - O'zbekiston iqtisodiy sektorining turli tarmoqlarida faoliyat yurituvchi o'rta va yuqori bo'g'im menejerlaridir"
  },
  {
    icon: 'workspace_premium',
    title: 'Innovatsiya va tadbirkorlik',
    description: "Bizning dastur tinglovchilarni yangi va innovatsion g'oyalarni ilgari surishga, shu sohadagi ko'p yillik tajribalarini va biznes dunyosidagi so'nggi yutuqlarni birlashtirishga tayyorlash uchun mo'ljallangan"
  }
];

const bottomRowItems = [
  {
    icon: 'trending_up',
    title: 'Iqtisodiyotning real sektori bilan faol hamkorlik',
    description: "Bizning dastur tinglovchilarni yangi va innovatsion g'oyalarni ilgari surishga, shu sohadagi ko'p yillik tajribalarini va biznes dunyosidagi so'nggi yutuqlarni birlashtirishga tayyorlash uchun mo'ljallangan"
  },
  {
    icon: 'groups',
    title: 'Yetakchi ilmiy-pedagogik kadrlar',
    description: "Professor o'qituvchilarimiz ko'plab xorijiy universitetlarning diplom va sertifikatlariga ega. Shuningdek magistratura va qisqa muddatli kurslarimizda xorijiy hamkor universitetlarning professor o'qituvchilari ham ta'lim beradi"
  },
  {
    icon: 'computer',
    title: 'Eng zamonaviy moddiy texnik baza',
    description: "Oliy maktab eng zamonaviy kompyuter texnologiyalari bilan jihozlangan va so'nggi yillarda nashr etilgan eng katta biznes kitob va o'quv qo'llanmalar to'plamiga ega"
  }
];
</script>
