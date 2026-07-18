<template>
  <div class="map"><Map />Live route map placeholder</div>
</template>
<script setup lang="ts">
import { Map } from 'lucide-vue-next'
</script>
<style scoped>
.map {
  min-height: 260px;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
  display: grid;
  place-items: center;
  color: var(--color-muted);
  background: var(--color-soft);
}
</style>
