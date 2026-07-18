<template>
  <label class="field">
    <span v-if="label" class="label">{{ label }}</span>
    <textarea
      class="control textarea"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
  </label>
</template>

<script setup lang="ts">
defineProps<{ modelValue?: string; label?: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<style scoped>
.textarea {
  min-height: 120px;
  resize: vertical;
}
</style>
