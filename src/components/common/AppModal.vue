<template>
  <Teleport to="body">
    <motion.div
      v-if="open"
      class="backdrop"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      :transition="{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }"
    >
      <motion.section
        class="modal"
        :initial="{ opacity: 0, scale: 0.97 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }"
      >
        <slot />
      </motion.section>
    </motion.div>
  </Teleport>
</template>
<script setup lang="ts">
import { motion } from 'motion-v'

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
