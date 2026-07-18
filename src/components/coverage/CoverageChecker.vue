<template>
  <section id="coverage-checker" class="checker-section">
    <div class="container checker-grid">
      <div class="checker-copy">
        <h2>Check your route</h2>
        <p>
          Enter the collection and delivery postcodes to preview availability and suitable courier
          options. Production route decisions should come from the coverage API.
        </p>
      </div>

      <form class="checker-card" novalidate @submit.prevent="submit">
        <div class="field-grid">
          <AppInput
            v-model="collectionPostcode"
            label="Collection postcode"
            placeholder="EC1A 1BB"
            autocomplete="postal-code"
          />
          <AppInput
            v-model="deliveryPostcode"
            label="Delivery postcode"
            placeholder="M1 1AE"
            autocomplete="postal-code"
          />
        </div>

        <p v-if="validationMessage" class="validation-message">
          {{ validationMessage }}
        </p>

        <div class="checker-actions">
          <AppButton>{{ coverageStore.isChecking ? 'Checking...' : 'Check coverage' }}</AppButton>
          <button type="button" class="text-button" @click="useExample">Use example route</button>
        </div>

        <CoverageResult v-if="coverageStore.result" :result="coverageStore.result" />

        <div v-if="coverageStore.error" class="api-error" role="alert">
          <AlertCircle :size="18" />
          <span>{{ coverageStore.error }}</span>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AlertCircle } from 'lucide-vue-next'
import AppButton from '@/components/common/AppButton.vue'
import AppInput from '@/components/common/AppInput.vue'
import CoverageResult from '@/components/coverage/CoverageResult.vue'
import { useCoverageStore } from '@/stores/coverage.store'

const coverageStore = useCoverageStore()
const collectionPostcode = ref('')
const deliveryPostcode = ref('')
const validationMessage = ref('')

const UK_POSTCODE_PATTERN = /^([A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2})$/i

function submit() {
  validationMessage.value = ''
  const collection = collectionPostcode.value.trim()
  const delivery = deliveryPostcode.value.trim()

  if (!UK_POSTCODE_PATTERN.test(collection) || !UK_POSTCODE_PATTERN.test(delivery)) {
    validationMessage.value = 'Enter valid UK postcodes, for example EC1A 1BB and M1 1AE.'
    coverageStore.clear()
    return
  }

  void coverageStore.check({
    collectionPostcode: collection,
    deliveryPostcode: delivery,
  })
}

function useExample() {
  collectionPostcode.value = 'EC1A 1BB'
  deliveryPostcode.value = 'M1 1AE'
  validationMessage.value = ''
}
</script>

<style scoped>
.checker-section {
  padding: 92px 0;
  background: var(--surface-soft);
}
.checker-grid {
  display: grid;
  grid-template-columns: 0.78fr 1.22fr;
  gap: 48px;
  align-items: start;
}
.checker-copy {
  display: grid;
  gap: 14px;
}
.checker-card {
  display: grid;
  gap: 18px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: #fff;
  box-shadow: var(--shadow-md);
  padding: 26px;
}
.field-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}
.checker-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
.text-button {
  border: 0;
  background: transparent;
  color: var(--brand-blue);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}
.validation-message,
.api-error {
  color: var(--dach-danger-700);
}
.api-error {
  display: flex;
  align-items: center;
  gap: 8px;
}
@media (max-width: 820px) {
  .checker-grid,
  .field-grid {
    grid-template-columns: 1fr;
  }
}
</style>
