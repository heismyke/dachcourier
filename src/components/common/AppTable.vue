<template>
  <div class="table-wrap">
    <table>
      <slot />
    </table>
  </div>
</template>
<style scoped>
.table-wrap {
  overflow-x: auto;
  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);
}
table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
}
:deep(th),
:deep(td) {
  text-align: left;
  padding: 14px 16px;
  border-bottom: 1px solid var(--color-line);
  white-space: nowrap;
}
:deep(th) {
  font-size: 0.86rem;
  color: var(--color-muted);
  font-weight: var(--font-weight-semibold);
}
:deep(td) {
  font-weight: var(--font-weight-regular);
}
</style>
