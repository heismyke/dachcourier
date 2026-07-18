<template>
  <div v-auto-animate class="toasts" aria-live="polite">
    <div v-for="toast in store.items" :key="toast.id" class="toast">{{ toast.message }}</div>
  </div>
</template>
<script setup lang="ts">
import { useNotificationsStore } from '@/stores/notifications.store'
const store = useNotificationsStore()
</script>
<style scoped>
.toasts {
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: grid;
  gap: 10px;
  z-index: 50;
}
.toast {
  background: var(--color-ink);
  color: #fff;
  border-radius: var(--radius-sm);
  padding: 12px 14px;
  box-shadow: var(--shadow-md);
  transition:
    opacity var(--dach-motion-normal) var(--dach-motion-ease),
    transform var(--dach-motion-normal) var(--dach-motion-ease);
}
</style>
