<script setup lang="ts">
import HeroSection from '../components/home/HeroSection.vue'
import MissionSection from '../components/home/MissionSection.vue'
import ServicesSection from '../components/home/ServicesSection.vue'
import StatsSection from '../components/home/StatsSection.vue'
import EducationalPathways from '../components/home/EducationalPathways.vue'
import AdvantagesSection from '../components/home/AdvantagesSection.vue'
import GallerySection from '../components/home/GallerySection.vue'
import TestimonialsSection from '../components/home/TestimonialsSection.vue'
import UsefulLinksSection from '../components/home/UsefulLinksSection.vue'
import NewsSection from '../components/home/NewsSection.vue'
import RegionalCoverageSection from '../components/home/RegionalCoverageSection.vue'
import VerifySection from '../components/home/VerifySection.vue'
import PartnersSection from '../components/home/PartnersSection.vue'
</script>

<template>
  <main class="flex-grow">
    <HeroSection />
    <ServicesSection />
    <MissionSection />
    <StatsSection />
    <EducationalPathways />
    <AdvantagesSection />
    <GallerySection />
    <!-- <TestimonialsSection /> -->
    <UsefulLinksSection />
    <NewsSection />
    <RegionalCoverageSection />
    <!-- <VerifySection /> -->
    <PartnersSection />
  </main>
</template>
