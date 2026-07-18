<template>
  <section class="hero">
    <div class="hero-media">
      <img :src="heroImage" alt="Dach courier carrying a parcel in a corporate lobby" />
      <div class="hero-shade" />
      <div class="container hero-content">
        <div class="hero-copy">
          <motion.h1 :initial="heroInitial" :animate="heroAnimate" :transition="heroHeading">
            Courier delivery with confidence.
          </motion.h1>
          <motion.p :initial="heroInitial" :animate="heroAnimate" :transition="heroCopy">
            Dach Courier Services helps you quote, book and follow urgent parcels, scheduled
            deliveries and business courier routes across supported UK areas.
          </motion.p>
          <motion.div
            :initial="heroInitial"
            :animate="heroAnimate"
            :transition="heroActions"
            class="hero-actions"
          >
            <AppButton to="/quote">Get a Quote</AppButton>
            <AppButton to="/track" variant="ghost">Track Shipment</AppButton>
          </motion.div>
        </div>
      </div>
    </div>
    <motion.div
      class="container action-panel-wrap"
      :initial="heroInitial"
      :animate="heroAnimate"
      :transition="heroPanel"
    >
      <ShipmentActionPanel />
    </motion.div>
  </section>
</template>
<script setup lang="ts">
import { motion } from 'motion-v'
import AppButton from '@/components/common/AppButton.vue'
import ShipmentActionPanel from './ShipmentActionPanel.vue'
import heroImage from '@/assets/images/dach-hero-courier.jpg'

const heroInitial = { opacity: 0, y: 18 }
const heroAnimate = { opacity: 1, y: 0 }
const heroHeading = { duration: 0.52, ease: [0.22, 0.61, 0.36, 1] }
const heroCopy = { duration: 0.48, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }
const heroActions = { duration: 0.42, delay: 0.16, ease: [0.22, 0.61, 0.36, 1] }
const heroPanel = { duration: 0.46, delay: 0.24, ease: [0.22, 0.61, 0.36, 1] }
</script>
<style scoped>
.hero {
  background: #fff;
  padding-bottom: 0;
}
.hero-media {
  position: relative;
  min-height: 590px;
  overflow: hidden;
}
.hero-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-shade {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgb(7 26 46 / 88%) 0%, rgb(7 26 46 / 60%) 38%, rgb(7 26 46 / 10%) 72%),
    linear-gradient(0deg, rgb(7 26 46 / 18%), rgb(7 26 46 / 18%));
}
.hero-content {
  position: relative;
  z-index: 1;
  min-height: 590px;
  display: grid;
  align-items: center;
  padding: 70px 0 112px;
}
.hero-copy {
  max-width: 680px;
  color: #fff;
  display: grid;
  gap: 18px;
}
.hero-copy p {
  color: rgb(255 255 255 / 86%);
  font-size: 1.15rem;
  max-width: 600px;
}
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
}
.hero-actions :deep(.app-button--ghost) {
  border-color: rgb(255 255 255 / 42%);
  color: #fff;
}
.hero-actions :deep(.app-button--ghost:hover) {
  background: rgb(255 255 255 / 10%);
}
.action-panel-wrap {
  position: relative;
  z-index: 2;
  margin-top: -72px;
}
@media (max-width: 760px) {
  .hero-media,
  .hero-content {
    min-height: 560px;
  }
  .hero-shade {
    background: linear-gradient(180deg, rgb(7 26 46 / 92%), rgb(7 26 46 / 34%));
  }
  .action-panel-wrap {
    margin-top: 28px;
  }
}
</style>
