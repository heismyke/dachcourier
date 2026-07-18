<template>
  <section class="section">
    <div class="container"><ConfirmationStep :reference="String(route.params.reference)" /></div>
  </section>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import ConfirmationStep from '@/components/booking/ConfirmationStep.vue'
const route = useRoute()
</script>
