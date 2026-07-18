<template>
  <nav class="breadcrumbs"><RouterLink to="/">Home</RouterLink><span>/</span><slot /></nav>
</template>
<style scoped>
.breadcrumbs {
  display: flex;
  gap: 8px;
  color: var(--color-muted);
  font-size: 0.9rem;
  margin-bottom: 24px;
}
</style>
