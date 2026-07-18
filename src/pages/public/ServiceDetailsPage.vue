<template>
  <section class="section">
    <div class="container stack">
      <AppBreadcrumbs><RouterLink to="/services">Services</RouterLink></AppBreadcrumbs>
      <h1>{{ service?.name ?? 'Service' }}</h1>
      <p>{{ service?.summary }}</p>
      <ul>
        <li v-for="feature in service?.features" :key="feature">{{ feature }}</li>
      </ul>
      <AppButton to="/quote">Make inquiry</AppButton>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { services } from '@/mocks/services'
import AppButton from '@/components/common/AppButton.vue'
import AppBreadcrumbs from '@/components/common/AppBreadcrumbs.vue'
const route = useRoute()
const service = computed(() => services.find((item) => item.slug === route.params.slug))
</script>
