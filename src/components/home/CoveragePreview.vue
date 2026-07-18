<template>
  <section class="coverage-strip">
    <div class="container coverage-grid">
      <div>
        <h2>Check your next courier route.</h2>
        <p>
          Enter collection and delivery postcodes to review available services across supported UK
          areas.
        </p>
      </div>
      <div class="coverage-actions">
        <AppButton to="/coverage">Explore coverage</AppButton>
        <AppButton to="/quote" variant="ghost">Make inquiry</AppButton>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue'
</script>
<style scoped>
.coverage-strip {
  background: var(--brand-accent-soft);
  border-top: 1px solid rgb(244 180 0 / 30%);
  border-bottom: 1px solid rgb(244 180 0 / 30%);
  padding: 52px 0;
}
.coverage-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  align-items: center;
}
.coverage-grid p {
  margin-top: 12px;
}
.coverage-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
@media (max-width: 760px) {
  .coverage-grid {
    grid-template-columns: 1fr;
  }
}
</style>
