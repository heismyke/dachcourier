<template>
  <section class="mission-section">
    <div class="container mission-grid">
      <article v-for="item in items" :key="item.title">
        <component :is="item.icon" :size="26" />
        <h2>{{ item.title }}</h2>
        <p>{{ item.text }}</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Headphones, ListChecks, ScanLine } from 'lucide-vue-next'

const items = [
  {
    icon: ListChecks,
    title: 'Make delivery simple',
    text: 'Give customers a clear way to choose a service, book a collection and follow every delivery milestone.',
  },
  {
    icon: ScanLine,
    title: 'Keep every handover visible',
    text: 'Support clear references, status updates, recipient information and proof-of-delivery workflows.',
  },
  {
    icon: Headphones,
    title: 'Support people when plans change',
    text: 'Provide customer and operations support for urgent, scheduled and repeat delivery needs.',
  },
]
</script>

<style scoped>
.mission-section {
  padding: 82px 0;
  background: var(--surface-soft);
}
.mission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
article {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: #fff;
  box-shadow: var(--shadow-sm);
  padding: 26px;
  display: grid;
  gap: 14px;
}
svg {
  color: var(--brand-blue);
}
h2 {
  font-size: 1.45rem;
}
@media (max-width: 800px) {
  .mission-grid {
    grid-template-columns: 1fr;
  }
}
</style>
