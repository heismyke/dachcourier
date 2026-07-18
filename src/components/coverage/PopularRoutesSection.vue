<template>
  <section class="routes-section">
    <div class="container">
      <div class="section-head">
        <h2>Popular courier routes</h2>
        <p>
          Common route examples help customers choose a service. Final availability and pricing
          should be confirmed through an inquiry.
        </p>
      </div>
      <div class="route-grid">
        <article v-for="route in routes" :key="route.id">
          <div class="route-line">
            <span>{{ route.from }}</span>
            <ArrowRight :size="18" />
            <span>{{ route.to }}</span>
          </div>
          <ul>
            <li v-for="service in route.services" :key="service">
              <CheckCircle2 :size="15" />
              {{ service }}
            </li>
          </ul>
          <RouterLink to="/quote">Make inquiry</RouterLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, CheckCircle2 } from 'lucide-vue-next'
import type { PopularRoute } from '@/types/coverage'

defineProps<{ routes: PopularRoute[] }>()
</script>

<style scoped>
.routes-section {
  padding: 92px 0;
  background: #fff;
}
.section-head {
  max-width: 760px;
  display: grid;
  gap: 14px;
  margin-bottom: 32px;
}
.route-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
article {
  display: grid;
  gap: 16px;
  align-content: space-between;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: #fff;
  box-shadow: var(--shadow-sm);
  padding: 22px;
}
.route-line {
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--ink);
  font-weight: 600;
}
.route-line svg {
  color: var(--brand-blue);
}
ul {
  display: grid;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--text);
}
li svg {
  color: var(--brand-blue);
}
a {
  color: var(--brand-blue);
  font-weight: 600;
}
@media (max-width: 1080px) {
  .route-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .route-grid {
    grid-template-columns: 1fr;
  }
}
</style>
