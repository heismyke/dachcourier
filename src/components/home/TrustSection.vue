<template>
  <section class="trust-section">
    <div class="container">
      <div class="section-head">
        <h2>Why businesses choose Dach Courier</h2>
        <p>
          Practical courier tools for teams that need clear bookings, visible delivery progress, and
          dependable proof after handover.
        </p>
      </div>

      <div class="benefit-grid">
        <article v-for="item in benefits" :key="item.title" class="benefit-card">
          <component :is="item.icon" :size="26" />
          <strong>{{ item.title }}</strong>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { BadgeCheck, BriefcaseBusiness, MapPinned, ScanLine } from 'lucide-vue-next'

const benefits = [
  {
    icon: BadgeCheck,
    title: 'Instant booking',
    text: 'Create shipment references quickly with clear customer-ready details.',
  },
  {
    icon: ScanLine,
    title: 'Live tracking',
    text: 'Follow collection, transit, delivery, and proof milestones in one place.',
  },
  {
    icon: BadgeCheck,
    title: 'Proof of delivery',
    text: 'Keep delivery evidence attached to the shipment record for support teams.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Business accounts',
    text: 'Support repeat routes, customer accounts, and practical operational workflows.',
  },
  {
    icon: MapPinned,
    title: 'Nationwide coverage',
    text: 'Book courier support across major UK cities, regions, and scheduled routes.',
  },
]
</script>
<style scoped>
.trust-section {
  padding: 92px 0;
  background: #fff;
}
.section-head {
  max-width: 760px;
  display: grid;
  gap: 14px;
  margin-bottom: 34px;
}
.benefit-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}
.benefit-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 24px;
  display: grid;
  align-content: start;
  gap: 12px;
  min-height: 210px;
  box-shadow: var(--shadow-sm);
}
.benefit-card svg {
  color: var(--brand-blue);
}
.benefit-card strong {
  font-weight: var(--font-weight-medium);
}
.benefit-card p {
  font-size: 0.95rem;
}
@media (max-width: 1100px) {
  .benefit-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 700px) {
  .trust-section {
    padding: 64px 0;
  }
  .benefit-grid {
    grid-template-columns: 1fr;
  }
}
</style>
