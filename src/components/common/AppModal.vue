<template>
  <Teleport to="body"
    ><div v-if="open" class="backdrop">
      <section class="modal"><slot /></section></div
  ></Teleport>
</template>
<script setup lang="ts">
defineProps<{ open: boolean }>()
</script>
<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  background: rgb(23 32 28 / 42%);
  display: grid;
  place-items: center;
  padding: 20px;
  z-index: 20;
}
.modal {
  width: min(560px, 100%);
  background: #fff;
  border-radius: var(--radius-md);
  padding: 24px;
  box-shadow: var(--shadow-md);
}
</style>
