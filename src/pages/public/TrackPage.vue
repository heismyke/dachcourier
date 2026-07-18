<template>
  <section class="track-page">
    <div class="container track-head">
      <h1>Track your Dach shipment.</h1>
    </div>
    <div class="track-band">
      <div class="container">
        <TrackingSearch @search="lookup" />
      </div>
    </div>
    <div class="container stack results">
      <TrackingSummary v-if="store.result" :result="store.result" />
      <div v-if="store.result" class="split">
        <TrackingTimeline :events="store.result.events" /><TrackingMapPlaceholder />
      </div>
      <ProofOfDelivery v-if="store.result" />

      <section class="faq-block">
        <h2>Frequently asked questions</h2>
        <details open>
          <summary>Where can I find my tracking reference?</summary>
          <p>Your Dach tracking reference is included in the booking confirmation email.</p>
        </details>
        <details>
          <summary>When will tracking information appear?</summary>
          <p>Milestones appear after the booking is confirmed and again after collection.</p>
        </details>
        <details>
          <summary>Why is my reference not working?</summary>
          <p>Check for spaces or mistyped characters, then try the example format DACH-7K42QX.</p>
        </details>
      </section>

      <section class="track-promo">
        <div>
          <h2>Stop chasing updates. Start seeing the route.</h2>
          <p>
            Dach tracking is designed for support teams, dispatchers, and customers who need clear
            status, route context, and proof of delivery.
          </p>
        </div>
        <RouterLink to="/business">Explore business support</RouterLink>
      </section>
    </div>
  </section>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTrackingStore } from '@/stores/tracking.store'
import TrackingSearch from '@/components/tracking/TrackingSearch.vue'
import TrackingSummary from '@/components/tracking/TrackingSummary.vue'
import TrackingTimeline from '@/components/tracking/TrackingTimeline.vue'
import TrackingMapPlaceholder from '@/components/tracking/TrackingMapPlaceholder.vue'
import ProofOfDelivery from '@/components/tracking/ProofOfDelivery.vue'
const store = useTrackingStore()
const route = useRoute()
const lookup = (reference: string) => store.lookup(reference)
onMounted(() => {
  if (route.params.reference) lookup(String(route.params.reference))
})
</script>
<style scoped>
.track-page {
  background: #fff;
}
.track-head {
  padding: 86px 0 36px;
  display: grid;
  gap: 12px;
}
.track-band {
  background: var(--surface-soft);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 34px 0;
}
.results {
  padding: 62px 0 86px;
}
.faq-block {
  max-width: 760px;
  display: grid;
  gap: 0;
  margin-top: 32px;
}
.faq-block h2 {
  margin-bottom: 18px;
}
details {
  border-top: 1px solid var(--border);
  padding: 18px 0;
}
details:last-child {
  border-bottom: 1px solid var(--border);
}
summary {
  cursor: pointer;
  font-weight: var(--font-weight-medium);
  font-size: 1.05rem;
}
details p {
  margin-top: 10px;
}
.track-promo {
  border-top: 1px solid var(--border);
  margin-top: 36px;
  padding-top: 54px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  align-items: center;
}
.track-promo p {
  margin-top: 14px;
  max-width: 680px;
}
.track-promo a {
  min-height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: var(--brand-blue);
  color: #fff;
  font-weight: var(--font-weight-medium);
  padding: 0 18px;
}
@media (max-width: 760px) {
  .track-promo {
    grid-template-columns: 1fr;
  }
}
</style>
