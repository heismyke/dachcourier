<template>
  <section class="industries-section">
    <div class="container">
      <div class="section-head">
        <h2>Who we serve</h2>
        <p>Delivery support for teams that need reliable handovers and clear communication.</p>
      </div>
      <div class="industry-grid">
        <article v-for="item in industries" :key="item.title">
          <component :is="item.icon" :size="22" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  BriefcaseBusiness,
  Building2,
  ConciergeBell,
  Hammer,
  HeartPulse,
  Landmark,
  Scale,
  Store,
} from 'lucide-vue-next'

const industries = [
  { icon: Scale, title: 'Legal', text: 'Contracts, case files and timed document handovers.' },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    text: 'Samples, supplies and time-sensitive operational deliveries.',
  },
  {
    icon: Store,
    title: 'Retail and e-commerce',
    text: 'Customer orders, store transfers and fulfilment support.',
  },
  {
    icon: Building2,
    title: 'Manufacturing',
    text: 'Parts, samples and business-critical stock movement.',
  },
  {
    icon: Hammer,
    title: 'Construction',
    text: 'Site materials, documents and supplier coordination.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Professional services',
    text: 'Client documents and scheduled office deliveries.',
  },
  {
    icon: Landmark,
    title: 'Financial services',
    text: 'Secure document movement and office-to-office courier work.',
  },
  {
    icon: ConciergeBell,
    title: 'Hospitality',
    text: 'Supplier items, venue support and urgent operational errands.',
  },
]
</script>

<style scoped>
.industries-section {
  padding: 96px 0;
  background: var(--surface-soft);
}
.section-head {
  max-width: 720px;
  display: grid;
  gap: 12px;
  margin-bottom: 34px;
}
.industry-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
article {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: #fff;
  padding: 22px;
  display: grid;
  gap: 12px;
  align-content: start;
}
svg {
  color: var(--brand-blue);
}
@media (max-width: 1000px) {
  .industry-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 620px) {
  .industry-grid {
    grid-template-columns: 1fr;
  }
}
</style>
