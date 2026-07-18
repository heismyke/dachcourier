<template>
  <motion.div
    :initial="initial"
    :while-in-view="animate"
    :viewport="{ once: true, amount }"
    :transition="transition"
    class="reveal"
  >
    <slot />
  </motion.div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { motion } from 'motion-v'
import { usePreferredReducedMotion } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    delay?: number
    amount?: number
    variant?: 'fade-up' | 'image'
  }>(),
  {
    delay: 0,
    amount: 0.18,
    variant: 'fade-up',
  },
)

const reducedMotion = usePreferredReducedMotion()

const initial = computed(() => {
  if (reducedMotion.value === 'reduce') return { opacity: 1, y: 0, scale: 1 }
  return props.variant === 'image' ? { opacity: 0, scale: 0.98 } : { opacity: 0, y: 18 }
})

const animate = { opacity: 1, y: 0, scale: 1 }
const transition = computed(() => ({
  duration: props.variant === 'image' ? 0.32 : 0.25,
  delay: props.delay,
  ease: [0.22, 0.61, 0.36, 1],
}))
</script>
