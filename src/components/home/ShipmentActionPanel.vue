<template>
  <div class="panel" aria-label="Shipment actions">
    <RouterLink class="panel-item panel-item-primary" to="/book">
      <PackagePlus />
      <strong>Book Shipment</strong>
      <span>Create a new shipment booking.</span>
    </RouterLink>
    <RouterLink class="panel-item" to="/quote">
      <Calculator />
      <strong>Get a Quote</strong>
      <span>Calculate pricing before booking.</span>
    </RouterLink>
    <RouterLink class="panel-item" to="/business">
      <BriefcaseBusiness />
      <strong>Business Logistics</strong>
      <span>Business accounts and contract delivery.</span>
    </RouterLink>
  </div>
</template>
<script setup lang="ts">
import { BriefcaseBusiness, Calculator, PackagePlus } from 'lucide-vue-next'
</script>
<style scoped>
.panel {
  width: min(100%, 1180px);
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  background: #fff;
  border: 1px solid var(--color-line);
  border-radius: 16px;
  box-shadow:
    0 28px 48px -24px rgb(13 31 60 / 42%),
    0 14px 24px -18px rgb(13 31 60 / 24%),
    0 2px 4px rgb(13 31 60 / 8%);
}
.panel-item {
  position: relative;
  min-height: 168px;
  display: grid;
  justify-items: center;
  text-align: center;
  align-content: center;
  gap: 8px;
  padding: 30px 28px;
  border-right: 1px solid var(--color-line);
  font-weight: var(--font-weight-medium);
  transition:
    background-color var(--dach-transition-base),
    box-shadow var(--dach-transition-base),
    color var(--dach-transition-base),
    transform var(--dach-transition-base);
}
.panel-item:last-child {
  border-right: 0;
}
.panel-item:hover {
  z-index: 1;
  background: var(--dach-info-50);
  box-shadow: 0 18px 38px -28px rgb(13 31 60 / 46%);
  transform: translateY(-2px);
}
.panel-item:focus-visible {
  outline: 3px solid rgb(30 95 170 / 24%);
  outline-offset: -3px;
}
.panel-item-primary::before {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  height: 3px;
  border-radius: 16px 0 0;
  background: var(--brand-blue);
}
.panel-item strong {
  margin-top: 8px;
  color: var(--ink);
  font-size: 1.08rem;
  font-weight: var(--font-weight-semibold);
  line-height: 1.2;
}
.panel-item span {
  max-width: 245px;
  color: var(--muted);
  font-size: 0.95rem;
  font-weight: var(--font-weight-regular);
  line-height: 1.45;
}
.panel-item svg {
  color: var(--brand-blue);
  width: 36px;
  height: 36px;
  stroke-width: 1.9;
}
@media (max-width: 980px) {
  .panel {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .panel-item:nth-child(2) {
    border-right: 0;
  }
  .panel-item:nth-child(3) {
    grid-column: 1 / -1;
    width: 50%;
    justify-self: center;
    border-top: 1px solid var(--color-line);
    border-right: 0;
  }
}
@media (max-width: 760px) {
  .panel {
    grid-template-columns: 1fr;
    border-radius: 14px;
    box-shadow: var(--shadow-md);
  }
  .panel-item {
    width: 100%;
    min-height: 142px;
    padding: 26px 22px;
    border-right: 0;
    border-bottom: 1px solid var(--color-line);
  }
  .panel-item:nth-child(3) {
    grid-column: auto;
    width: 100%;
    border-top: 0;
  }
  .panel-item:last-child {
    border-bottom: 0;
  }
}
</style>
