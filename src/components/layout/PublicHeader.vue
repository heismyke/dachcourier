<template>
  <header class="site-header">
    <div class="topbar">
      <RouterLink to="/" class="brand" aria-label="Dach Courier Services home">
        <img class="mark" src="/logo.jpg" alt="" aria-hidden="true" />
        <span>Dach Courier Services</span>
      </RouterLink>
      <div class="toplinks">
        <RouterLink to="/coverage">Coverage</RouterLink>
        <RouterLink to="/support">Support</RouterLink>
        <RouterLink to="/login">Customer login</RouterLink>
      </div>
      <button
        class="mobile-menu-button"
        type="button"
        :aria-expanded="isMobileMenuOpen"
        aria-controls="mobile-navigation"
        aria-label="Open navigation menu"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <X v-if="isMobileMenuOpen" :size="22" />
        <Menu v-else :size="22" />
      </button>
    </div>

    <div class="navrow">
      <nav aria-label="Primary navigation">
        <RouterLink to="/track">Track</RouterLink>
        <div class="nav-item">
          <button class="nav-trigger" type="button" aria-haspopup="true">
            Ship
            <ChevronDown :size="16" />
          </button>
          <div class="mega-menu" role="menu">
            <section class="mega-start" aria-label="Start shipping">
              <h3>Start shipping</h3>
              <RouterLink to="/quote" class="quick-action">
                <Calculator :size="20" />
                <span>Inquiry</span>
                <ChevronRight :size="18" />
              </RouterLink>
              <RouterLink to="/book" class="quick-action">
                <PackagePlus :size="20" />
                <span>Book a courier</span>
                <ChevronRight :size="18" />
              </RouterLink>
            </section>

            <section class="mega-learn" aria-label="Learn more about Dach services">
              <h3>Learn more about</h3>
              <div class="mega-columns">
                <article>
                  <h4>Documents and parcels</h4>
                  <span>Personal and business</span>
                  <p>Send urgent documents, parcels, samples, and customer orders across the UK.</p>
                  <RouterLink to="/services/same-day-courier">Explore courier services</RouterLink>
                </article>
                <article>
                  <h4>Scheduled logistics</h4>
                  <span>Business only</span>
                  <p>Plan repeat routes, multi-stop collections, and account courier workflows.</p>
                  <RouterLink to="/business">Explore business logistics</RouterLink>
                </article>
                <article>
                  <h4>Dach for business</h4>
                  <span>Frequent shippers</span>
                  <p>
                    Use account support, route visibility, and practical reporting for your team.
                  </p>
                  <RouterLink to="/support">Request account support</RouterLink>
                </article>
              </div>
            </section>
          </div>
        </div>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/business">Business</RouterLink>
      </nav>
      <div class="actions">
        <AppButton to="/book">Book shipment</AppButton>
      </div>
    </div>

    <div
      v-if="isMobileMenuOpen"
      id="mobile-navigation"
      class="mobile-panel"
      aria-label="Mobile navigation"
    >
      <div class="mobile-panel-inner">
        <RouterLink to="/track" @click="closeMobileMenu">Track</RouterLink>
        <details>
          <summary>Ship</summary>
          <RouterLink to="/quote" @click="closeMobileMenu">Get a Quote</RouterLink>
          <RouterLink to="/book" @click="closeMobileMenu">Book Shipment</RouterLink>
          <RouterLink to="/support" @click="closeMobileMenu">Shipment Requirements</RouterLink>
        </details>
        <details>
          <summary>Services</summary>
          <RouterLink to="/services/same-day-courier" @click="closeMobileMenu">
            Same Day Courier
          </RouterLink>
          <RouterLink to="/services/next-day-delivery" @click="closeMobileMenu">
            Next Day Delivery
          </RouterLink>
          <RouterLink to="/services/document-delivery" @click="closeMobileMenu">
            Document Delivery
          </RouterLink>
          <RouterLink to="/services" @click="closeMobileMenu">View All Services</RouterLink>
        </details>
        <details>
          <summary>Business</summary>
          <RouterLink to="/business" @click="closeMobileMenu">Business Accounts</RouterLink>
          <RouterLink to="/business" @click="closeMobileMenu">Contract Logistics</RouterLink>
          <RouterLink to="/support" @click="closeMobileMenu">Business Support</RouterLink>
        </details>
        <RouterLink to="/coverage" @click="closeMobileMenu">Coverage</RouterLink>
        <RouterLink to="/support" @click="closeMobileMenu">Support</RouterLink>
        <RouterLink to="/login" @click="closeMobileMenu">Customer login</RouterLink>
        <RouterLink class="mobile-primary" to="/book" @click="closeMobileMenu">
          Book shipment
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Calculator, ChevronDown, ChevronRight, Menu, PackagePlus, X } from 'lucide-vue-next'
import AppButton from '@/components/common/AppButton.vue'

