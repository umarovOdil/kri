<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Generate array of all 20 images from IMG_5533.JPG to IMG_5552.JPG
const allImages = Array.from({ length: 20 }, (_, i) => `/images/gallery/IMG_${5533 + i}.JPG`);

const isExpanded = ref(false);
const initialDisplayCount = 10; // Show one full pattern cycle initially
const selectedImageIndex = ref<number | null>(null);

const visibleImages = computed(() => {
  return isExpanded.value ? allImages : allImages.slice(0, initialDisplayCount);
});

const toggleGallery = () => {
  isExpanded.value = !isExpanded.value;
};

// Lightbox Methods
const openLightbox = (index: number) => {
  selectedImageIndex.value = index;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  selectedImageIndex.value = null;
  document.body.style.overflow = '';
};

const nextImage = (e?: Event) => {
  if (e) e.stopPropagation();
  if (selectedImageIndex.value !== null) {
    selectedImageIndex.value = (selectedImageIndex.value + 1) % allImages.length;
  }
};

const prevImage = (e?: Event) => {
  if (e) e.stopPropagation();
  if (selectedImageIndex.value !== null) {
    selectedImageIndex.value = (selectedImageIndex.value - 1 + allImages.length) % allImages.length;
  }
};

const handleKeydown = (e: KeyboardEvent) => {
  if (selectedImageIndex.value === null) return;
  
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
};

// Touch/Swipe Support
const touchStartX = ref(0);
const touchEndX = ref(0);

const handleTouchStart = (e: TouchEvent) => {
  touchStartX.value = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX.value = e.changedTouches[0].screenX;
  handleSwipe();
};

const handleSwipe = () => {
  if (touchEndX.value < touchStartX.value - 50) {
    // Swipe Left -> Next
    nextImage();
  }
  if (touchEndX.value > touchStartX.value + 50) {
    // Swipe Right -> Prev
    prevImage();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});

// Function to return classes for Bento Grid effect
const getImageClass = (index: number) => {
  // Pattern repeats every 10 images
  const patternIndex = index % 10;
  
  if (patternIndex === 0) return 'md:col-span-2 md:row-span-2'; // Large (Left Top)
  if (patternIndex === 1) return 'md:col-span-1 md:row-span-1'; // Small
  if (patternIndex === 2) return 'md:col-span-1 md:row-span-1'; // Small
  if (patternIndex === 3) return 'md:col-span-2 md:row-span-1'; // Wide
  if (patternIndex === 4) return 'md:col-span-1 md:row-span-2'; // Tall
  if (patternIndex === 5) return 'md:col-span-1 md:row-span-1'; // Small
  if (patternIndex === 6) return 'md:col-span-2 md:row-span-1'; // Wide
  if (patternIndex === 7) return 'md:col-span-1 md:row-span-1'; // Small
  if (patternIndex === 8) return 'md:col-span-1 md:row-span-1'; // Small
  if (patternIndex === 9) return 'md:col-span-1 md:row-span-1'; // Small
  
  return 'md:col-span-1 md:row-span-1';
};
</script>

<template>
  <section class="py-16 bg-gray-50 dark:bg-[#1e212b]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {{ t('gallery.title') }}
        </h2>
        <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <!-- Gallery Grid Container -->
      <div class="relative px-1 pt-1" :class="isExpanded ? 'mb-24' : 'mb-12'">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] transition-all duration-500 ease-in-out" :class="{ 'max-h-[420px] overflow-hidden': !isExpanded }">
          <div 
            v-for="(image, index) in visibleImages" 
            :key="index"
            class="relative group overflow-hidden rounded-xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            :class="getImageClass(index)"
            @click="openLightbox(index)"
          >
            <img 
              :src="image" 
              :alt="t('gallery.image_alt', { index: index + 1 })"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              loading="lazy"
            >
          </div>
        </div>

        <!-- Gradient Fade Overlay (Visible only when collapsed) -->
        <div 
          v-if="!isExpanded" 
          class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent dark:from-[#1e212b] dark:via-[#1e212b]/80 flex items-end justify-center pb-0 z-10 pointer-events-none"
        >
        </div>
        
        <!-- Toggle Button (Centered at bottom) -->
        <div class="absolute w-full flex justify-center z-20 transition-all duration-300" :class="isExpanded ? '-bottom-16' : '-bottom-8'">
          <button 
            @click="toggleGallery"
            class="flex flex-col items-center gap-1 text-primary dark:text-gray-300 font-bold hover:text-secondary transition-colors group"
          >
            <span class="text-sm uppercase tracking-wider">{{ isExpanded ? t('gallery.less') : t('gallery.more') }}</span>
            <span class="material-symbols-outlined text-3xl animate-bounce">{{ isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <Teleport to="body">
      <div 
        v-if="selectedImageIndex !== null" 
        class="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
        @click="closeLightbox"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <!-- Close Button -->
        <button 
          @click="closeLightbox"
          class="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <span class="material-symbols-outlined text-3xl sm:text-4xl">close</span>
        </button>

        <!-- Navigation Buttons -->
        <button 
          @click.stop="prevImage"
          class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50 p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <span class="material-symbols-outlined text-3xl sm:text-5xl">chevron_left</span>
        </button>

        <button 
          @click.stop="nextImage"
          class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-50 p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <span class="material-symbols-outlined text-3xl sm:text-5xl">chevron_right</span>
        </button>

        <!-- Main Image -->
        <div class="relative max-w-full max-h-full flex flex-col items-center justify-center" @click.stop>
          <img 
            :src="allImages[selectedImageIndex]" 
            class="max-w-full max-h-[80vh] sm:max-h-[85vh] object-contain rounded-lg shadow-2xl"
            :alt="t('gallery.image_alt', { index: selectedImageIndex + 1 })"
          >
          <div class="mt-4 text-white/80 font-medium tracking-wide">
            {{ selectedImageIndex + 1 }} / {{ allImages.length }}
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>
