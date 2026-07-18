<template><div class="skeleton" /></template>
<style scoped>
.skeleton {
  min-height: 96px;
  border-radius: var(--radius-md);
  background: linear-gradient(90deg, #eef2ee, #f8faf8, #eef2ee);
  background-size: 200% 100%;
  animation: pulse 1.2s infinite;
}
@keyframes pulse {
  to {
    background-position: -200% 0;
  }
}
</style>