const isMobileMenuOpen = ref(false)
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgb(255 255 255 / 96%);
  box-shadow: 0 1px 8px rgb(13 31 60 / 4%);
  backdrop-filter: blur(16px);
}
.topbar,
.navrow {
  width: min(var(--container), calc(100% - 40px));
  margin: auto;
}
.topbar {
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--ink);
  font-weight: var(--font-weight-semibold);
}
.mark {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: var(--shadow-sm);
}
.toplinks {
  display: flex;
  align-items: center;
  gap: 22px;
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: var(--font-weight-regular);
}
.navrow {
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav {
  display: flex;
  gap: 28px;
  align-items: center;
  color: var(--ink-soft);
  font-weight: var(--font-weight-medium);
}
nav > a,
.nav-trigger {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 0;
  border-bottom: 2px solid transparent;
  border-radius: var(--radius-xs);
  background: transparent;
  color: var(--ink-soft);
  font: inherit;
  cursor: pointer;
}
nav > a:hover,
.nav-trigger:hover,
.nav-item:hover .nav-trigger,
.nav-item:focus-within .nav-trigger {
  color: var(--brand-blue);
}
nav > a.router-link-active,
.nav-item:hover .nav-trigger,
.nav-item:focus-within .nav-trigger {
  border-bottom-color: var(--brand-blue);
}
.nav-item {
  min-height: 56px;
  display: flex;
  align-items: center;
}
.mega-menu {
  position: absolute;
  left: 50%;
  top: 120px;
  width: min(var(--container), calc(100% - 40px));
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 0;
  border: 1px solid var(--border);
  background: #fff;
  box-shadow: var(--shadow-lg);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateX(-50%) translateY(-8px);
  transition:
    opacity 160ms ease,
    transform 160ms ease,
    visibility 160ms ease;
}
.nav-item:hover .mega-menu,
.nav-item:focus-within .mega-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}
.mega-start {
  display: grid;
  align-content: start;
  gap: 18px;
  border-right: 1px solid var(--border);
  background: var(--surface-soft);
  padding: 28px;
}
.mega-menu h3 {
  font-size: 1.05rem;
  font-weight: var(--font-weight-semibold);
}
.quick-action {
  min-height: 64px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 14px;
  align-items: center;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: #fff;
  box-shadow: var(--shadow-sm);
  color: var(--ink);
  padding: 0 16px;
}
.quick-action svg {
  color: var(--brand-blue);
}
.mega-learn {
  display: grid;
  gap: 20px;
  padding: 28px;
}
.mega-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.mega-columns article {
  min-height: 220px;
  display: grid;
  align-content: start;
  gap: 14px;
  border-left: 1px solid var(--border);
  padding: 0 24px;
}
.mega-columns article:first-child {
  border-left: 0;
  padding-left: 0;
}
.mega-columns h4 {
  font-size: 1rem;
  font-weight: var(--font-weight-semibold);
}
.mega-columns span {
  color: var(--muted);
  font-weight: var(--font-weight-regular);
}
.mega-columns p {
  color: var(--text);
}
.mega-columns a {
  min-height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  border: 1px solid var(--brand-blue);
  border-radius: var(--radius-sm);
  color: var(--brand-blue);
  font-weight: var(--font-weight-semibold);
  padding: 0 14px;
  text-align: center;
}
.actions {
  display: flex;
  gap: 10px;
}
.mobile-menu-button,
.mobile-panel {
  display: none;
}
@media (max-width: 900px) {
  .toplinks,
  .navrow {
    display: none;
  }
  .mega-menu {
    display: none;
  }
  .mobile-menu-button {
    width: 44px;
    height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    background: #fff;
    color: var(--ink);
    cursor: pointer;
  }
  .mobile-menu-button:focus-visible {
    outline: 3px solid rgb(14 165 233 / 28%);
    outline-offset: 3px;
  }
  .topbar {
    min-height: 62px;
    width: min(var(--container), calc(100% - 28px));
  }
  .brand {
    min-width: 0;
    gap: 9px;
  }
  .brand span {
    overflow: hidden;
    font-size: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .mark {
    width: 34px;
    height: 34px;
    flex: 0 0 auto;
    border-radius: 7px;
  }
  .mobile-panel {
    display: block;
    border-top: 1px solid var(--border);
    background: #fff;
    box-shadow: var(--shadow-md);
  }
  .mobile-panel-inner {
    width: min(var(--container), calc(100% - 28px));
    display: grid;
    gap: 2px;
    margin: 0 auto;
    padding: 14px 0 18px;
  }
  .mobile-panel a,
  .mobile-panel summary {
    min-height: 46px;
    display: flex;
    align-items: center;
    border-radius: var(--radius-sm);
    color: var(--ink-soft);
    font-weight: var(--font-weight-medium);
    padding: 0 12px;
  }
  .mobile-panel a:hover,
  .mobile-panel summary:hover {
    background: var(--surface-soft);
    color: var(--brand-blue);
  }
  .mobile-panel details {
    border-bottom: 1px solid var(--border);
    padding-bottom: 2px;
  }
  .mobile-panel details:last-of-type {
    border-bottom: 0;
  }
  .mobile-panel summary {
    cursor: pointer;
    list-style: none;
  }
  .mobile-panel summary::-webkit-details-marker {
    display: none;
  }
  .mobile-panel details a {
    min-height: 42px;
    margin-left: 12px;
    color: var(--muted);
    font-weight: var(--font-weight-regular);
  }
  .mobile-primary {
    justify-content: center;
    margin-top: 10px;
    background: var(--brand-blue);
    color: #fff !important;
    font-weight: var(--font-weight-semibold) !important;
  }
}
@media (max-width: 390px) {
  .brand span {
    max-width: 210px;
    font-size: 0.95rem;
  }
}
</style>
