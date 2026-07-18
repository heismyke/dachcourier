<template>
  <label class="faq-search">
    <Search :size="18" />
    <input
      :value="modelValue"
      type="search"
      placeholder="Search questions..."
      aria-label="Search frequently asked questions"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next'

defineProps<{ modelValue: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<style scoped>
.faq-search {
  min-height: 52px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: #fff;
  box-shadow: var(--shadow-sm);
  padding: 0 16px;
  color: var(--muted);
}
input {
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--ink);
  font: inherit;
}
</style>
