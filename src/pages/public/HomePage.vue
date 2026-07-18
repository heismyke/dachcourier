<template>
  <HeroSection />
  <RevealOnScroll>
    <ServicesOverview />
  </RevealOnScroll>
  <RevealOnScroll>
    <BusinessSolutions />
  </RevealOnScroll>
  <RevealOnScroll>
    <CoveragePreview />
  </RevealOnScroll>
  <RevealOnScroll>
    <TrustSection />
  </RevealOnScroll>
  <RevealOnScroll>
    <TestimonialsSection />
  </RevealOnScroll>
  <RevealOnScroll>
    <HomeCta />
  </RevealOnScroll>
</template>
<script setup lang="ts">
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import ServicesOverview from '@/components/home/ServicesOverview.vue'
import BusinessSolutions from '@/components/home/BusinessSolutions.vue'
import CoveragePreview from '@/components/home/CoveragePreview.vue'
import TrustSection from '@/components/home/TrustSection.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
import HomeCta from '@/components/home/HomeCta.vue'
</script>
