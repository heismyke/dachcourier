<template>
  <section class="availability-section">
    <div class="container">
      <div class="section-head">
        <h2>Service availability by area</h2>
        <p>
          Courier options may differ by route, collection time, shipment type and operational
          availability.
        </p>
      </div>
      <div class="availability-grid">
        <article v-for="service in services" :key="service.title">
          <component :is="service.icon" :size="22" />
          <h3>{{ service.title }}</h3>
          <p>{{ service.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  ArrowLeftRight,
  BriefcaseBusiness,
  Clock3,
  FileText,
  Globe2,
  Moon,
  Network,
  PackageCheck,
} from 'lucide-vue-next'

const services = [
  {
    icon: Clock3,
    title: 'Same Day Courier',
    text: 'Best availability in major towns, cities and supported regional routes.',
  },
  {
    icon: PackageCheck,
    title: 'Next Day Delivery',
    text: 'Available for planned UK shipments across supported collection and destination areas.',
  },
  {
    icon: Network,
    title: 'Multi-Drop Delivery',
    text: 'Available for business routes with several stops and planned route requirements.',
  },
  {
    icon: Moon,
    title: 'Overnight Courier',
    text: 'Subject to collection time, destination and operational availability.',
  },
  {
    icon: FileText,
    title: 'Document Delivery',
    text: 'Available for secure, time-sensitive business and personal documents.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Wait & Return',
    text: 'Available where a courier can remain at the destination and complete a return journey.',
  },
  {
    icon: Globe2,
    title: 'International Courier',
    text: 'Available from supported UK collection areas, subject to destination and shipment type.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Contract Runs',
    text: 'Configured individually for repeat business routes and account customers.',
  },
]
</script>

<style scoped>
.availability-section {
  padding: 92px 0;
  background: var(--surface-soft);
}
.section-head {
  max-width: 760px;
  display: grid;
  gap: 14px;
  margin-bottom: 32px;
}
.availability-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
article {
  display: grid;
  gap: 12px;
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
@media (max-width: 1080px) {
  .availability-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .availability-grid {
    grid-template-columns: 1fr;
  }
}
</style>
