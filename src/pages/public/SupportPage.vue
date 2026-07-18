<template>
  <main class="support-page">
    <section class="support-hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <h1>How can we help?</h1>
          <p>
            Find answers, track deliveries, request business support, or contact our operations
            team.
          </p>
          <div class="hero-actions">
            <AppButton to="/track">Track a shipment</AppButton>
            <AppButton to="/quote" variant="ghost">Make inquiry</AppButton>
          </div>
        </div>
        <div class="status-panel" aria-label="Support options">
          <article>
            <Clock3 :size="20" />
            <span>Operations support</span>
            <strong>24/7</strong>
          </article>
          <article>
            <Headphones :size="20" />
            <span>Customer enquiries</span>
            <strong>info@dachcourierservices.co.uk</strong>
          </article>
        </div>
      </div>
    </section>

    <section class="quick-actions-section">
      <div class="container">
        <div class="section-head">
          <h2>What do you need help with?</h2>
          <p>Choose the closest task so you can get to the right next step quickly.</p>
        </div>
        <div class="quick-grid">
          <RouterLink v-for="action in quickActions" :key="action.title" :to="action.to">
            <component :is="action.icon" :size="24" />
            <span>{{ action.title }}</span>
            <p>{{ action.text }}</p>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="search-section">
      <div class="container search-grid">
        <div>
          <h2>Search support</h2>
          <p>Search common booking, tracking, pricing and business account questions.</p>
        </div>
        <label class="search-box">
          <Search :size="18" />
          <input v-model="searchTerm" type="search" placeholder="Search help articles..." />
        </label>
      </div>
    </section>

    <section class="topics-section">
      <div class="container topics-grid">
        <div class="topics-copy">
          <h2>Popular topics</h2>
          <p>Answers to common questions customers ask before and after booking.</p>
        </div>
        <div class="topic-list">
          <article v-for="topic in filteredTopics" :key="topic.title">
            <component :is="topic.icon" :size="19" />
            <div>
              <h3>{{ topic.title }}</h3>
              <p>{{ topic.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="support-form" class="help-section">
      <div class="container help-grid">
        <div class="help-card">
          <h2>Still need help?</h2>
          <p>
            The operations team can help with bookings, delivery issues, route enquiries, account
            questions and billing support.
          </p>
          <dl>
            <div>
              <dt>Phone</dt>
              <dd>+44 20 0000 0000</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>info@dachcourierservices.co.uk</dd>
            </div>
            <div>
              <dt>Business hours</dt>
              <dd>24/7 support for active courier operations</dd>
            </div>
          </dl>
        </div>

        <form class="contact-form" @submit.prevent>
          <h2>Send a support request</h2>
          <div class="field-grid">
            <AppInput label="Name" />
            <AppInput label="Email" type="email" />
            <AppInput label="Phone" type="tel" />
            <AppInput label="Subject" />
          </div>
          <AppInput label="Booking reference" placeholder="Optional" />
          <AppTextarea label="Message" rows="6" />
          <AppButton>Send request</AppButton>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  AlertTriangle,
  BriefcaseBusiness,
  Calculator,
  Clock3,
  CreditCard,
  Headphones,
  PackageSearch,
  Search,
  Truck,
} from 'lucide-vue-next'
import AppButton from '@/components/common/AppButton.vue'
import AppInput from '@/components/common/AppInput.vue'
import AppTextarea from '@/components/common/AppTextarea.vue'

const searchTerm = ref('')

const quickActions = [
  {
    icon: PackageSearch,
    title: 'Track a shipment',
    text: 'Find the latest shipment milestones and delivery status.',
    to: '/track',
  },
  {
    icon: Truck,
    title: 'Booking help',
    text: 'Get help changing, cancelling or preparing a courier booking.',
    to: '/book',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Business accounts',
    text: 'Discuss repeat routes, account workflows and business support.',
    to: '/business',
  },
  {
    icon: Calculator,
    title: 'Pricing',
    text: 'Request a route inquiry for collection and delivery requirements.',
    to: '/quote',
  },
  {
    icon: AlertTriangle,
    title: 'Claims and issues',
    text: 'Report a delivery issue, failed delivery or missing information.',
    to: '/support#support-form',
  },
  {
    icon: Headphones,
    title: 'General enquiry',
    text: 'Contact the operations team for other support questions.',
    to: '/support#support-form',
  },
]

const topics = [
  {
    icon: PackageSearch,
    title: 'How do I track my parcel?',
    text: 'Use your tracking reference on the tracking page to view available shipment updates.',
  },
  {
    icon: Truck,
    title: 'How do I change a booking?',
    text: 'Contact support as soon as possible. Changes depend on collection status and route availability.',
  },
  {
    icon: Calculator,
    title: 'How do I get a quote?',
    text: 'Submit the route and shipment details through the inquiry flow for suitable courier options.',
  },
  {
    icon: AlertTriangle,
    title: 'Can I cancel a delivery?',
    text: 'Cancellation options depend on whether the courier has already been assigned or collected.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Business account support',
    text: 'Business customers can request repeat routes, scheduled collections and account workflows.',
  },
  {
    icon: CreditCard,
    title: 'Billing help',
    text: 'Support can review invoices, booking references and payment-related enquiries.',
  },
]

const filteredTopics = computed(() => {
  const query = searchTerm.value.trim().toLowerCase()
  if (!query) return topics
  return topics.filter((topic) => `${topic.title} ${topic.text}`.toLowerCase().includes(query))
})
</script>

<style scoped>
.support-page {
  background: #fff;
}
.support-hero {
  padding: 104px 0;
  background:
    linear-gradient(135deg, rgb(14 165 233 / 10%), transparent 34%),
    linear-gradient(180deg, #fff, var(--surface-soft));
  border-bottom: 1px solid var(--border);
}
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 48px;
  align-items: center;
}
.hero-copy {
  max-width: 760px;
  display: grid;
  gap: 18px;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.status-panel {
  display: grid;
  gap: 12px;
}
.status-panel article,
.quick-grid a,
.topic-list article,
.help-card,
.contact-form {
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: #fff;
  box-shadow: var(--shadow-sm);
}
.status-panel article {
  display: grid;
  gap: 8px;
  padding: 22px;
}
.status-panel svg,
.quick-grid svg,
.topic-list svg {
  color: var(--brand-blue);
}
.status-panel span,
dt {
  color: var(--muted);
}
.quick-actions-section,
.topics-section,
.help-section {
  padding: 92px 0;
}
.quick-actions-section,
.help-section {
  background: var(--surface-soft);
}
.section-head {
  max-width: 760px;
  display: grid;
  gap: 12px;
  margin-bottom: 30px;
}
.quick-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.quick-grid a {
  min-height: 190px;
  display: grid;
  gap: 12px;
  align-content: start;
  padding: 24px;
  color: var(--ink);
}
.quick-grid span {
  font-size: 1.1rem;
  font-weight: var(--font-weight-medium);
}
.search-section {
  padding: 54px 0;
  background: #fff;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.search-grid {
  display: grid;
  grid-template-columns: 1fr minmax(280px, 520px);
  gap: 28px;
  align-items: center;
}
.search-grid > div {
  display: grid;
  gap: 10px;
}
.search-box {
  min-height: 52px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: #fff;
  padding: 0 14px;
}
.search-box svg {
  color: var(--muted);
}
.search-box input {
  width: 100%;
  border: 0;
  outline: 0;
  font: inherit;
}
.topics-grid,
.help-grid {
  display: grid;
  grid-template-columns: 0.78fr 1.22fr;
  gap: 48px;
  align-items: start;
}
.topics-copy,
.help-card,
.contact-form {
  display: grid;
  gap: 16px;
}
.topic-list {
  display: grid;
  gap: 12px;
}
.topic-list article {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 14px;
  padding: 20px;
}
dl {
  display: grid;
  gap: 14px;
  margin: 0;
}
dd {
  margin: 3px 0 0;
  color: var(--ink);
  font-weight: var(--font-weight-medium);
}
.help-card,
.contact-form {
  padding: 26px;
}
.field-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}
@media (max-width: 960px) {
  .hero-grid,
  .quick-grid,
  .search-grid,
  .topics-grid,
  .help-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 640px) {
  .field-grid {
    grid-template-columns: 1fr;
  }
}
</style>
