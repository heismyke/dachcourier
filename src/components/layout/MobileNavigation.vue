<template>
  <nav class="mobile">
    <RouterLink to="/quote">Inquiry</RouterLink><RouterLink to="/track">Track</RouterLink
    ><RouterLink to="/account">Account</RouterLink>
  </nav>
</template>
<style scoped>
.mobile {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  grid-template-columns: repeat(3, 1fr);
  background: #fff;
  border-top: 1px solid var(--color-line);
  z-index: 10;
}
.mobile a {
  text-align: center;
  padding: 12px;
  font-weight: var(--font-weight-regular);
}
@media (max-width: 760px) {
  .mobile {
    display: grid;
  }
}
</style>
