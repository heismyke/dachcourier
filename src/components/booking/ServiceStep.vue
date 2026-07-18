<template>
  <div class="grid">
    <button
      v-for="option in options"
      :key="option.id"
      class="card option"
      @click="$emit('select', option.id)"
    >
      <strong>{{ option.name }}</strong
      ><span>{{ formatCurrency(option.price) }} · {{ option.eta }}</span>
    </button>
  </div>
</template>
<script setup lang="ts">
import type { QuoteOption } from '@/types/quote'
import { formatCurrency } from '@/utils/currency'
defineProps<{ options: QuoteOption[] }>()
defineEmits<{ select: [id: string] }>()
</script>
<style scoped>
.option {
  text-align: left;
  padding: 18px;
  display: grid;
  gap: 6px;
  cursor: pointer;
}
.option span {
  color: var(--color-muted);
}
</style>
