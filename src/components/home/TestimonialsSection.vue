<template>
  <section class="py-16 bg-white dark:bg-[#1a1d26]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center text-primary dark:text-primary mb-12">Bitiruvchilarimizning fikrlari</h2>
      
      <div class="grid md:grid-cols-3 gap-6">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="bg-white dark:bg-background-dark rounded-xl shadow-md border border-primary overflow-hidden flex flex-col items-center text-center relative group hover:shadow-xl transition-all duration-300">
             <!-- Header Color Bar -->
             <div class="h-32 w-full bg-primary relative">
                 <div class="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div class="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                        <img v-if="testimonial.image" :src="testimonial.image" class="w-full h-full object-cover" />
                        <div v-else class="w-full h-full flex items-center justify-center text-gray-500 bg-gray-100">User</div>
                    </div>
                 </div>
             </div>
             
             <div class="pt-16 px-6 pb-8">
                <h3 class="text-primary text-lg font-bold mb-1">{{ testimonial.name }}</h3>
                <p class="text-gray-500 text-xs font-bold mb-4">{{ testimonial.position }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-300 leading-relaxed text-justify">
                    {{ testimonial.text }}
                </p>
             </div>
          </div>
      </div>
      
      <!-- Carousel Dots (Visual only for grid layout, or functional if I make it a slider) -->
      <!-- The user image shows 3 items side-by-side on desktop, so a grid is better than a single-item slider. 
           However, on mobile it should probably slide or stack. 
           I'll stick to Grid for now as it matches the desktop screenshot. -->
      <div class="flex justify-center mt-8 gap-2">
         <span class="w-2 h-2 rounded-full bg-gray-300 cursor-pointer"></span>
         <span class="w-2 h-2 rounded-full bg-primary cursor-pointer"></span>
         <span class="w-2 h-2 rounded-full bg-gray-300 cursor-pointer"></span>
         <span class="w-2 h-2 rounded-full bg-gray-300 cursor-pointer"></span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: 'Xasanov Azizbek Islambayevich',
    position: '"O\'zbektelekom" Aksiyadorlik Kompaniyasi, bosh mutaxassisi',
    text: '2021-yil Biznes va tadbirkorlik oliy maktabiga "Biznesni boshqarish - Master of Business Administration (MBA)" mutaxassisligiga tinglovchi sifatida o\'qishga qabul qilindim. Bugungi kunda kompaniyamizdan Oliy maktabda umumiy 50 nafarga yaqin rahbar-xodimlari o\'qib bitirgan. Men ularning tavsiyasiga ko\'ra o\'qishga kirgan edim. Haqiqatan ham Oliy maktabda zamonaviy bilimlarni oldim.',
    image: null
  },
  {
    name: 'Saxavaliyev Mirzabedil Nurmaxamatovich',
    position: '"O\'zsanoatqurilishbank" ATB, Komplayens-nazorat departamenti bo\'lim boshlig\'i',
    text: 'Bank rahbariyati tavsiyanomasiga asosan, 2021-yili Biznes va tadbirkorlik oliy maktabining "Biznesni boshqarish" (Master of Business Administration - MBA) mutaxassisligi 2 yillik kunduzgi dasturi bo\'yicha test va suhbat sinovlaridan muvaffaqiyatli o\'tib, tinglovchilar safiga qabul qilindim. Bugungi kunda ushbu dargohni muvaffaqiyatli a\'lo baholarga tamomladim.',
    image: null
  },
  {
    name: 'Oxunjonov Farid',
    position: '"Korzinka" kompaniyasi menejeri',
    text: 'Hamkasblarimning tavsiyasiga binoan men Biznes va tadbirkorlik oliy maktabiga "Biznesni boshqarish (MBA)" yo\'nalishi bo\'yicha magistraturaga o\'qishga kirdim va tamomladim. Men marketing menejmenti, korporativ boshqaruv, biznes jarayonlarini boshqarish, elektron tijorat, raqamli biznes va innovatsiyalar va boshqa mavzular kabi xalqaro fanlarni o\'rganish orqali o\'z bilim darajamni oshirdim.',
    image: null
  }
];
</script>
