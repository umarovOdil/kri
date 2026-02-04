import newsSeismicImage from '@/assets/images/news-seismic.png';
import newsDekoKronImage from '@/assets/images/news-deko-kron.png';

export interface NewsItem {
  id: number;
  dateBadge: string;
  image: string;
  title: string;
  time: string;
  content: string; // HTML or Markdown content
}

export const newsList: NewsItem[] = [
  {
    id: 6,
    dateBadge: '04<br>FEV',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop',
    title: 'BoMI qurilish obyektida amaliy mashg\'ulotlar o\'tkazildi',
    time: 'Bugun',
    content: `
      <p>33-mavsum va 31-mavsum tinglovchilari, "Qurilish obyektlarida davlat nazoratini olib borish" yo'nalishi bo'yicha, Toshkent shahridagi Koreya Respublikasining "BoMI" qurilish obyektida oxirgi amaliy darslarni olib bormoqdalar. Bu amaliy darslar tinglovchilarning davlat nazorati va huquqiy bilimlarini yanada mustahkamlash hamda amaliy tajriba orttirish maqsadida tashkil etilgan.</p>
      
      <p class="mt-4">"BoMI" qurilish obyekti Janubiy Koreya tomonidan amalga oshirilayotgan zamonaviy va innovatsion loyihalardan biri bo'lib, Toshkent shahrining rivojlanishida muhim ahamiyatga ega.</p>
      
      <p class="mt-4">33-mavsum va 31-mavsum tinglovchilarining "Qurilish obyektlarida davlat nazoratini olib borish" yo'nalishi bo'yicha "BoMI" qurilish obyektida o'tkazilgan oxirgi amaliy mashg'ulotlari juda samarali bo'ldi. Tinglovchilar bu mashg'ulotlar davomida o'z kasbiy faoliyatlarida davlat nazoratini samarali amalga oshirish bo'yicha qimmatli bilim va tajriba orttirdilar. Bu esa ularga kelgusidagi faoliyatlarida katta yordam beradi.</p>
    `
  },
  {
    id: 5,
    dateBadge: '15<br>MAY',
    image: newsDekoKronImage,
    title: 'Deko-Kron qurilish korxonasida targ\'ibot tadbiri o\'tkazildi',
    time: 'Bugun',
    content: `
      <p>Ta'kidlab kelayotganimizdek, Qurilish va uy-joy kommunal xo'jaligi vazirligi huzurida tashkil etilgan Kompetensiyani rivojlantirish institutida qurilish va uy-joy kommunal xo'jaligi sohasida faoliyat yurituvchi mutaxassislar malakasi oshirilib kelinmoqda.</p>
      
      <p class="mt-4">O‘zbekiston Respublikasi Vazirlar Mahkamasining 460-sonli qarori ijrosi hamda mazkur qaror mohiyatini targ'ib qilish maqsadida Kompetensiyani rivojlantirish instituti mas'ullari tomonidan joylarda targ'ibot ishlari o'tkazib kelinmoqda. Bunda mutaxassislarni sertifikatlash tartibi, uning o'ziga xos talablari va imkoniyatlari haqida atroflicha ma'lumot berilmoqda.</p>
      
      <p class="mt-4 font-semibold">Xususan, bugungi tadbir Deko-Kron qurilish korxonasida bo'lib o'tdi.</p>
      
      <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-gray-700 dark:text-gray-300">
        "Bugun hamma sohalar kabi shaharsozlik yo'nalishida ham zamonaviy texnologiyalarga talab katta. Mazkur texnologiyalarni amaliyotda qo'llash esa ishchi-xodimdan katta mas'uliyat, bilim va ko'nikma talab etadi. Shu ma'noda biz ta'lim tizimimizni so'nggi, innovatsion yechimlar asosida ishlab chiqqanmiz. O'quv kurslarimizda berib borilayotgan nazariy hamda amaliy bilimlar sizning kelgusi faoliyatingiz samaradorligini oshirishga xizmat qiladi", - dedi institut mas'uli F.Mamajonova.
      </blockquote>
      
      <p>Alohida qayd etish lozimki, ayni targ'ibot tadbirlari sohani takomillashtirish yo'lidagi muhim ishlarning debochasi bo'lib xizmat qilmoqda.</p>
    `
  },
  {
    id: 4,
    dateBadge: '15<br>MAY',
    image: newsSeismicImage,
    title: '“Seysmik izolyatsiya qoʻllash talablari va amaliyoti” nomli malaka oshirish oʻquv kurslari',
    time: 'Bugun',
    content: `
      <p>Oʻzbekiston Respublikasi Prezidentining 2024-yil 17-aprel sanasidagi PQ-161-son qarorning 1-ilovasi bilan tasdiqlangan “Seysmik xavfsizlikni taʼminlash hamda bino va inshootlarning zilzilabardoshligini oshirish tizimini takomillashtirish boʻyicha Yoʻl xaritasi”ning 26-bandida belgilangan vazifalar ijrosini taʼminlash maqsadida, Kompetensiyani rivojlantirish institutida loyihalash, qurilish tashkilotlari va davlat qurilish nazorati inspeksiyasi mutaxassislari uchun moʻljallangan “Seysmik izolyatsiya qoʻllash talablari va amaliyoti” nomli malaka oshirish oʻquv kurslari tashkil etilganini maʼlum qilamiz.</p>
      
      <p class="mt-4">Malaka oshirish oʻquv kursi davomiyligi 44 soat (1 hafta).</p>
      
      <h3 class="text-lg font-bold mt-6 mb-2">Kursdan tinglovchilar:</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li>xorijiy tajribani oʻrgangan holda bino va inshootlarning zilzilaga chidamliligini taʼminlashning amaliy usullari;</li>
        <li>seysmik xavfli hududlarda zamonaviy loyihalash va qurilish;</li>
        <li>loyiha boʻyicha normativ va texnik adabiyotlardan foydalanish va seysmik zonalarda bino va inshootlarni qurishni;</li>
        <li>bino va inshootlarning seysmik qarshiligini baholashning zamonaviy usullarini qoʻllash;</li>
        <li>seysmik xavfli hududlarda loyihalash va qurilishning asosiy prinsiplarini hal etish;</li>
        <li>hayot xavfsizligi talablarini hisobga olgan holda zilzilaga chidamli binolarni loyihalash, qurish va ulardan foydalanish tamoyillarini oʻzlashtirish;</li>
        <li>binolar va inshootlarni seysmik taʼsir uchun hisoblash usullari, shu jumladan avtomatlashtirilgan hisoblash dasturiy taʼminot tizimlaridan foydalanish malakalariga ega boʻlishadi.</li>
      </ul>
      
      <p class="mt-4">Taʼlim dasturlarni toʻliq oʻzlashtirgan va yakuniy nazoratdan muvaffaqiyatli oʻtgan kurs tinglovchilariga davlat namunasidagi sertifikat beriladi.</p>
      
      <p class="mt-4 font-semibold">Kurs toʻgʻrisida batafsil maʼlumot uchun 71 241-58-01, 93 350-30-13 raqamiga murojaat qilishingiz mumkin.</p>
    `
  }
];
