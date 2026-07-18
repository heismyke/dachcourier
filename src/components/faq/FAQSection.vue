<template>
  <section class="faq-section">
    <div class="container faq-container">
      <header class="faq-header">
        <h1>Frequently asked questions</h1>
        <p>Everything you need to know before booking a courier with Dach Courier Services.</p>
      </header>

      <FAQSearch v-model="query" />

      <FAQAccordion v-if="filteredGroups.length" :groups="filteredGroups" />
      <div v-else class="empty">
        <h2>No matching questions</h2>
        <p>Try searching for booking, tracking, pricing, coverage, or support.</p>
      </div>

      <div class="support-cta">
        <div>
          <h2>Still need help?</h2>
          <p>
            Our logistics team is available to assist with bookings, deliveries and business
            enquiries.
          </p>
        </div>
        <div>
          <AppButton to="/support">Contact support</AppButton>
          <a href="tel:+442079460184" class="call-link">Call us</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import AppButton from '@/components/common/AppButton.vue'
import FAQAccordion from './FAQAccordion.vue'
import FAQSearch from './FAQSearch.vue'
import type { FAQ } from './faq.types'

const query = ref('')

const categoryLabels: Record<FAQ['category'], string> = {
  coverage: 'General',
  booking: 'Booking',
  tracking: 'Tracking',
  pricing: 'Pricing',
  business: 'Business accounts',
  support: 'Support',
}

const faqs: FAQ[] = [
  {
    id: 'collection-speed',
    category: 'coverage',
    question: 'How quickly can you collect my parcel?',
    answer:
      'We aim to collect within approximately 60 minutes across most supported UK city routes. Exact collection times depend on postcode, vehicle availability and service type.',
  },
  {
    id: 'same-day-delivery',
    category: 'coverage',
    question: 'Do you offer same-day delivery?',
    answer:
      'Yes. Same-day courier services are available on supported routes for documents, parcels, business deliveries and urgent consignments.',
  },
  {
    id: 'areas-covered',
    category: 'coverage',
    question: 'Which areas do you cover?',
    answer:
      'Dach Courier Services supports major UK cities, regional towns and planned nationwide routes across England, Scotland, Wales and selected Northern Ireland routes.',
  },
  {
    id: 'outside-london',
    category: 'coverage',
    question: 'Can I book outside London?',
    answer:
      'Yes. Dach Courier Services is built for UK-wide courier operations, not only London collections.',
  },
  {
    id: 'whole-uk',
    category: 'coverage',
    question: 'Do you deliver across the whole UK?',
    answer:
      'We support nationwide delivery planning. Some remote or specialist routes may require manual review by the operations team.',
  },
  {
    id: 'track-shipment',
    category: 'tracking',
    question: 'How do I track my shipment?',
    answer:
      'Use your Dach tracking reference on the tracking page to view collection, transit, delivery and proof milestones.',
  },
  {
    id: 'delivery-updates',
    category: 'tracking',
    question: 'Will I receive delivery updates?',
    answer:
      'Yes. The platform is designed to provide shipment status updates and customer-ready tracking references.',
  },
  {
    id: 'customer-tracking',
    category: 'tracking',
    question: 'Can my customer track the parcel?',
    answer:
      'Yes. Customers can use the tracking reference to check shipment progress without needing admin access.',
  },
  {
    id: 'book-courier',
    category: 'booking',
    question: 'How do I book a courier?',
    answer:
      'Start with the booking flow, enter collection and delivery details, choose a service and confirm the shipment.',
  },
  {
    id: 'schedule-collections',
    category: 'booking',
    question: 'Can I schedule collections?',
    answer:
      'Yes. Scheduled collections are supported for planned deliveries and business account workflows.',
  },
  {
    id: 'change-booking',
    category: 'booking',
    question: 'Can I change my booking?',
    answer:
      'Contact support as soon as possible. Changes depend on collection status, driver assignment and service availability.',
  },
  {
    id: 'pricing-calculation',
    category: 'pricing',
    question: 'How are courier prices calculated?',
    answer:
      'Prices are based on route, parcel size, weight, urgency, vehicle type and any special handling requirements.',
  },
  {
    id: 'hidden-charges',
    category: 'pricing',
    question: 'Are there any hidden charges?',
    answer:
      'The platform is designed to show clear service options. Any extra handling or specialist requirements should be confirmed before booking.',
  },
  {
    id: 'instant-inquiry',
    category: 'pricing',
    question: 'Can I get an instant inquiry response?',
    answer:
      'You can submit delivery details through the inquiry flow to preview courier options. Real-time backend pricing can be connected later.',
  },
  {
    id: 'business-accounts',
    category: 'business',
    question: 'Do you offer business accounts?',
    answer:
      'Yes. Business accounts support repeat bookings, customer areas, route visibility and operational reporting.',
  },
  {
    id: 'regular-deliveries',
    category: 'business',
    question: 'Can you support regular deliveries?',
    answer:
      'Yes. Dach Courier Services can support recurring courier workflows, scheduled routes and multi-drop operations.',
  },
  {
    id: 'contract-pricing',
    category: 'business',
    question: 'Do you offer contract pricing?',
    answer:
      'Contract pricing can be reviewed for businesses with regular shipment volumes or recurring courier needs.',
  },
  {
    id: 'insured-goods',
    category: 'support',
    question: 'Are my goods insured?',
    answer:
      'Insurance and liability terms depend on the service, goods type and declared value. Confirm requirements before booking high-value deliveries.',
  },
  {
    id: 'proof-delivery',
    category: 'support',
    question: 'What proof of delivery do I receive?',
    answer:
      'Proof of delivery can include delivery status, time, recipient details and uploaded evidence once the backend proof workflow is connected.',
  },
  {
    id: 'delivery-delayed',
    category: 'support',
    question: 'What happens if my delivery is delayed?',
    answer:
      'Tracking updates should show progress, and support can help investigate delays, route changes or failed delivery attempts.',
  },
]

const filteredGroups = computed(() => {
  const search = query.value.trim().toLowerCase()
  const filtered = search
    ? faqs.filter(
        (item) =>
          item.question.toLowerCase().includes(search) ||
          item.answer.toLowerCase().includes(search) ||
          categoryLabels[item.category].toLowerCase().includes(search),
      )
    : faqs

  return (Object.keys(categoryLabels) as FAQ['category'][])
    .map((category) => ({
      category,
      label: categoryLabels[category],
      items: filtered.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length)
})
</script>

<style scoped>
.faq-section {
  padding: 96px 0;
  background: var(--surface-soft);
}
.faq-container {
  max-width: 900px;
  display: grid;
  gap: 28px;
}
.faq-header {
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 14px;
}
.faq-header p {
  max-width: 620px;
}
.empty,
.support-cta {
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #fff;
  box-shadow: var(--shadow-sm);
  padding: 24px;
}
.support-cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.support-cta > div:first-child {
  display: grid;
  gap: 8px;
}
.support-cta > div:last-child {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.call-link {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: #fff;
  color: var(--ink);
  padding: 0 18px;
  font-weight: var(--font-weight-medium);
}
@media (max-width: 700px) {
  .faq-section {
    padding: 68px 0;
  }
  .support-cta {
    display: grid;
  }
}
</style>
