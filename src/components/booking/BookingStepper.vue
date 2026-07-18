<template>
  <ol class="stepper">
    <li v-for="(step, index) in steps" :key="step" :class="{ active: index === current }">
      {{ step }}
    </li>
  </ol>
</template>
<script setup lang="ts">
defineProps<{ current: number }>()
const steps = ['Route', 'Shipment', 'Service', 'Contact', 'Review', 'Confirmation']
</script>
<style scoped>
.stepper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  padding: 0;
  margin: 0 0 24px;
  list-style: none;
}
.stepper li {
  border-bottom: 3px solid var(--color-line);
  padding-bottom: 8px;
  font-size: 0.8rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-muted);
}
.stepper .active {
  border-color: var(--color-brand-strong);
  color: var(--color-ink);
}
@media (max-width: 760px) {
  .stepper {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
