<template>
  <ol class="timeline">
    <li v-for="event in events" :key="event.id" :class="{ complete: event.complete }">
      <strong>{{ event.label }}</strong
      ><span>{{ event.location }}</span>
    </li>
  </ol>
</template>
<script setup lang="ts">
import type { TrackingEvent } from '@/types/tracking'
defineProps<{ events: TrackingEvent[] }>()
</script>
<style scoped>
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 12px;
}
.timeline li {
  border-left: 3px solid var(--color-line);
  padding: 6px 0 6px 16px;
  display: grid;
}
.timeline .complete {
  border-color: var(--color-accent);
}
span {
  color: var(--color-muted);
}
</style>
