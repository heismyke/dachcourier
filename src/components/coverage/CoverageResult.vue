<template>
  <div class="coverage-result" :class="statusClass" role="status" aria-live="polite">
    <div class="result-icon">
      <CheckCircle2 v-if="result.supported" :size="22" />
      <AlertTriangle v-else-if="result.requiresManualQuote" :size="22" />
      <AlertCircle v-else :size="22" />
    </div>
    <div class="result-body">
      <h3>{{ title }}</h3>
      <p>{{ result.message }}</p>

      <dl v-if="result.collectionArea || result.deliveryArea" class="area-list">
        <div v-if="result.collectionArea">
          <dt>Collection</dt>
          <dd>{{ result.collectionArea }}</dd>
        </div>
        <div v-if="result.deliveryArea">
          <dt>Delivery</dt>
          <dd>{{ result.deliveryArea }}</dd>
        </div>
      </dl>

      <div v-if="result.availableServiceSlugs.length" class="service-list">
        <span>Available options</span>
        <ul>
          <li v-for="service in serviceNames" :key="service">
            <CheckCircle2 :size="16" />
            {{ service }}
          </li>
        </ul>
      </div>

      <p v-if="result.estimatedCollectionLabel" class="note">
        {{ result.estimatedCollectionLabel }}
      </p>

      <div class="result-actions">
        <AppButton to="/quote">Make inquiry</AppButton>
        <AppButton v-if="result.supported" to="/book" variant="ghost">Book this route</AppButton>
        <AppButton v-else to="/support" variant="ghost">Contact support</AppButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { AlertCircle, AlertTriangle, CheckCircle2 } from 'lucide-vue-next'
import AppButton from '@/components/common/AppButton.vue'
import type { CoverageCheckResult } from '@/types/coverage'

const props = defineProps<{ result: CoverageCheckResult }>()

const serviceLabels: Record<string, string> = {
  'same-day-courier': 'Same Day Courier',
  'next-day-delivery': 'Next Day Delivery',
  'multi-drop-delivery': 'Multi-Drop Delivery',
  'overnight-courier': 'Overnight Courier',
  'document-delivery': 'Document Delivery',
  'wait-&-return': 'Wait & Return',
  'wait-and-return': 'Wait & Return',
  'international-courier': 'International Courier',
  'contract-runs': 'Contract Runs',
}

const title = computed(() => {
  if (props.result.supported) return 'Service available for this route'
  if (props.result.requiresManualQuote) return 'Manual quote required'
  return 'Invalid postcode'
})

const statusClass = computed(() => ({
  'is-supported': props.result.supported,
  'is-manual': props.result.requiresManualQuote,
  'is-invalid': !props.result.supported && !props.result.requiresManualQuote,
}))

const serviceNames = computed(() =>
  props.result.availableServiceSlugs.map((slug) => serviceLabels[slug] ?? slug),
)
</script>

<style scoped>
.coverage-result {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  border: 1px solid var(--dach-border-default);
  border-radius: var(--dach-radius-md);
  background: #fff;
  padding: 18px;
}
.coverage-result.is-supported {
  border-color: rgb(22 163 74 / 28%);
  background: var(--dach-success-50);
}
.coverage-result.is-manual {
  border-color: rgb(245 158 11 / 28%);
  background: var(--dach-warning-50);
}
.coverage-result.is-invalid {
  border-color: rgb(220 38 38 / 28%);
  background: var(--dach-danger-50);
}
.result-icon {
  color: var(--brand-blue);
  padding-top: 2px;
}
.result-body {
  display: grid;
  gap: 14px;
}
.result-body h3 {
  font-size: 1.1rem;
}
.area-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin: 0;
}
dt {
  color: var(--muted);
  font-size: 0.86rem;
}
dd {
  margin: 3px 0 0;
  color: var(--ink);
  font-weight: 600;
}
.service-list,
.service-list ul {
  display: grid;
  gap: 9px;
}
.service-list span {
  color: var(--ink);
  font-weight: 600;
}
.service-list ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.service-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text);
}
.service-list li svg {
  color: var(--brand-blue);
}
.note {
  font-size: 0.92rem;
}
.result-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
@media (max-width: 620px) {
  .area-list {
    grid-template-columns: 1fr;
  }
}
</style>
