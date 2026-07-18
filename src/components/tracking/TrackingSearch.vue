<template>
  <form class="search" @submit.prevent="$emit('search', reference)">
    <input v-model="reference" aria-label="Tracking reference" placeholder="DACH-7K42QX" />
    <AppButton>Track</AppButton>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import AppButton from '@/components/common/AppButton.vue'
const reference = ref('')
defineEmits<{ search: [reference: string] }>()
</script>
<style scoped>
.search {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;
  width: min(720px, 100%);
}
input {
  min-height: 56px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0 16px;
  font-size: 1rem;
  background: #fff;
}
@media (max-width: 620px) {
  .search {
    grid-template-columns: 1fr;
  }
}
</style>
