<template>
  <label class="field">
    <span v-if="label" class="label">{{ label }}</span>
    <input
      class="control"
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>

<script setup lang="ts">
defineProps<{ modelValue?: string | number; label?: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
