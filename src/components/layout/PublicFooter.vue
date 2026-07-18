<template>
  <footer class="footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <RouterLink to="/" class="brand-mark">
          <img src="/logo.jpg" alt="" aria-hidden="true" />
          Dach Courier Services
        </RouterLink>
        <p>
          Courier and logistics services across the UK, built around clear tracking and dependable
          operations.
        </p>
      </div>
      <div class="footer-col">
        <strong>Customer tools</strong>
        <RouterLink to="/track">Track shipment</RouterLink>
        <RouterLink to="/quote">Inquiry</RouterLink>
        <RouterLink to="/book">Book a courier</RouterLink>
        <RouterLink to="/login">Customer login</RouterLink>
      </div>
      <div class="footer-col">
        <strong>Services</strong>
        <RouterLink to="/services">Courier services</RouterLink>
        <RouterLink to="/business">Business logistics</RouterLink>
        <RouterLink to="/coverage">Coverage areas</RouterLink>
        <RouterLink to="/support">Support</RouterLink>
      </div>
      <div class="footer-col">
        <strong>Company</strong>
        <RouterLink to="/about">About Dach</RouterLink>
        <RouterLink to="/faq">FAQ</RouterLink>
        <RouterLink to="/privacy">Privacy</RouterLink>
        <RouterLink to="/terms">Terms</RouterLink>
      </div>
      <div class="footer-col">
        <strong>Contact</strong>
        <span>+44 20 0000 0000</span>
        <span>info@dachcourierservices.co.uk</span>
        <span>24/7 support for active courier operations</span>
        <span>United Kingdom</span>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>2026 © Dach Courier Services</span>
      <span>Built for UK courier operations</span>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  border-top: 1px solid var(--color-line);
  padding: 56px 0 28px;
  background: var(--color-soft);
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.35fr repeat(4, 1fr);
  gap: 48px;
  align-items: start;
}
.footer-brand {
  display: grid;
  gap: 16px;
}
.brand-mark {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: var(--font-weight-medium);
}
.brand-mark img {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: var(--shadow-sm);
}
.footer-col {
  display: grid;
  gap: 14px;
  color: var(--muted);
}
.footer-col strong {
  color: var(--ink);
  font-weight: var(--font-weight-medium);
}
.footer-bottom {
  margin-top: 44px;
  padding-top: 22px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  gap: 18px;
  color: var(--muted);
  font-size: 0.9rem;
}
@media (max-width: 700px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  .footer-bottom {
    display: grid;
  }
}
</style>
