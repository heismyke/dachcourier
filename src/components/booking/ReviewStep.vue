<template>
  <div class="card review">
    <h3>Review booking</h3>
    <pre>{{ model }}</pre>
  </div>
</template>
<script setup lang="ts">
defineProps<{ model: unknown }>()
</script>
<style scoped>
.review {
  padding: 20px;
}
pre {
  white-space: pre-wrap;
  color: var(--color-muted);
}
</style>
