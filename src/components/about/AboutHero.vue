<template>
  <section class="about-hero">
    <img :src="heroImage" alt="Dach courier preparing a customer delivery" />
    <div class="hero-shade" />
    <div class="container hero-content">
      <div>
        <h1>Built to make courier delivery clearer, faster and more dependable</h1>
        <span>
          Dach Courier Services supports individuals and businesses with same-day, scheduled,
          multi-stop and specialist delivery services across the United Kingdom.
        </span>
        <div class="actions">
          <AppButton to="/services">Explore our services</AppButton>
          <AppButton to="/quote" variant="ghost">Make inquiry</AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue'
import heroImage from '@/assets/images/dach-hero-courier.jpg'
</script>

<style scoped>
.about-hero {
  position: relative;
  min-height: 620px;
  display: grid;
  align-items: center;
  overflow: hidden;
}
.about-hero img,
.hero-shade {
  position: absolute;
  inset: 0;
}
.about-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-shade {
  background:
    linear-gradient(90deg, rgb(7 23 44 / 88%), rgb(7 23 44 / 58%) 46%, rgb(7 23 44 / 12%)),
    linear-gradient(0deg, rgb(7 23 44 / 18%), rgb(7 23 44 / 18%));
}
.hero-content {
  position: relative;
  z-index: 1;
}
.hero-content > div {
  max-width: 820px;
  color: #fff;
  display: grid;
  gap: 20px;
}
.hero-content span {
  max-width: 680px;
  color: rgb(255 255 255 / 84%);
  font-size: 1.14rem;
  line-height: 1.65;
}
.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
