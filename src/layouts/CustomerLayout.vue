<template>
  <PublicHeader />
  <main class="container account">
    <aside>
      <RouterLink to="/account">Overview</RouterLink
      ><RouterLink to="/account/bookings">Bookings</RouterLink
      ><RouterLink to="/account/profile">Profile</RouterLink>
    </aside>
    <section><RouterView /></section>
  </main>
  <PublicFooter />
</template>
<script setup lang="ts">
import PublicHeader from '@/components/layout/PublicHeader.vue'
import PublicFooter from '@/components/layout/PublicFooter.vue'
</script>
<style scoped>
.account {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 32px;
  padding: 42px 0 80px;
}
aside {
  display: grid;
  align-content: start;
  gap: 8px;
}
aside a {
  padding: 10px;
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-regular);
}
@media (max-width: 760px) {
  .account {
    grid-template-columns: 1fr;
  }
}
</style>
