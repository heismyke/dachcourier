<template>
  <section class="coverage-link-section">
    <div class="container coverage-grid">
      <div class="map-placeholder">
        <MapPinned :size="42" />
        <span>UK coverage areas</span>
      </div>
      <div>
        <h2>Courier support across UK regions</h2>
        <p>
          Review major cities, regional routes and postcode availability before planning a
          collection.
        </p>
        <div class="cities">
          <span v-for="city in cities" :key="city">{{ city }}</span>
        </div>
        <div class="actions">
          <AppButton to="/coverage">Check coverage</AppButton>
          <AppButton to="/quote" variant="ghost">Make inquiry</AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPinned } from 'lucide-vue-next'
import AppButton from '@/components/common/AppButton.vue'

const cities = [
  'London',
  'Manchester',
  'Birmingham',
  'Leeds',
  'Bristol',
  'Cardiff',
  'Glasgow',
  'Edinburgh',
]
</script>

<style scoped>
.coverage-link-section {
  padding: 96px 0;
  background: #fff;
}
.coverage-grid {
  display: grid;
  grid-template-columns: 0.85fr 1fr;
  gap: 52px;
  align-items: center;
}
.map-placeholder {
  min-height: 390px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background:
    radial-gradient(circle at 62% 34%, rgb(38 115 199 / 18%), transparent 24%),
    linear-gradient(135deg, rgb(14 165 233 / 10%), transparent 40%), var(--surface-soft);
  display: grid;
  place-items: center;
  align-content: center;
  gap: 12px;
  color: var(--brand-blue);
}
.coverage-grid > div:last-child {
  display: grid;
  gap: 18px;
}
.cities,
.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.cities span {
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 8px 12px;
  color: var(--text);
}
@media (max-width: 850px) {
  .coverage-grid {
    grid-template-columns: 1fr;
  }
}
</style>
