<template>
  <PublicHeader />
  <main><RouterView /></main>
  <PublicFooter />
</template>
<script setup lang="ts">
import PublicHeader from '@/components/layout/PublicHeader.vue'
import PublicFooter from '@/components/layout/PublicFooter.vue'
</script>
