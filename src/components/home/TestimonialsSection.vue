<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="section-head">
        <div class="head-grid">
          <div>
            <h2>Trusted by businesses across the United Kingdom</h2>
            <p>
              Businesses across healthcare, legal, retail, manufacturing and professional services
              rely on Dach Courier Services for dependable deliveries.
            </p>
          </div>
          <aside class="rating-summary" aria-label="Overall customer satisfaction">
            <div class="stars" aria-label="Five star rating">
              <Star v-for="index in 5" :key="index" :size="18" />
            </div>
            <strong>4.9/5 customer satisfaction</strong>
            <span>Based on verified customer feedback</span>
          </aside>
        </div>
        <p class="demo-note">Example customer reviews shown for demonstration purposes.</p>
      </div>

      <div class="review-grid">
        <article v-for="review in reviews" :key="review.id" class="review-card">
          <Quote :size="22" class="quote-icon" />
          <div class="stars" :aria-label="`${review.rating} star review`">
            <Star v-for="index in review.rating" :key="index" :size="15" />
          </div>
          <blockquote>“{{ review.review }}”</blockquote>

          <footer>
            <div class="reviewer">
              <span class="avatar">{{ review.initials }}</span>
              <div>
                <strong>{{ review.name }}</strong>
                <span>{{ review.jobTitle }}</span>
              </div>
            </div>
            <dl>
              <div>
                <dt>Company</dt>
                <dd>{{ review.company }}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{{ review.location }}</dd>
              </div>
              <div v-if="review.service">
                <dt>Service</dt>
                <dd>{{ review.service }}</dd>
              </div>
            </dl>
          </footer>
        </article>
      </div>

      <div class="testimonial-cta">
        <h3>Ready to experience the same service?</h3>
        <div>
          <AppButton to="/book">Book a courier</AppButton>
          <AppButton to="/quote" variant="ghost">Make inquiry</AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Quote, Star } from 'lucide-vue-next'
import AppButton from '@/components/common/AppButton.vue'

interface Review {
  id: string
  name: string
  initials: string
  jobTitle: string
  company: string
  location: string
  service?: string
  rating: number
  review: string
  verified: boolean
  createdAt: string
}

const reviews: Review[] = [
  {
    id: 'review_healthcare_1',
    name: 'Sarah K.',
    initials: 'SK',
    jobTitle: 'Procurement Manager',
    company: 'NHS Partner Hospital',
    location: 'Birmingham',
    service: 'Healthcare',
    rating: 5,
    review:
      'Critical medical samples transported between hospitals. Handled professionally from collection to delivery.',
    verified: false,
    createdAt: '2026-06-18',
  },
  {
    id: 'review_legal_1',
    name: 'Martin H.',
    initials: 'MH',
    jobTitle: 'Operations Manager',
    company: 'Legal Services Firm',
    location: 'London',
    service: 'Same-Day Delivery',
    rating: 5,
    review:
      'Driver collected within 45 minutes and delivered before lunch. Real-time tracking kept our operations team updated.',
    verified: false,
    createdAt: '2026-06-10',
  },
  {
    id: 'review_retail_1',
    name: 'Avery C.',
    initials: 'AC',
    jobTitle: 'Fulfilment Lead',
    company: 'Retail Operations',
    location: 'Manchester',
    service: 'Multi-drop',
    rating: 5,
    review:
      'Dach gives our team the shipment visibility we need without slowing down the booking process.',
    verified: false,
    createdAt: '2026-05-28',
  },
  {
    id: 'review_manufacturing_1',
    name: 'Priya M.',
    initials: 'PM',
    jobTitle: 'Customer Support Manager',
    company: 'Manufacturing Supplier',
    location: 'Leeds',
    service: 'Business Account',
    rating: 5,
    review: 'The tracking flow is clear enough for customers and practical for our support desk.',
    verified: false,
    createdAt: '2026-05-16',
  },
]
</script>

<style scoped>
.testimonials-section {
  padding: 96px 0;
  background: var(--surface-soft);
}
.section-head {
  display: grid;
  gap: 18px;
  margin-bottom: 34px;
}
.head-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 40px;
  align-items: end;
}
.head-grid > div {
  max-width: 760px;
  display: grid;
  gap: 14px;
}
.rating-summary {
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #fff;
  box-shadow: var(--shadow-sm);
  padding: 20px;
  display: grid;
  gap: 8px;
}
.rating-summary strong {
  color: var(--ink);
  font-weight: var(--font-weight-semibold);
}
.rating-summary span,
.demo-note {
  color: var(--muted);
}
.stars {
  display: flex;
  gap: 4px;
  color: #d99a00;
  fill: currentColor;
}
.review-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}
.review-card {
  min-height: 430px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #fff;
  box-shadow: var(--shadow-sm);
  padding: 22px;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  gap: 16px;
}
.quote-icon {
  color: var(--brand-blue);
}
blockquote {
  margin: 0;
  color: var(--ink);
  font-size: 1.02rem;
  font-weight: var(--font-weight-regular);
  line-height: 1.55;
}
.review-card footer {
  display: grid;
  gap: 16px;
}
.reviewer {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: center;
}
.avatar {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 999px;
  background: var(--brand-navy);
  color: #fff;
  font-weight: var(--font-weight-semibold);
}
.reviewer div {
  display: grid;
  gap: 2px;
}
.reviewer strong {
  color: var(--ink);
  font-weight: var(--font-weight-semibold);
}
.reviewer span,
dt {
  color: var(--muted);
  font-weight: var(--font-weight-regular);
}
dl {
  display: grid;
  gap: 8px;
  margin: 0;
}
dl div {
  display: grid;
  gap: 2px;
}
dt {
  font-size: 0.82rem;
}
dd {
  margin: 0;
  color: var(--text);
}
.testimonial-cta {
  margin-top: 28px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: #fff;
  box-shadow: var(--shadow-sm);
  padding: 24px;
  display: flex;
  justify-content: space-between;
  gap: 18px;
  align-items: center;
}
.testimonial-cta h3 {
  font-size: 1.2rem;
}
.testimonial-cta div {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
@media (max-width: 1120px) {
  .review-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 820px) {
  .head-grid,
  .testimonial-cta {
    display: grid;
  }
  .head-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 640px) {
  .review-grid {
    display: flex;
    gap: 14px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding-bottom: 8px;
  }
  .review-card {
    min-width: 84%;
    scroll-snap-align: start;
  }
}
</style>
