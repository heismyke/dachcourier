import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue'
import CustomerLayout from '@/layouts/CustomerLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import { requireCustomerAuth } from './guards'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: PublicLayout,
      children: [
        { path: '', name: 'home', component: () => import('@/pages/public/HomePage.vue') },
        { path: 'services', component: () => import('@/pages/public/ServicesPage.vue') },
        {
          path: 'services/:slug',
          component: () => import('@/pages/public/ServiceDetailsPage.vue'),
        },
        { path: 'quote', component: () => import('@/pages/public/QuotePage.vue') },
        { path: 'book', component: () => import('@/pages/public/BookingPage.vue') },
        {
          path: 'booking/confirmation/:reference',
          component: () => import('@/pages/public/BookingConfirmationPage.vue'),
        },
        { path: 'track', component: () => import('@/pages/public/TrackPage.vue') },
        { path: 'track/:reference', component: () => import('@/pages/public/TrackPage.vue') },
        { path: 'business', component: () => import('@/pages/public/BusinessSolutionsPage.vue') },
        { path: 'coverage', component: () => import('@/pages/public/CoveragePage.vue') },
        {
          path: 'coverage/:citySlug',
          component: () => import('@/pages/public/CoverageCityPage.vue'),
        },
        { path: 'about', component: () => import('@/pages/public/AboutPage.vue') },
        { path: 'support', component: () => import('@/pages/public/SupportPage.vue') },
        { path: 'contact', redirect: '/support' },
        { path: 'faq', component: () => import('@/pages/public/FaqPage.vue') },
        { path: 'sitemap', component: () => import('@/pages/public/SitemapPage.vue') },
        { path: 'privacy', component: () => import('@/pages/public/PrivacyPage.vue') },
        { path: 'terms', component: () => import('@/pages/public/TermsPage.vue') },
      ],
    },
    {
      path: '/login',
      component: AuthLayout,
      children: [{ path: '', component: () => import('@/pages/public/CustomerLoginPage.vue') }],
    },
    {
      path: '/register',
      component: AuthLayout,
      children: [{ path: '', component: () => import('@/pages/public/RegisterPage.vue') }],
    },
    {
      path: '/forgot-password',
      component: AuthLayout,
      children: [{ path: '', component: () => import('@/pages/public/ForgotPasswordPage.vue') }],
    },
    {
      path: '/account',
      component: CustomerLayout,
      beforeEnter: requireCustomerAuth,
      children: [
        { path: '', component: () => import('@/pages/customer/CustomerDashboardPage.vue') },
        { path: 'bookings', component: () => import('@/pages/customer/CustomerBookingsPage.vue') },
        {
          path: 'bookings/:id',
          component: () => import('@/pages/customer/CustomerBookingDetailsPage.vue'),
        },
        { path: 'profile', component: () => import('@/pages/customer/CustomerProfilePage.vue') },
      ],
    },
    { path: '/404', component: () => import('@/pages/public/NotFoundPage.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/404' },
  ],
})

export default router
