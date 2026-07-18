<template>
  <div class="empty"><slot>No records found.</slot></div>
</template>
<style scoped>
.empty {
  border: 1px dashed var(--color-line);
  border-radius: var(--radius-md);
  padding: 32px;
  color: var(--color-muted);
  text-align: center;
}
</style>
