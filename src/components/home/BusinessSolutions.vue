<template>
  <section class="business-band">
    <img :src="depotImage" alt="" aria-hidden="true" />
    <div class="business-overlay" />
    <div class="container business-grid">
      <div class="business-copy">
        <p class="eyebrow">Business logistics</p>
        <h2>Business courier solutions for organisations that deliver every day.</h2>
        <p>
          Support repeat collections, contract routes, multi-drop deliveries and dedicated logistics
          workflows through one operational platform.
        </p>
        <div class="actions">
          <AppButton to="/business">Explore Business Solutions</AppButton>
        </div>
      </div>
      <aside class="business-note" aria-label="Business accounts">
        <strong>Business Accounts</strong>
        <span>Dedicated support for repeat courier operations.</span>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppButton from '@/components/common/AppButton.vue'
import depotImage from '@/assets/images/dach-depot-vans.jpg'
</script>

<style scoped>
.business-band {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background: var(--brand-navy);
  color: #fff;
  padding: 86px 0;
}
.business-band > img,
.business-overlay {
  position: absolute;
  inset: 0;
  z-index: -2;
}
.business-band > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.03);
}
.business-overlay {
  z-index: -1;
  background:
    linear-gradient(90deg, rgb(7 23 44 / 76%) 0%, rgb(7 23 44 / 62%) 48%, rgb(7 23 44 / 48%) 100%),
    linear-gradient(0deg, rgb(7 23 44 / 28%), rgb(7 23 44 / 28%));
}
.business-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(380px, 0.72fr);
  gap: 50px;
  align-items: center;
}
.business-copy {
  max-width: 720px;
  display: grid;
  gap: 16px;
}
.eyebrow {
  color: var(--dach-sky-400);
  font-size: 0.92rem;
  font-weight: var(--font-weight-semibold);
}
.business-copy p {
  color: rgb(255 255 255 / 76%);
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 10px;
}
.business-note {
  align-self: end;
  justify-self: end;
  max-width: 330px;
  display: grid;
  gap: 5px;
  border-left: 3px solid var(--dach-sky-400);
  background: rgb(7 23 44 / 42%);
  padding: 16px 18px;
  backdrop-filter: blur(8px);
}
.business-note strong {
  color: #fff;
  font-weight: var(--font-weight-semibold);
}
.business-note span {
  color: rgb(255 255 255 / 76%);
  line-height: 1.45;
}
@media (max-width: 850px) {
  .business-band {
    padding: 70px 0;
  }
  .business-grid {
    grid-template-columns: 1fr;
  }
  .business-note {
    justify-self: start;
  }
}
</style>
