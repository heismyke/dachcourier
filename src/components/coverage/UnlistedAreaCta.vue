<template>
  <section class="unlisted-section">
    <div class="container unlisted-card">
      <div>
        <h2>Can’t find your location?</h2>
        <p>
          Our city list highlights common service areas, but other routes may still be available.
          Send us the collection and delivery postcodes for a manual availability check.
        </p>
      </div>
      <div class="actions">
        <AppButton to="/quote">Request a route quote</AppButton>
        <AppButton to="/support" variant="ghost">Contact support</AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue'
</script>

<style scoped>
.unlisted-section {
  padding: 82px 0;
  background: #fff;
}
.unlisted-card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 28px;
  align-items: center;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface-soft);
  padding: 34px;
}
.unlisted-card div:first-child {
  display: grid;
  gap: 12px;
}
.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
@media (max-width: 760px) {
  .unlisted-card {
    grid-template-columns: 1fr;
  }
}
</style>
