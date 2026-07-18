<template>
  <section class="cities-section">
    <div class="container">
      <div class="section-head">
        <div>
          <h2>Major city coverage</h2>
          <p>Search by city, postcode prefix or region to find common service areas.</p>
        </div>
        <label class="search-field">
          <Search :size="18" />
          <input v-model="searchTerm" type="search" placeholder="Search a city or postcode area" />
        </label>
      </div>

      <div v-if="filteredGroups.length" class="region-groups">
        <section v-for="group in filteredGroups" :key="group.region" class="region-group">
          <h3>{{ group.region }}</h3>
          <div class="city-grid">
            <article v-for="location in group.locations" :key="location.id">
              <div>
                <h4>{{ location.city }}</h4>
                <p>{{ location.summary }}</p>
              </div>
              <div class="prefixes">
                <span v-for="prefix in location.postcodePrefixes" :key="prefix">{{ prefix }}</span>
              </div>
              <RouterLink :to="`/coverage/${location.slug}`">View city coverage</RouterLink>
            </article>
          </div>
        </section>
      </div>

      <div v-else class="empty-state">
        <MapPinOff :size="24" />
        <h3>No listed locations found</h3>
        <p>Try another city or postcode prefix, or request a manual route quote.</p>
        <AppButton to="/quote">Request a route quote</AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { MapPinOff, Search } from 'lucide-vue-next'
import AppButton from '@/components/common/AppButton.vue'
import type { CoverageLocation } from '@/types/coverage'

const props = defineProps<{ locations: CoverageLocation[] }>()
const searchTerm = ref('')

const groupedLocations = computed(() => {
  const groups = new Map<string, CoverageLocation[]>()
  props.locations.forEach((location) => {
    const items = groups.get(location.region) ?? []
    items.push(location)
    groups.set(location.region, items)
  })
  return Array.from(groups, ([region, locations]) => ({ region, locations }))
})

const filteredGroups = computed(() => {
  const query = searchTerm.value.trim().toLowerCase()
  if (!query) return groupedLocations.value

  return groupedLocations.value
    .map((group) => ({
      region: group.region,
      locations: group.locations.filter((location) => {
        const haystack = [
          location.city,
          location.region,
          location.nation,
          ...location.postcodePrefixes,
          ...location.services,
        ]
          .join(' ')
          .toLowerCase()
        return haystack.includes(query)
      }),
    }))
    .filter((group) => group.locations.length)
})
</script>

<style scoped>
.cities-section {
  padding: 92px 0;
  background: var(--surface-soft);
}
.section-head {
  display: grid;
  grid-template-columns: 1fr minmax(280px, 420px);
  gap: 24px;
  align-items: end;
  margin-bottom: 34px;
}
.section-head > div {
  display: grid;
  gap: 12px;
}
.search-field {
  min-height: 48px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: #fff;
  padding: 0 14px;
}
.search-field svg {
  color: var(--muted);
}
.search-field input {
  width: 100%;
  border: 0;
  outline: 0;
  font: inherit;
}
.region-groups {
  display: grid;
  gap: 36px;
}
.region-group {
  display: grid;
  gap: 16px;
}
.city-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
article {
  min-height: 230px;
  display: grid;
  gap: 14px;
  align-content: space-between;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: #fff;
  box-shadow: var(--shadow-sm);
  padding: 22px;
}
h4 {
  font-size: 1.08rem;
}
.prefixes {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}
.prefixes span {
  border-radius: 999px;
  background: var(--dach-info-50);
  color: var(--brand-blue);
  padding: 5px 8px;
  font-size: 0.84rem;
}
a {
  color: var(--brand-blue);
  font-weight: 600;
}
.empty-state {
  max-width: 520px;
  display: grid;
  gap: 12px;
  justify-items: start;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: #fff;
  padding: 24px;
}
.empty-state svg {
  color: var(--brand-blue);
}
@media (max-width: 1020px) {
  .city-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 720px) {
  .section-head,
  .city-grid {
    grid-template-columns: 1fr;
  }
}
</style>
