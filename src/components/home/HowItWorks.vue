<template>
  <section class="shipment-section">
    <div class="container shipment-grid">
      <div class="section-copy">
        <h2>See how one shipment moves through Dach</h2>
        <p>
          Every booking is organised around a shipment reference, route details, courier handovers
          and delivery proof so customers know what has happened and what happens next.
        </p>
        <AppButton to="/track" variant="ghost">Track a shipment</AppButton>
      </div>

      <div class="shipment-record" aria-label="Example shipment journey">
        <div class="record-head">
          <div>
            <span>Booking created</span>
            <strong>DCS-004812</strong>
          </div>
          <AppBadge tone="info">In transit</AppBadge>
        </div>

        <div class="route-card">
          <div>
            <span>Collection</span>
            <strong>London EC1A</strong>
            <small>Business reception</small>
          </div>
          <ArrowRight :size="18" />
          <div>
            <span>Destination</span>
            <strong>Manchester M1</strong>
            <small>Recipient desk</small>
          </div>
        </div>

        <div class="status-panel">
          <div class="status-title">
            <h3>Shipment status</h3>
            <span>Live milestone updates</span>
          </div>

          <ol class="milestone-list">
            <li v-for="event in events" :key="event.label" :class="event.state">
              <span class="marker">
                <Check v-if="event.state === 'complete'" :size="14" />
                <Truck v-else-if="event.state === 'current'" :size="14" />
              </span>
              <div>
                <strong>{{ event.label }}</strong>
                <p>{{ event.detail }}</p>
              </div>
              <time>{{ event.time }}</time>
            </li>
          </ol>
        </div>

        <div class="proof-card">
          <FileCheck2 :size="20" />
          <div>
            <strong>Proof of delivery</strong>
            <p>Recipient confirmation and delivery evidence become available after completion.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Check, FileCheck2, Truck } from 'lucide-vue-next'
import AppBadge from '@/components/common/AppBadge.vue'
import AppButton from '@/components/common/AppButton.vue'

const events = [
  {
    label: 'Booking confirmed',
    detail: 'Route and shipment details received.',
    time: '09:14',
    state: 'complete',
  },
  {
    label: 'Driver assigned',
    detail: 'Courier accepted the job.',
    time: '09:20',
    state: 'complete',
  },
  {
    label: 'Collected',
    detail: 'Parcel collected from London EC1A.',
    time: '09:58',
    state: 'complete',
  },
  {
    label: 'In transit',
    detail: 'Shipment travelling toward Manchester.',
    time: 'Current',
    state: 'current',
  },
  {
    label: 'Delivered',
    detail: 'Recipient confirmation pending.',
    time: 'Pending',
    state: 'pending',
  },
]
</script>

<style scoped>
.shipment-section {
  padding: 96px 0;
  background: var(--surface-soft);
}
.shipment-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 56px;
  align-items: center;
}
.section-copy {
  display: grid;
  gap: 18px;
  justify-items: start;
}
.shipment-record {
  display: grid;
  gap: 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: #fff;
  box-shadow: var(--shadow-lg);
  padding: 22px;
}
.record-head,
.route-card,
.proof-card,
.status-title,
.milestone-list li {
  display: flex;
  align-items: center;
}
.record-head {
  justify-content: space-between;
  gap: 16px;
}
.record-head > div,
.route-card > div,
.proof-card > div {
  display: grid;
  gap: 4px;
}
.record-head span,
.route-card span,
.status-title span,
.route-card small,
time {
  color: var(--muted);
}
.record-head strong {
  color: var(--ink);
  font-size: 1.2rem;
  font-weight: var(--font-weight-medium);
}
.route-card {
  justify-content: space-between;
  gap: 18px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-soft);
  padding: 18px;
}
.route-card svg {
  color: var(--brand-blue);
  flex: 0 0 auto;
}
.route-card strong,
.proof-card strong,
.milestone-list strong {
  color: var(--ink);
  font-weight: var(--font-weight-medium);
}
.status-panel {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
}
.status-title {
  justify-content: space-between;
  gap: 14px;
  border-bottom: 1px solid var(--border);
  background: #fff;
  padding: 16px 18px;
}
.status-title h3 {
  font-size: 1.05rem;
}
.milestone-list {
  display: grid;
  list-style: none;
  margin: 0;
  padding: 0;
}
.milestone-list li {
  position: relative;
  display: grid;
  grid-template-columns: 32px 1fr auto;
  gap: 14px;
  align-items: start;
  padding: 18px;
}
.milestone-list li + li {
  border-top: 1px solid var(--border);
}
.marker {
  width: 28px;
  height: 28px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: #fff;
  color: var(--muted);
}
.complete .marker {
  border-color: rgb(22 163 74 / 24%);
  background: var(--dach-success-50);
  color: var(--dach-success-700);
}
.current {
  background: var(--dach-info-50);
}
.current .marker {
  border-color: rgb(37 99 235 / 22%);
  background: #fff;
  color: var(--brand-blue);
}
.milestone-list p {
  font-size: 0.94rem;
}
time {
  font-size: 0.9rem;
}
.proof-card {
  gap: 12px;
  border: 1px solid rgb(38 115 199 / 18%);
  border-radius: var(--radius-md);
  background: var(--dach-info-50);
  padding: 16px;
}
.proof-card svg {
  color: var(--brand-blue);
}
@media (max-width: 900px) {
  .shipment-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 640px) {
  .route-card,
  .record-head,
  .status-title {
    align-items: flex-start;
    flex-direction: column;
  }
  .route-card > svg {
    transform: rotate(90deg);
  }
  .milestone-list li {
    grid-template-columns: 32px 1fr;
  }
  time {
    grid-column: 2;
  }
}
</style>
