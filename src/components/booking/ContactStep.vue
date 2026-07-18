<template>
  <div class="grid">
    <AppInput v-model="model.name" label="Contact name" /><AppInput
      v-model="model.email"
      label="Email"
      type="email"
    /><AppInput v-model="model.phone" label="Phone" />
  </div>
</template>
<script setup lang="ts">
import AppInput from '@/components/common/AppInput.vue'
defineProps<{ model: { name: string; email: string; phone: string } }>()
</script>
