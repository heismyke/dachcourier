<template>
  <section class="card summary">
    <span class="tracking-reference">{{ result.reference }}</span>
    <h2>{{ result.status }}</h2>
    <p>{{ result.service }} · ETA {{ result.eta }}</p>
  </section>
</template>
<script setup lang="ts">
import type { TrackingResult } from '@/types/tracking'
defineProps<{ result: TrackingResult }>()
</script>
<style scoped>
.summary {
  padding: 24px;
  display: grid;
  gap: 8px;
}
.tracking-reference {
  color: var(--muted);
  font-size: 0.95rem;
}
</style>
