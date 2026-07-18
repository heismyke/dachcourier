<template>
  <section class="values-section">
    <div class="container">
      <div class="section-head">
        <h2>How we think about service</h2>
        <p>Practical values that shape booking, tracking and customer support.</p>
      </div>
      <div class="value-grid">
        <article v-for="value in values" :key="value.title">
          <h3>{{ value.title }}</h3>
          <p>{{ value.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const values = [
  { title: 'Clarity', text: 'Customers should understand what is happening with their delivery.' },
  {
    title: 'Reliability',
    text: 'Operational information should remain consistent from collection to completion.',
  },
  {
    title: 'Responsibility',
    text: 'Every shipment should be handled with care and appropriate records.',
  },
  {
    title: 'Improvement',
    text: 'Processes and technology should continue to become easier and more useful.',
  },
]
</script>

<style scoped>
.values-section {
  padding: 96px 0;
  background: #fff;
}
.section-head {
  max-width: 720px;
  display: grid;
  gap: 12px;
  margin-bottom: 34px;
}
.value-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
article {
  border-top: 2px solid var(--brand-blue);
  padding: 22px 0 0;
  display: grid;
  gap: 10px;
}
@media (max-width: 850px) {
  .value-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .value-grid {
    grid-template-columns: 1fr;
  }
}
</style>
