<template>
  <main class="sitemap-page">
    <section class="sitemap-hero">
      <div class="container">
        <h1>Website sitemap</h1>
        <p>
          Browse Dach Courier Services pages for services, coverage, business support and legal
          information.
        </p>
      </div>
    </section>

    <section class="sitemap-section">
      <div class="container sitemap-grid">
        <article v-for="group in groups" :key="group.title">
          <h2>{{ group.title }}</h2>
          <ul>
            <li v-for="link in group.links" :key="link.to">
              <RouterLink :to="link.to">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { services } from '@/mocks/services'

const cityLinks = [
  ['London', '/coverage/london'],
  ['Manchester', '/coverage/manchester'],
  ['Birmingham', '/coverage/birmingham'],
  ['Leeds', '/coverage/leeds'],
  ['Glasgow', '/coverage/glasgow'],
  ['Edinburgh', '/coverage/edinburgh'],
  ['Cardiff', '/coverage/cardiff'],
  ['Belfast', '/coverage/belfast'],
]

const groups = [
  {
    title: 'Customer tools',
    links: [
      { label: 'Track a shipment', to: '/track' },
      { label: 'Make a courier inquiry', to: '/quote' },
      { label: 'Book a courier', to: '/book' },
      { label: 'Customer support', to: '/support' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'All courier services', to: '/services' },
      ...services.map((service) => ({
        label: service.name,
        to: `/services/${service.slug}`,
      })),
    ],
  },
  {
    title: 'Coverage',
    links: [
      { label: 'UK coverage areas', to: '/coverage' },
      ...cityLinks.map(([label, to]) => ({ label, to })),
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Business courier services', to: '/business' },
      { label: 'About Dach Courier Services', to: '/about' },
      { label: 'Frequently asked questions', to: '/faq' },
      { label: 'Privacy policy', to: '/privacy' },
      { label: 'Terms of use', to: '/terms' },
    ],
  },
]
</script>

<style scoped>
.sitemap-page {
  background: #fff;
}
.sitemap-hero {
  padding: 92px 0 70px;
  border-bottom: 1px solid var(--border);
}
.sitemap-hero .container {
  display: grid;
  gap: 14px;
}
.sitemap-hero p {
  max-width: 680px;
}
.sitemap-section {
  padding: 76px 0;
  background: var(--surface-soft);
}
.sitemap-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}
article {
  display: grid;
  gap: 18px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: #fff;
  box-shadow: var(--shadow-sm);
}
h2 {
  font-size: 1.05rem;
  font-weight: var(--font-weight-medium);
}
ul {
  display: grid;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  color: var(--muted);
}
a:hover {
  color: var(--brand-blue);
}
@media (max-width: 980px) {
  .sitemap-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 640px) {
  .sitemap-grid {
    grid-template-columns: 1fr;
  }
}
</style>
