<template>
  <section class="section services-section">
    <div class="container">
      <div class="section-head">
        <h2>Courier services for every delivery.</h2>
        <p>
          Choose from same-day, next-day, multi-drop, document and business courier services
          designed to match the urgency and scale of your shipment.
        </p>
      </div>

      <div class="editorial">
        <article class="service-feature">
          <div class="service-copy">
            <h3>Document and parcel shipping</h3>
            <p>
              Send urgent documents, parcels, samples, and customer orders with reliable collection
              windows and milestone tracking.
            </p>
            <ul>
              <li v-for="item in parcelBenefits" :key="item">
                <FontAwesomeIcon :icon="faCircleCheck" />
                <span>{{ item }}</span>
              </li>
            </ul>
            <AppButton to="/services/same-day-courier">Explore parcel services</AppButton>
          </div>
          <img :src="parcelImage" alt="Dach courier handing over a parcel" />
        </article>

        <article class="service-feature reverse">
          <div class="service-copy">
            <h3>Managed courier logistics</h3>
            <p>
              Plan repeat routes, multi-stop collections, scheduled stock transfers, and
              account-level courier workflows across UK regions.
            </p>
            <ul>
              <li v-for="item in businessBenefits" :key="item">
                <FontAwesomeIcon :icon="faCircleCheck" />
                <span>{{ item }}</span>
              </li>
            </ul>
            <AppButton to="/business" variant="ghost">Explore business logistics</AppButton>
          </div>
          <img :src="depotImage" alt="Dach courier vans being loaded at a logistics depot" />
        </article>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import AppButton from '@/components/common/AppButton.vue'
import parcelImage from '@/assets/images/dach-parcel-handoff.jpg'
import depotImage from '@/assets/images/dach-depot-vans.jpg'

const parcelBenefits = [
  'Same-day and next-day UK options',
  'Collection and delivery notifications',
  'Proof of delivery ready',
  'Support for repeat customer bookings',
]

const businessBenefits = [
  'Dedicated support for shipping teams',
  'Coverage planning by postcode zone',
  'Driver assignment and live status updates',
  'API-ready booking and reporting flows',
]
</script>
<style scoped>
.services-section {
  padding-top: 96px;
}
.section-head {
  max-width: 780px;
  display: grid;
  gap: 12px;
  margin-bottom: 42px;
}
.editorial {
  display: grid;
  gap: 84px;
}
.service-feature {
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1fr);
  align-items: stretch;
  gap: 0;
}
.service-feature.reverse {
  grid-template-columns: minmax(0, 1fr) minmax(0, 0.92fr);
}
.service-feature.reverse .service-copy {
  order: 2;
}
.service-copy {
  position: relative;
  z-index: 1;
  align-self: center;
  margin-right: -42px;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 36px;
  display: grid;
  gap: 18px;
}
.reverse .service-copy {
  margin-right: 0;
  margin-left: -42px;
}
.service-copy h3 {
  font-size: clamp(1.8rem, 3vw, 2.55rem);
}
.service-copy ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 18px;
  margin: 0;
  padding: 22px 0 0;
  border-top: 1px solid var(--border);
  list-style: none;
}
.service-copy li {
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 10px;
  align-items: start;
  color: var(--ink-soft);
  font-weight: var(--font-weight-regular);
}
.service-copy li svg {
  width: 15px;
  height: 15px;
  margin-top: 0.35em;
  color: var(--brand-blue);
}
.service-feature img {
  width: 100%;
  height: 100%;
  min-height: 480px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}
@media (max-width: 850px) {
  .services-section {
    padding-top: 76px;
  }
  .service-feature,
  .service-feature.reverse {
    grid-template-columns: 1fr;
  }
  .service-copy,
  .reverse .service-copy {
    order: 1;
    margin: 0 0 -28px;
    padding: 24px;
  }
  .service-feature img {
    min-height: 320px;
  }
  .service-copy ul {
    grid-template-columns: 1fr;
  }
}
</style>
