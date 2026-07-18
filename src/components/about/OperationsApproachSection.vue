<template>
  <section class="operations-section">
    <div class="container">
      <div class="section-head">
        <h2>Our operations approach</h2>
        <p>
          No invented team profiles. These are the functions that support a professional delivery
          workflow.
        </p>
      </div>
      <div class="operations-grid">
        <article v-for="item in functions" :key="item.title">
          <component :is="item.icon" :size="22" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ClipboardList, Headphones, Map, RadioTower, ScanLine } from 'lucide-vue-next'

const functions = [
  {
    icon: Headphones,
    title: 'Customer support',
    text: 'Helps customers with bookings, delivery questions and route changes.',
  },
  {
    icon: ClipboardList,
    title: 'Dispatch and booking management',
    text: 'Reviews shipment details and prepares jobs for courier handling.',
  },
  {
    icon: Map,
    title: 'Driver coordination',
    text: 'Supports assignment planning and delivery handover communication.',
  },
  {
    icon: ScanLine,
    title: 'Delivery tracking',
    text: 'Keeps milestone records connected to the customer reference.',
  },
  {
    icon: RadioTower,
    title: 'Business account support',
    text: 'Prepares repeat workflows and dedicated contact processes for teams.',
  },
]
</script>

<style scoped>
.operations-section {
  padding: 96px 0;
  background: var(--surface-soft);
}
.section-head {
  max-width: 760px;
  display: grid;
  gap: 12px;
  margin-bottom: 34px;
}
.operations-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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
@media (max-width: 1100px) {
  .operations-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 620px) {
  .operations-grid {
    grid-template-columns: 1fr;
  }
}
</style>
