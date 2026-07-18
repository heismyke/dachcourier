<template>
  <section class="map-section">
    <div class="container map-grid">
      <div class="map-panel" aria-label="Static UK coverage map placeholder">
        <span class="hub london">London</span>
        <span class="hub manchester">Manchester</span>
        <span class="hub glasgow">Glasgow</span>
        <span class="hub cardiff">Cardiff</span>
        <span class="hub belfast">Belfast</span>
      </div>
      <div class="map-copy">
        <h2>Coverage map prepared for live integration</h2>
        <p>
          This static map preview highlights regional service hubs and selected routes. It can later
          be replaced by Mapbox, Google Maps or Leaflet without changing the page structure.
        </p>
        <ul>
          <li v-for="item in mapNotes" :key="item">
            <MapPinned :size="17" />
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MapPinned } from 'lucide-vue-next'

const mapNotes = [
  'Regional service hubs',
  'Major city markers',
  'Coverage zones',
  'Selected customer routes',
]
</script>

<style scoped>
.map-section {
  padding: 92px 0;
  background: #fff;
}
.map-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  align-items: center;
}
.map-panel {
  position: relative;
  min-height: 500px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  background:
    linear-gradient(135deg, rgb(14 165 233 / 11%), transparent 36%),
    radial-gradient(circle at 64% 28%, rgb(38 115 199 / 18%), transparent 24%),
    radial-gradient(circle at 38% 78%, rgb(14 165 233 / 12%), transparent 26%), var(--surface-soft);
}
.map-panel::before {
  content: '';
  position: absolute;
  inset: 54px 128px 42px 174px;
  border: 2px solid rgb(38 115 199 / 32%);
  border-radius: 48% 52% 54% 46%;
  transform: rotate(-14deg);
}
.map-panel::after {
  content: '';
  position: absolute;
  width: 34%;
  height: 44%;
  left: 18%;
  bottom: 13%;
  border: 2px solid rgb(38 115 199 / 24%);
  border-radius: 48% 52% 42% 58%;
  transform: rotate(14deg);
}
.hub {
  position: absolute;
  z-index: 1;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: #fff;
  box-shadow: var(--shadow-sm);
  padding: 8px 11px;
  color: var(--ink);
  font-size: 0.9rem;
}
.london {
  right: 22%;
  bottom: 24%;
}
.manchester {
  right: 34%;
  top: 43%;
}
.glasgow {
  right: 40%;
  top: 18%;
}
.cardiff {
  left: 30%;
  bottom: 24%;
}
.belfast {
  left: 21%;
  top: 38%;
}
.map-copy {
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
li {
  display: flex;
  gap: 9px;
  align-items: center;
  color: var(--text);
}
li svg {
  color: var(--brand-blue);
}
@media (max-width: 860px) {
  .map-grid {
    grid-template-columns: 1fr;
  }
}
</style>
