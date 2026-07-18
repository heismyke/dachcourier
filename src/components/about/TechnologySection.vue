<template>
  <section class="technology-section">
    <div class="container technology-grid">
      <div class="technology-copy">
        <h2>Clear delivery information at every stage</h2>
        <p>
          The platform is being designed to support booking references, shipment milestones,
          customer tracking, operations updates, recipient information, electronic proof of
          delivery, business reporting preparation and API-ready workflows.
        </p>
      </div>
      <div class="tracking-preview" aria-label="Shipment tracking interface preview">
        <div class="preview-head">
          <span>DACH-7K42QX</span>
          <strong>In transit</strong>
        </div>
        <ol>
          <li v-for="item in milestones" :key="item">
            <CheckCircle2 :size="18" />
            <span>{{ item }}</span>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CheckCircle2 } from 'lucide-vue-next'

const milestones = [
  'Booking reference created',
  'Collection window confirmed',
  'Courier assigned',
  'Shipment in transit',
  'Proof of delivery prepared',
]
</script>

<style scoped>
.technology-section {
  padding: 96px 0;
  background: var(--brand-navy);
  color: #fff;
}
.technology-grid {
  display: grid;
  grid-template-columns: 0.85fr 1fr;
  gap: 54px;
  align-items: center;
}
.technology-copy {
  display: grid;
  gap: 18px;
}
.technology-copy p {
  color: rgb(255 255 255 / 76%);
}
.tracking-preview {
  border: 1px solid rgb(255 255 255 / 16%);
  border-radius: var(--radius-lg);
  background: rgb(255 255 255 / 8%);
  box-shadow: var(--shadow-lg);
  padding: 26px;
  display: grid;
  gap: 22px;
}
.preview-head {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  border-bottom: 1px solid rgb(255 255 255 / 16%);
  padding-bottom: 18px;
}
.preview-head span {
  color: var(--brand-cyan);
}
ol {
  display: grid;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}
li {
  display: flex;
  gap: 10px;
  align-items: center;
  color: rgb(255 255 255 / 82%);
}
svg {
  color: var(--brand-cyan);
}
@media (max-width: 850px) {
  .technology-grid {
    grid-template-columns: 1fr;
  }
}
</style>
