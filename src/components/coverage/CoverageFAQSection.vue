<template>
  <section class="coverage-faq">
    <div class="container faq-grid">
      <div>
        <h2>Coverage questions</h2>
        <p>
          Answers for customers checking whether a collection and delivery route can be arranged.
        </p>
      </div>
      <div class="faq-list">
        <details v-for="item in faqs" :key="item.question">
          <summary>{{ item.question }}</summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    question: 'Do you collect outside London?',
    answer:
      'Yes. The coverage checker and city list include multiple UK regions. Availability depends on postcode, route and service type.',
  },
  {
    question: 'Do you serve rural locations?',
    answer:
      'Some regional and rural routes may be available by manual quote. Send the postcodes so operations can review the route.',
  },
  {
    question: 'Do you cover Scotland, Wales and Northern Ireland?',
    answer:
      'The platform includes selected routes for Scotland, Wales and Northern Ireland. Some routes may require manual confirmation.',
  },
  {
    question: 'Are all services available in every city?',
    answer:
      'No. Same-day, overnight, multi-drop and specialist services can vary by area, collection time and shipment requirements.',
  },
  {
    question: 'How is route pricing calculated?',
    answer:
      'Pricing depends on collection and delivery postcodes, shipment size, urgency, vehicle type and any specialist handling needs.',
  },
  {
    question: 'Can I arrange a repeat business route?',
    answer:
      'Yes. Business customers can request repeat routes, scheduled collections, multi-drop runs and account workflows.',
  },
  {
    question: 'What happens if my postcode is not listed?',
    answer:
      'Request a route quote or contact support. The city list is not a complete operational coverage database.',
  },
  {
    question: 'Can you collect from one UK nation and deliver to another?',
    answer:
      'Cross-region and cross-nation deliveries may be available depending on the route, timing and service required.',
  },
]
</script>

<style scoped>
.coverage-faq {
  padding: 92px 0;
  background: var(--surface-soft);
}
.faq-grid {
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  gap: 48px;
  align-items: start;
}
.faq-grid > div:first-child {
  display: grid;
  gap: 14px;
}
.faq-list {
  display: grid;
  gap: 10px;
}
details {
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: #fff;
  box-shadow: var(--shadow-sm);
  padding: 18px 20px;
}
summary {
  cursor: pointer;
  color: var(--ink);
  font-weight: 600;
}
details p {
  margin-top: 12px;
}
@media (max-width: 820px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }
}
</style>
