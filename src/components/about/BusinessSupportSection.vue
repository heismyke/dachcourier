<template>
  <section class="business-support">
    <div class="container support-grid">
      <div>
        <h2>Delivery support for growing businesses</h2>
        <p>
          Commercial customers can plan repeat delivery workflows with support for collection
          schedules, contract routes, multi-drop deliveries and account-based communication.
        </p>
        <div class="actions">
          <AppButton to="/business">Explore business solutions</AppButton>
          <AppButton to="/support" variant="ghost">Request a consultation</AppButton>
        </div>
      </div>
      <ul>
        <li v-for="item in items" :key="item">
          <CheckCircle2 :size="18" />
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'
import AppButton from '@/components/common/AppButton.vue'

const items = [
  'Regular collection schedules',
  'Contract routes',
  'Multi-drop deliveries',
  'Business account support',
  'Operational reporting preparation',
  'Dedicated contact workflows',
]
</script>

<style scoped>
.business-support {
  padding: 96px 0;
  background: var(--surface-soft);
}
.support-grid {
  display: grid;
  grid-template-columns: 0.9fr 1fr;
  gap: 48px;
  align-items: center;
}
.support-grid > div {
  display: grid;
  gap: 18px;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: #fff;
  padding: 14px;
  display: flex;
  gap: 10px;
  align-items: center;
}
svg {
  color: var(--brand-blue);
}
@media (max-width: 850px) {
  .support-grid,
  ul {
    grid-template-columns: 1fr;
  }
}
</style>
