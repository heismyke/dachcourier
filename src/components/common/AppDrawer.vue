<template>
  <Teleport to="body"
    ><aside v-if="open" class="drawer"><slot /></aside
  ></Teleport>
</template>
<script setup lang="ts">
defineProps<{ open: boolean }>()
</script>
<style scoped>
.drawer {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: min(420px, 100%);
  background: #fff;
  box-shadow: var(--shadow-md);
  z-index: 30;
  padding: 24px;
}
</style>
