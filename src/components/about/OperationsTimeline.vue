<template>
  <section class="timeline-section">
    <div class="container">
      <div class="section-head">
        <h2>From booking to proof of delivery</h2>
        <p>
          Each shipment moves through a clear operational path from route details to confirmation.
        </p>
      </div>
      <div class="timeline">
        <article v-for="(step, index) in steps" :key="step.title">
          <span>{{ index + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Enter route and shipment details',
    text: 'The customer provides collection, delivery and parcel information.',
  },
  {
    title: 'Select a courier service',
    text: 'An appropriate same-day, scheduled or specialist option is selected.',
  },
  {
    title: 'Assign and track delivery',
    text: 'The delivery is prepared for assignment and milestone tracking.',
  },
  {
    title: 'Record confirmation and proof',
    text: 'Delivery completion and proof details are attached to the shipment record.',
  },
]
</script>

<style scoped>
.timeline-section {
  padding: 96px 0;
  background: #fff;
}
.section-head {
  max-width: 720px;
  display: grid;
  gap: 12px;
  margin-bottom: 40px;
}
.timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
article {
  position: relative;
  display: grid;
  gap: 12px;
  background: #fff;
}
span {
  position: relative;
  z-index: 1;
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: #fff;
  color: var(--brand-blue);
  box-shadow: var(--shadow-sm);
  font-weight: var(--font-weight-medium);
}
@media (max-width: 800px) {
  .timeline {
    grid-template-columns: 1fr;
  }
  article {
    grid-template-columns: 50px 1fr;
  }
  article p {
    grid-column: 2;
  }
}
</style>
