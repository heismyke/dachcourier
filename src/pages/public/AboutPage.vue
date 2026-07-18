<template>
  <AboutHero />
  <CompanyIntroduction />
  <MissionSection />
  <ServiceSummary />
  <IndustriesSection />
  <OperationsTimeline />
  <TechnologySection />
  <WhyChooseSection />
  <AboutCoverageSection />
  <BusinessSupportSection />
  <ValuesSection />
  <OperationsApproachSection />
  <TestimonialsSection />
  <FAQSection />
  <HomeCta
    title="Ready to plan your next delivery?"
    text="Choose a courier service, request an inquiry or speak with the Dach Courier team."
    primary-label="Make inquiry"
    primary-to="/quote"
    secondary-label="Book a courier"
    secondary-to="/book"
    tertiary-label="Contact support"
    tertiary-to="/support"
  />
</template>

<script setup lang="ts">
import AboutCoverageSection from '@/components/about/AboutCoverageSection.vue'
import AboutHero from '@/components/about/AboutHero.vue'
import BusinessSupportSection from '@/components/about/BusinessSupportSection.vue'
import CompanyIntroduction from '@/components/about/CompanyIntroduction.vue'
import IndustriesSection from '@/components/about/IndustriesSection.vue'
import MissionSection from '@/components/about/MissionSection.vue'
import OperationsApproachSection from '@/components/about/OperationsApproachSection.vue'
import OperationsTimeline from '@/components/about/OperationsTimeline.vue'
import ServiceSummary from '@/components/about/ServiceSummary.vue'
import TechnologySection from '@/components/about/TechnologySection.vue'
import ValuesSection from '@/components/about/ValuesSection.vue'
import WhyChooseSection from '@/components/about/WhyChooseSection.vue'
import FAQSection from '@/components/faq/FAQSection.vue'
import HomeCta from '@/components/home/HomeCta.vue'
import TestimonialsSection from '@/components/home/TestimonialsSection.vue'
</script>
