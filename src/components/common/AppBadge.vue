<template>
  <span class="badge"><slot /></span>
</template>
<style scoped>
.badge {
  display: inline-flex;
  border-radius: 999px;
  background: var(--color-soft);
  border: 1px solid var(--color-line);
  padding: 4px 10px;
  font-size: 0.78rem;
  font-weight: var(--font-weight-semibold);
}
</style>
