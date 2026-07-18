<template>
  <SeoController />
  <RouterView />
  <AppToast />
</template>

<script setup lang="ts">
import AppToast from '@/components/common/AppToast.vue'
import SeoController from '@/components/seo/SeoController.vue'
</script>
