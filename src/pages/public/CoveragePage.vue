<template>
  <main class="coverage-page">
    <CoverageHero />
    <CoverageChecker />
    <UKNationsOverview />
    <MajorCityCoverage :locations="coverageLocations" />
    <UKMapSection />
    <ServiceAvailabilitySection />
    <PopularRoutesSection :routes="popularRoutes" />
    <BusinessCoverageSection />
    <UnlistedAreaCta />
    <CoverageFAQSection />
    <HomeCta
      title="Check your next courier route"
      text="Enter your postcodes to see available services or request a tailored inquiry from the Dach Courier team."
      primary-label="Check coverage"
      primary-to="/coverage#coverage-checker"
      secondary-label="Make inquiry"
      secondary-to="/quote"
      tertiary-label="Book a courier"
      tertiary-to="/book"
    />
  </main>
</template>

<script setup lang="ts">
import BusinessCoverageSection from '@/components/coverage/BusinessCoverageSection.vue'
import CoverageChecker from '@/components/coverage/CoverageChecker.vue'
import CoverageFAQSection from '@/components/coverage/CoverageFAQSection.vue'
import CoverageHero from '@/components/coverage/CoverageHero.vue'
import MajorCityCoverage from '@/components/coverage/MajorCityCoverage.vue'
import PopularRoutesSection from '@/components/coverage/PopularRoutesSection.vue'
import ServiceAvailabilitySection from '@/components/coverage/ServiceAvailabilitySection.vue'
import UKMapSection from '@/components/coverage/UKMapSection.vue'
import UKNationsOverview from '@/components/coverage/UKNationsOverview.vue'
import UnlistedAreaCta from '@/components/coverage/UnlistedAreaCta.vue'
import HomeCta from '@/components/home/HomeCta.vue'
import { coverageLocations, popularRoutes } from '@/services/mock/coverage.mock'
</script>

<style scoped>
.coverage-page {
  background: #fff;
}
</style>
