<template>
  <section class="why-section">
    <div class="container">
      <div class="section-head">
        <h2>Why choose Dach Courier</h2>
        <p>Clear customer-facing workflows without unsupported claims or inflated statistics.</p>
      </div>
      <div class="why-grid">
        <article v-for="item in benefits" :key="item.title">
          <component :is="item.icon" :size="23" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  BadgeCheck,
  BriefcaseBusiness,
  ListChecks,
  PackageCheck,
  Route,
  ScanLine,
} from 'lucide-vue-next'

const benefits = [
  {
    icon: ListChecks,
    title: 'Clear booking process',
    text: 'Customers can enter route, shipment and contact details without guesswork.',
  },
  {
    icon: Route,
    title: 'Transparent service selection',
    text: 'Service options are presented around timing, route and delivery needs.',
  },
  {
    icon: ScanLine,
    title: 'Shipment tracking',
    text: 'Tracking references and milestones help customers understand progress.',
  },
  {
    icon: PackageCheck,
    title: 'Proof-of-delivery workflows',
    text: 'The platform is prepared for delivery evidence and recipient details.',
  },
  {
    icon: BadgeCheck,
    title: 'Flexible delivery options',
    text: 'Same-day, scheduled, multi-stop and specialist services can be supported.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Business support',
    text: 'Account workflows can support repeat routes and commercial customers.',
  },
]
</script>

<style scoped>
.why-section {
  padding: 96px 0;
  background: #fff;
}
.section-head {
  max-width: 720px;
  display: grid;
  gap: 12px;
  margin-bottom: 34px;
}
.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
article {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: #fff;
  box-shadow: var(--shadow-sm);
  padding: 22px;
  display: grid;
  gap: 12px;
}
svg {
  color: var(--brand-blue);
}
@media (max-width: 850px) {
  .why-grid {
    grid-template-columns: 1fr;
  }
}
</style>
