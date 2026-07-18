<template>
  <section class="nations-section">
    <div class="container">
      <div class="section-head">
        <h2>UK regions supported</h2>
        <p>
          Service availability, speed and pricing can vary by postcode, route, shipment type and
          operational capacity.
        </p>
      </div>
      <div class="nations-grid">
        <article v-for="nation in nations" :key="nation.name">
          <MapPinned :size="22" />
          <h3>{{ nation.name }}</h3>
          <p>{{ nation.text }}</p>
          <div class="city-list">
            <span v-for="city in nation.cities" :key="city">{{ city }}</span>
          </div>
          <RouterLink :to="nation.to">Explore {{ nation.name }} coverage</RouterLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPinned } from 'lucide-vue-next'

const nations = [
  {
    name: 'England',
    text: 'Courier services across major cities, regional centres and selected rural routes.',
    cities: ['London', 'Manchester', 'Birmingham', 'Leeds', 'Bristol'],
    to: '/coverage?region=england',
  },
  {
    name: 'Scotland',
    text: 'Selected same-day, next-day and planned routes from key Scottish cities.',
    cities: ['Glasgow', 'Edinburgh'],
    to: '/coverage?region=scotland',
  },
  {
    name: 'Wales',
    text: 'Courier support for Welsh business routes and cross-border deliveries.',
    cities: ['Cardiff', 'Swansea'],
    to: '/coverage?region=wales',
  },
  {
    name: 'Northern Ireland',
    text: 'Selected Belfast routes and manual quote workflows for wider availability checks.',
    cities: ['Belfast'],
    to: '/coverage?region=northern-ireland',
  },
]
</script>

<style scoped>
.nations-section {
  padding: 88px 0;
  background: #fff;
}
.section-head {
  max-width: 760px;
  display: grid;
  gap: 14px;
  margin-bottom: 32px;
}
.nations-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
article {
  display: grid;
  gap: 14px;
  align-content: start;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: #fff;
  box-shadow: var(--shadow-sm);
  padding: 22px;
}
svg {
  color: var(--brand-blue);
}
.city-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.city-list span {
  border-radius: 999px;
  background: var(--surface-soft);
  color: var(--text);
  padding: 6px 10px;
  font-size: 0.9rem;
}
a {
  color: var(--brand-blue);
  font-weight: 600;
}
@media (max-width: 1050px) {
  .nations-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .nations-grid {
    grid-template-columns: 1fr;
  }
}
</style>
