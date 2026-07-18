<template>
  <main v-if="location" class="city-page">
    <section class="city-hero">
      <div class="container hero-grid">
        <div>
          <RouterLink to="/coverage" class="back-link">Areas we cover</RouterLink>
          <h1>{{ location.city }} courier coverage</h1>
          <p>
            Courier services for {{ location.city }} and selected nearby routes. Final availability
            depends on postcode, shipment type and operational capacity.
          </p>
          <div class="actions">
            <AppButton to="/quote">Make inquiry</AppButton>
            <AppButton to="/book" variant="ghost">Book a courier</AppButton>
          </div>
        </div>
        <div class="postcode-card">
          <span>Postcode areas</span>
          <div>
            <strong v-for="prefix in location.postcodePrefixes" :key="prefix">{{ prefix }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="container detail-grid">
        <article>
          <h2>Available courier services</h2>
          <ul>
            <li v-for="service in location.services" :key="service">
              <CheckCircle2 :size="16" />
              {{ service }}
            </li>
          </ul>
        </article>
        <article>
          <h2>Common business use cases</h2>
          <ul>
            <li v-for="useCase in useCases" :key="useCase">
              <CheckCircle2 :size="16" />
              {{ useCase }}
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="routes-section">
      <div class="container">
        <h2>Common route examples</h2>
        <div class="route-grid">
          <article v-for="example in routeExamples" :key="example">
            <Route :size="18" />
            <span>{{ example }}</span>
          </article>
        </div>
        <p class="disclaimer">
          These examples are for planning context only and are not delivery-time guarantees.
        </p>
      </div>
    </section>
  </main>
  <main v-else class="missing-page">
    <div class="container missing-card">
      <h1>Coverage area not found</h1>
      <p>Search the main coverage page or request a manual route quote.</p>
      <AppButton to="/coverage">Back to coverage</AppButton>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { CheckCircle2, Route } from 'lucide-vue-next'
import AppButton from '@/components/common/AppButton.vue'
import { coverageLocations } from '@/services/mock/coverage.mock'

const route = useRoute()
const location = computed(() =>
  coverageLocations.find((item) => item.slug === String(route.params.citySlug)),
)

const routeExamples = computed(() => {
  if (!location.value) return []
  const nearby = coverageLocations
    .filter((item) => item.slug !== location.value?.slug)
    .slice(0, 4)
    .map((item) => `${location.value?.city} to ${item.city}`)
  return nearby
})

const useCases = [
  'Urgent documents and parcels',
  'Retail and supplier collections',
  'Business-critical deliveries',
  'Planned repeat routes',
]
</script>

<style scoped>
.city-page,
.missing-page {
  background: #fff;
}
.city-hero {
  padding: 96px 0;
  border-bottom: 1px solid var(--border);
  background: var(--surface-soft);
}
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 48px;
  align-items: center;
}
.hero-grid > div:first-child {
  display: grid;
  gap: 16px;
}
.back-link {
  color: var(--brand-blue);
  font-weight: var(--font-weight-medium);
}
.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.postcode-card,
.detail-grid article,
.route-grid article,
.missing-card {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: #fff;
  box-shadow: var(--shadow-sm);
  padding: 24px;
}
.postcode-card {
  display: grid;
  gap: 14px;
}
.postcode-card span {
  color: var(--muted);
}
.postcode-card div {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.postcode-card strong {
  border-radius: 999px;
  background: var(--dach-info-50);
  color: var(--brand-blue);
  padding: 7px 10px;
}
.content-section,
.routes-section,
.missing-page {
  padding: 88px 0;
}
.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.detail-grid article {
  display: grid;
  gap: 16px;
}
ul {
  display: grid;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}
li,
.route-grid article {
  display: flex;
  gap: 9px;
  align-items: center;
}
li svg,
.route-grid svg {
  color: var(--brand-blue);
}
.routes-section {
  background: var(--surface-soft);
}
.routes-section .container {
  display: grid;
  gap: 18px;
}
.route-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
.disclaimer {
  max-width: 760px;
}
.missing-card {
  display: grid;
  gap: 14px;
  justify-items: start;
}
@media (max-width: 900px) {
  .hero-grid,
  .detail-grid,
  .route-grid {
    grid-template-columns: 1fr;
  }
}
</style>
