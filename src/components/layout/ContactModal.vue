<template>
  <div class="fixed inset-0 z-[150] flex items-center justify-center p-4">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" @click="$emit('close')"></div>

    <!-- Modal Content -->
    <div class="relative bg-white dark:bg-[#1e212b] w-full max-w-lg rounded-2xl shadow-2xl p-6 md:p-8 transform transition-all scale-100">
      <button 
        @click="$emit('close')"
        class="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500 dark:text-gray-400"
      >
        <span class="material-symbols-outlined">close</span>
      </button>

      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center border-b border-gray-100 dark:border-gray-700 pb-4">
        {{ t('contact.title') }}
      </h2>

      <div class="space-y-6">
        <!-- Address -->
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-primary">location_on</span>
          </div>
          <div>
            <h3 class="font-bold text-sm text-gray-900 dark:text-white mb-1 uppercase tracking-wide opacity-70">{{ t('contact.address_title') }}</h3>
            <p class="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
              <a href="https://www.google.com/maps/search/?api=1&query=Toshkent+shahri,+Shayxontohur+tumani,+Abdulla+Qodiriy+koʻchasi,+7A" target="_blank" class="hover:text-primary transition-colors">
                {{ t('contact.address') }}
              </a>
            </p>
          </div>
        </div>

        <!-- Phone -->
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-primary">call</span>
          </div>
          <div>
            <h3 class="font-bold text-sm text-gray-900 dark:text-white mb-1 uppercase tracking-wide opacity-70">{{ t('contact.phone') }}</h3>
            <a href="tel:+998503332401" class="text-lg font-bold text-primary hover:underline block">
              (50) 333-24-01
            </a>
          </div>
        </div>

        <!-- Email -->
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-primary">mail</span>
          </div>
          <div>
            <h3 class="font-bold text-sm text-gray-900 dark:text-white mb-1 uppercase tracking-wide opacity-70">{{ t('contact.email') }}</h3>
            <a href="mailto:info@kri.uz" class="text-gray-700 dark:text-gray-300 font-medium hover:text-primary transition-colors">info@kri.uz</a>
          </div>
        </div>

        <!-- Working Hours -->
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
            <span class="material-symbols-outlined text-primary">schedule</span>
          </div>
          <div>
            <h3 class="font-bold text-sm text-gray-900 dark:text-white mb-1 uppercase tracking-wide opacity-70">{{ t('contact.working_hours') }}</h3>
            <p class="text-gray-700 dark:text-gray-300 font-medium">{{ t('contact.hours') }}</p>
          </div>
        </div>
      </div>

      <div class="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
        <button 
          @click="$emit('close')"
          class="w-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold py-3 rounded-xl transition-colors"
        >
          {{ t('contact.close') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineEmits(['close']);
const { t } = useI18n();
</script>
