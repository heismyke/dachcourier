<template>
  <section class="intro-section">
    <div class="container intro-grid">
      <img :src="image" alt="Courier handing a parcel to a customer" />
      <div class="intro-copy">
        <h2>A courier service built around dependable operations</h2>
        <p>
          Dach Courier Services helps customers move documents, parcels and business-critical
          shipments with clear booking, tracking and delivery workflows.
        </p>
        <p>
          Our service is designed around practical communication, professional handling and
          visibility throughout the delivery journey.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import image from '@/assets/images/dach-parcel-handoff.jpg'
</script>

<style scoped>
.intro-section {
  padding: 96px 0;
  background: #fff;
}
.intro-grid {
  display: grid;
  grid-template-columns: 1fr 0.88fr;
  gap: 54px;
  align-items: center;
}
img {
  width: 100%;
  min-height: 520px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}
.intro-copy {
  display: grid;
  gap: 18px;
}
@media (max-width: 850px) {
  .intro-grid {
    grid-template-columns: 1fr;
  }
  img {
    min-height: 340px;
  }
}
</style>
