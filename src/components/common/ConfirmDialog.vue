<template>
  <AppModal :open="open"
    ><div class="stack">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <AppButton @click="$emit('confirm')">Confirm</AppButton>
    </div></AppModal
  >
</template>
<script setup lang="ts">
import AppButton from './AppButton.vue'
import AppModal from './AppModal.vue'
defineProps<{ open: boolean; title: string; message: string }>()
defineEmits<{ confirm: [] }>()
</script>
