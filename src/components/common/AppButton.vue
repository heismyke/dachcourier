<template>
  <component
    :is="to ? RouterLink : 'button'"
    :to="to"
    class="app-button"
    :class="`app-button--${variant}`"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

withDefaults(defineProps<{ to?: string; variant?: 'primary' | 'secondary' | 'ghost' }>(), {
  to: undefined,
  variant: 'primary',
})
</script>

<style scoped>
.app-button {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  padding: 0 18px;
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
}
.app-button--primary {
  background: var(--brand-blue);
  color: #fff;
}
.app-button--secondary {
  background: var(--brand-accent);
  color: var(--color-ink);
}
.app-button--ghost {
  background: transparent;
  border-color: var(--color-line);
}
</style>
