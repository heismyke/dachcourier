<template>
  <Teleport to="body">
    <motion.aside
      v-if="open"
      class="drawer"
      :initial="{ opacity: 0, x: 24 }"
      :animate="{ opacity: 1, x: 0 }"
      :exit="{ opacity: 0, x: 24 }"
      :transition="{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }"
    >
      <slot />
    </motion.aside>
  </Teleport>
</template>
<script setup lang="ts">
import { motion } from 'motion-v'

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
