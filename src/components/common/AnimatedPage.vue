<template>
  <motion.div
    :key="routeKey"
    :initial="initial"
    :animate="animate"
    :exit="exit"
    :transition="transition"
  >
    <slot />
  </motion.div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { motion } from 'motion-v'
import { usePreferredReducedMotion } from '@vueuse/core'

const props = defineProps<{ routeKey?: string }>()
const reducedMotion = usePreferredReducedMotion()

const initial = computed(() =>
  reducedMotion.value === 'reduce' ? { opacity: 1 } : { opacity: 0, y: 16 },
)
const animate = { opacity: 1, y: 0 }
const exit = computed(() =>
  reducedMotion.value === 'reduce' ? { opacity: 1 } : { opacity: 0, y: -8 },
)
const transition = { duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }
const routeKey = computed(() => props.routeKey)
</script>
