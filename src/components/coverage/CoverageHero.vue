<template>
  <section class="coverage-hero">
    <img :src="depotImage" alt="Dach courier vehicles prepared for UK delivery routes" />
    <div class="hero-shade" />
    <div class="container hero-content">
      <div>
        <h1>Courier collection and delivery across the United Kingdom</h1>
        <p>
          Enter your collection and delivery postcodes to check service availability and view
          suitable courier options.
        </p>
        <div class="hero-actions">
          <a href="#coverage-checker" class="primary-link">Check coverage</a>
          <RouterLink to="/quote" class="secondary-link">Make inquiry</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import depotImage from '@/assets/images/dach-depot-vans.jpg'
</script>

<style scoped>
.coverage-hero {
  position: relative;
  min-height: 560px;
  display: grid;
  align-items: center;
  overflow: hidden;
}
.coverage-hero img,
.hero-shade {
  position: absolute;
  inset: 0;
}
.coverage-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-shade {
  background:
    linear-gradient(90deg, rgb(7 23 44 / 86%) 0%, rgb(7 23 44 / 58%) 44%, rgb(7 23 44 / 12%) 100%),
    linear-gradient(0deg, rgb(7 23 44 / 18%), rgb(7 23 44 / 18%));
}
.hero-content {
  position: relative;
  z-index: 1;
}
.hero-content > div {
  max-width: 800px;
  color: #fff;
  display: grid;
  gap: 20px;
}
.hero-content p {
  color: rgb(255 255 255 / 82%);
  font-size: 1.1rem;
  max-width: 660px;
}
.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.primary-link,
.secondary-link {
  min-height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  padding: 0 18px;
  font-weight: 400;
}
.primary-link {
  background: var(--brand-blue);
  color: #fff;
}
.secondary-link {
  border: 1px solid rgb(255 255 255 / 36%);
  color: #fff;
}
@media (max-width: 760px) {
  .coverage-hero {
    min-height: 620px;
  }
}
</style>
