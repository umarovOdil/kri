<template>
  <div class="bg-white dark:bg-[#1e212b] min-h-screen pb-12">
    <!-- Header Section (Hero) -->
    <div class="relative h-[400px] w-full">
      <img
        src="/images/gallery/IMG_5542.JPG"
        alt="Institute Building"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <h1
          class="text-4xl md:text-5xl font-extrabold text-white text-center uppercase tracking-wider drop-shadow-lg px-4"
        >
          {{ t('contact.title') }}
        </h1>
      </div>
    </div>

    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
      <div
        class="bg-white dark:bg-[#2a2f3d] rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <!-- Contact Details -->
          <div class="p-8 md:p-12 lg:p-16 space-y-10">
            <h2
              class="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-600 pb-4"
            >
              {{ t('contact.title') }}
            </h2>

            <!-- Addresses List -->
            <div class="space-y-8">
              <!-- Address -->
              <div class="flex items-start gap-5 group">
                <div
                  class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                >
                  <span
                    class="material-symbols-outlined text-primary group-hover:text-white text-2xl transition-colors"
                    >location_on</span
                  >
                </div>
                <div>
                  <h3
                    class="font-bold text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide"
                  >
                    {{ t('contact.address_title') }}
                  </h3>
                  <p class="text-gray-900 dark:text-white font-medium text-lg leading-relaxed">
                    {{ t('contact.address') }}
                  </p>
                  <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">41.322183, 69.261671</p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start gap-5 group">
                <div
                  class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                >
                  <span
                    class="material-symbols-outlined text-primary group-hover:text-white text-2xl transition-colors"
                    >call</span
                  >
                </div>
                <div>
                  <h3
                    class="font-bold text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide"
                  >
                    {{ t('contact.phone') }}
                  </h3>
                  <a
                    href="tel:+998503332405"
                    class="text-xl font-bold text-primary hover:underline block"
                  >
                    (50) 333-24-05
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start gap-5 group">
                <div
                  class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                >
                  <span
                    class="material-symbols-outlined text-primary group-hover:text-white text-2xl transition-colors"
                    >mail</span
                  >
                </div>
                <div>
                  <h3
                    class="font-bold text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide"
                  >
                    {{ t('contact.email') }}
                  </h3>
                  <a
                    href="mailto:info@uzkri.uz"
                    class="text-lg text-gray-900 dark:text-white font-medium hover:text-primary transition-colors"
                    >info@uzkri.uz</a
                  >
                </div>
              </div>

              <!-- Working Hours -->
              <div class="flex items-start gap-5 group">
                <div
                  class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                >
                  <span
                    class="material-symbols-outlined text-primary group-hover:text-white text-2xl transition-colors"
                    >schedule</span
                  >
                </div>
                <div>
                  <h3
                    class="font-bold text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide"
                  >
                    {{ t('contact.working_hours') }}
                  </h3>
                  <p class="text-lg text-gray-900 dark:text-white font-medium">
                    {{ t('contact.hours') }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="h-[400px] lg:h-auto bg-gray-100 dark:bg-gray-800 relative">
            <iframe
              src="https://maps.google.com/maps?q=41.322183,69.261671&z=17&output=embed"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
