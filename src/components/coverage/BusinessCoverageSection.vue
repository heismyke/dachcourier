<template>
  <section class="business-section">
    <div class="container business-grid">
      <div class="business-copy">
        <h2>Need regular courier coverage?</h2>
        <p>
          Dach Courier Services can support repeat business routes, planned collections and
          operational workflows for teams that need more than one-off deliveries.
        </p>
        <div class="actions">
          <AppButton to="/business">Explore business solutions</AppButton>
          <AppButton to="/support" variant="ghost">Request a consultation</AppButton>
        </div>
      </div>
      <div class="capability-grid">
        <article v-for="item in capabilities" :key="item">
          <CheckCircle2 :size="17" />
          <span>{{ item }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'
import AppButton from '@/components/common/AppButton.vue'

const capabilities = [
  'Repeat routes',
  'Scheduled collections',
  'Multi-drop operations',
  'Contract runs',
  'Regional coverage planning',
  'Account pricing',
  'Reporting workflows',
]
</script>

<style scoped>
.business-section {
  padding: 92px 0;
  background: var(--brand-navy);
}
.business-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: center;
}
.business-copy {
  display: grid;
  gap: 18px;
  color: #fff;
}
.business-copy p {
  color: rgb(255 255 255 / 74%);
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.capability-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
article {
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgb(255 255 255 / 16%);
  border-radius: var(--radius-sm);
  background: rgb(255 255 255 / 7%);
  color: #fff;
  padding: 16px;
}
svg {
  color: var(--brand-cyan);
}
@media (max-width: 820px) {
  .business-grid,
  .capability-grid {
    grid-template-columns: 1fr;
  }
}
</style>
