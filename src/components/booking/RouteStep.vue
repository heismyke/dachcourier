<template>
  <div class="grid">
    <AppInput v-model="model.fromPostcode" label="Collection postcode" /><AppInput
      v-model="model.toPostcode"
      label="Delivery postcode"
    />
  </div>
</template>
<script setup lang="ts">
import AppInput from '@/components/common/AppInput.vue'
defineProps<{ model: { fromPostcode: string; toPostcode: string } }>()
</script>
