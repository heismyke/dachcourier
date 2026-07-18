<template>
  <aside class="card summary">
    <h3>Price summary</h3>
    <p>Selected service</p>
    <strong>{{ price }}</strong
    ><slot />
  </aside>
</template>
<script setup lang="ts">
defineProps<{ price: string }>()
</script>
<style scoped>
.summary {
  padding: 22px;
  display: grid;
  gap: 10px;
  position: sticky;
  top: 20px;
}
.summary strong {
  font-size: 2rem;
}
</style>
