<template>
  <label class="field">
    <span v-if="label" class="label">{{ label }}</span>
    <select
      class="control"
      :value="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <slot />
    </select>
  </label>
</template>

<script setup lang="ts">
defineProps<{ modelValue?: string; label?: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
