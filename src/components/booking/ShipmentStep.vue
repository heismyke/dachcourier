<template>
  <div class="grid">
    <AppInput v-model="model.weight" label="Weight in kg" type="number" /><AppTextarea
      v-model="model.notes"
      label="Shipment notes"
    />
  </div>
</template>
<script setup lang="ts">
import AppInput from '@/components/common/AppInput.vue'
import AppTextarea from '@/components/common/AppTextarea.vue'
defineProps<{ model: { weight: number; notes: string } }>()
</script>
