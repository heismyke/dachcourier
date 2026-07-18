<template>
  <div class="card done">
    <h2>Booking confirmed</h2>
    <p>
      Your reference is <strong>{{ reference }}</strong
      >.
    </p>
    <AppButton :to="`/track/${reference}`">Track shipment</AppButton>
  </div>
</template>
<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue'
defineProps<{ reference: string }>()
</script>
<style scoped>
.done {
  padding: 28px;
  display: grid;
  gap: 14px;
}
</style>
