<template>
  <section class="services-summary">
    <div class="container">
      <div class="section-head">
        <h2>What we do</h2>
        <p>Courier services for urgent jobs, planned routes and business-critical shipments.</p>
      </div>
      <div class="service-grid">
        <RouterLink
          v-for="service in catalogue"
          :key="service.slug"
          :to="`/services/${service.slug}`"
        >
          <component :is="service.icon" :size="24" />
          <h3>{{ service.name }}</h3>
          <p>{{ service.text }}</p>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Clock,
  FileText,
  Globe2,
  PackageCheck,
  RefreshCcw,
  Route,
  Truck,
  Waypoints,
} from 'lucide-vue-next'

const catalogue = [
  {
    slug: 'same-day-courier',
    icon: Clock,
    name: 'Same Day Courier',
    text: 'Urgent courier movement for time-sensitive deliveries.',
  },
  {
    slug: 'next-day-delivery',
    icon: PackageCheck,
    name: 'Next Day Delivery',
    text: 'Reliable next business day parcel and document delivery.',
  },
  {
    slug: 'multi-drop-delivery',
    icon: Waypoints,
    name: 'Multi-Drop Delivery',
    text: 'Planned routes across multiple delivery points.',
  },
  {
    slug: 'overnight-courier',
    icon: Truck,
    name: 'Overnight Courier',
    text: 'Overnight courier planning for next-day arrivals.',
  },
  {
    slug: 'document-delivery',
    icon: FileText,
    name: 'Document Delivery',
    text: 'Professional handling for contracts and records.',
  },
  {
    slug: 'wait-and-return',
    icon: RefreshCcw,
    name: 'Wait & Return',
    text: 'Courier waits and returns items after completion.',
  },
  {
    slug: 'international-courier',
    icon: Globe2,
    name: 'International Courier',
    text: 'International courier enquiries and route review.',
  },
  {
    slug: 'contract-runs',
    icon: Route,
    name: 'Contract Runs',
    text: 'Recurring schedules and commercial delivery workflows.',
  },
]
</script>

<style scoped>
.services-summary {
  padding: 96px 0;
  background: #fff;
}
.section-head {
  max-width: 720px;
  display: grid;
  gap: 12px;
  margin-bottom: 34px;
}
.service-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
a {
  min-height: 210px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: #fff;
  box-shadow: var(--shadow-sm);
  padding: 22px;
  display: grid;
  gap: 12px;
  align-content: start;
}
svg {
  color: var(--brand-blue);
}
@media (max-width: 1000px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 620px) {
  .service-grid {
    grid-template-columns: 1fr;
  }
}
</style>
