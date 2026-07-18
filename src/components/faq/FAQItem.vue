<template>
  <article class="faq-item" :class="{ open }">
    <button
      :id="`${item.id}-trigger`"
      type="button"
      :aria-expanded="open"
      :aria-controls="`${item.id}-panel`"
      @click="$emit('toggle', item.id)"
      @keydown.enter.prevent="$emit('toggle', item.id)"
      @keydown.space.prevent="$emit('toggle', item.id)"
      @keydown.escape.prevent="$emit('close')"
    >
      <span>{{ item.question }}</span>
      <ChevronDown :size="20" />
    </button>
    <div
      :id="`${item.id}-panel`"
      class="answer"
      role="region"
      :aria-labelledby="`${item.id}-trigger`"
    >
      <p>{{ item.answer }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import type { FAQ } from './faq.types'

defineProps<{ item: FAQ; open: boolean }>()
defineEmits<{ toggle: [id: string]; close: [] }>()
</script>

<style scoped>
.faq-item {
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #fff;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition:
    border-color 220ms ease,
    box-shadow 220ms ease;
}
.faq-item.open {
  border-color: rgb(38 115 199 / 42%);
  box-shadow: var(--shadow-md);
}
button {
  width: 100%;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  border: 0;
  background: transparent;
  color: var(--ink);
  padding: 0 20px;
  text-align: left;
  font: inherit;
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
}
button:focus-visible {
  outline: 3px solid rgb(38 115 199 / 26%);
  outline-offset: -3px;
}
button svg {
  flex: 0 0 auto;
  color: var(--brand-blue);
  transition: transform 220ms ease;
}
.open button svg {
  transform: rotate(180deg);
}
.answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 220ms ease;
}
.open .answer {
  grid-template-rows: 1fr;
}
.answer p {
  min-height: 0;
  overflow: hidden;
  padding: 0 20px;
  color: var(--text);
  font-weight: var(--font-weight-regular);
}
.open .answer p {
  padding-bottom: 20px;
}
</style>
