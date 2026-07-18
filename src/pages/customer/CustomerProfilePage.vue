<template>
  <div class="stack">
    <h1>Profile</h1>
    <p v-if="store.profile">{{ store.profile.name }} · {{ store.profile.email }}</p>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useCustomerStore } from '@/stores/customer.store'
const store = useCustomerStore()
onMounted(store.loadProfile)
</script>
