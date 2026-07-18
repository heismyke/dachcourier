<template>
  <SeoController />
  <RouterView v-slot="{ Component, route }">
    <AnimatedPage :route-key="route.fullPath">
      <component :is="Component" />
    </AnimatedPage>
  </RouterView>
  <AppToast />
</template>

<script setup lang="ts">
import AnimatedPage from '@/components/common/AnimatedPage.vue'
import AppToast from '@/components/common/AppToast.vue'
import SeoController from '@/components/seo/SeoController.vue'
</script>
