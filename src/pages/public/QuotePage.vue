<template>
  <section class="quote-page">
    <img :src="quoteBackground" alt="Dach courier vans at a logistics depot" />
    <div class="quote-overlay" />

    <div class="container quote-layout">
      <div class="quote-intro">
        <h1>Tell us about your delivery.</h1>
        <p>
          Share the route, service need and shipment details. Dach Courier Services will review your
          request and contact you using the information provided.
        </p>
      </div>

      <form v-if="!store.response" class="quote-panel" novalidate @submit.prevent="submit">
        <div class="panel-head">
          <h2>Request a quote</h2>
          <p>Tell us about the delivery you need and our team will review the request.</p>
        </div>

        <div v-if="submitError" class="error-summary" role="alert">
          {{ submitError }}
        </div>

        <div class="form-grid">
          <div class="field">
            <label for="fullName">Full name <span aria-hidden="true">*</span></label>
            <input
              id="fullName"
              v-model="form.fullName"
              autocomplete="name"
              :aria-invalid="hasError('fullName')"
              :aria-describedby="errorId('fullName')"
              @blur="markTouched('fullName')"
              @input="validateTouched"
            />
            <p v-if="hasError('fullName')" :id="errorId('fullName')" class="field-error">
              {{ errors.fullName }}
            </p>
          </div>

          <div class="field">
            <label for="phone">Phone number <span aria-hidden="true">*</span></label>
            <input
              id="phone"
              v-model="form.phone"
              autocomplete="tel"
              inputmode="tel"
              placeholder="+44 7700 900000"
              :aria-invalid="hasError('phone')"
              :aria-describedby="errorId('phone')"
              @blur="markTouched('phone')"
              @input="validateTouched"
            />
            <p v-if="hasError('phone')" :id="errorId('phone')" class="field-error">
              {{ errors.phone }}
            </p>
          </div>

          <div class="field">
            <label for="email">Email address <span aria-hidden="true">*</span></label>
            <input
              id="email"
              v-model="form.email"
              autocomplete="email"
              inputmode="email"
              placeholder="name@example.com"
              :aria-invalid="hasError('email')"
              :aria-describedby="errorId('email')"
              @blur="markTouched('email')"
              @input="validateTouched"
            />
            <p v-if="hasError('email')" :id="errorId('email')" class="field-error">
              {{ errors.email }}
            </p>
          </div>

          <div class="field">
            <label for="customerType">Customer type <span aria-hidden="true">*</span></label>
            <select
              id="customerType"
              v-model="form.customerType"
              :aria-invalid="hasError('customerType')"
              :aria-describedby="errorId('customerType')"
              @blur="markTouched('customerType')"
              @change="validateTouched"
            >
              <option value="">Select customer type</option>
              <option value="individual">Private individual</option>
              <option value="business">Business</option>
              <option value="organisation">Public sector or organisation</option>
              <option value="unknown">Not sure</option>
            </select>
            <p v-if="hasError('customerType')" :id="errorId('customerType')" class="field-error">
              {{ errors.customerType }}
            </p>
          </div>

          <div v-if="showCompanyName" class="field field-full">
            <label for="companyName">Company or organisation name</label>
            <input
              id="companyName"
              v-model="form.companyName"
              autocomplete="organization"
              @blur="markTouched('companyName')"
              @input="validateTouched"
            />
          </div>

          <div class="field">
            <label for="collectionPostcode"
              >Collection postcode <span aria-hidden="true">*</span></label
            >
            <input
              id="collectionPostcode"
              v-model="form.collectionPostcode"
              autocomplete="postal-code"
              placeholder="EC1A 1BB"
              :aria-invalid="hasError('collectionPostcode')"
              :aria-describedby="errorId('collectionPostcode')"
              @blur="markTouched('collectionPostcode')"
              @input="validateTouched"
            />
            <p
              v-if="hasError('collectionPostcode')"
              :id="errorId('collectionPostcode')"
              class="field-error"
            >
              {{ errors.collectionPostcode }}
            </p>
          </div>

          <div class="field">
            <label for="deliveryPostcode"
              >Delivery postcode <span aria-hidden="true">*</span></label
            >
            <input
              id="deliveryPostcode"
              v-model="form.deliveryPostcode"
              autocomplete="postal-code"
              placeholder="M1 1AE"
              :aria-invalid="hasError('deliveryPostcode')"
              :aria-describedby="errorId('deliveryPostcode')"
              @blur="markTouched('deliveryPostcode')"
              @input="validateTouched"
            />
            <p
              v-if="hasError('deliveryPostcode')"
              :id="errorId('deliveryPostcode')"
              class="field-error"
            >
              {{ errors.deliveryPostcode }}
            </p>
          </div>

          <div class="field">
            <label for="serviceSlug">Service required <span aria-hidden="true">*</span></label>
            <select
              id="serviceSlug"
              v-model="form.serviceSlug"
              :aria-invalid="hasError('serviceSlug')"
              :aria-describedby="errorId('serviceSlug')"
              @blur="markTouched('serviceSlug')"
              @change="validateTouched"
            >
              <option value="">Select a service</option>
              <option v-for="service in serviceOptions" :key="service.slug" :value="service.slug">
                {{ service.label }}
              </option>
            </select>
            <p v-if="hasError('serviceSlug')" :id="errorId('serviceSlug')" class="field-error">
              {{ errors.serviceSlug }}
            </p>
          </div>

          <div class="field">
            <label for="collectionDate"
              >Preferred collection date <span aria-hidden="true">*</span></label
            >
            <input
              id="collectionDate"
              v-model="form.collectionDate"
              type="date"
              :aria-invalid="hasError('collectionDate')"
              :aria-describedby="errorId('collectionDate')"
              @blur="markTouched('collectionDate')"
              @input="validateTouched"
            />
            <p
              v-if="hasError('collectionDate')"
              :id="errorId('collectionDate')"
              class="field-error"
            >
              {{ errors.collectionDate }}
            </p>
          </div>

          <div class="field">
            <label for="preferredTime">Preferred collection time</label>
            <input
              id="preferredTime"
              v-model="form.preferredTime"
              type="time"
              @blur="markTouched('preferredTime')"
              @input="validateTouched"
            />
          </div>

          <div class="field">
            <label for="itemCount">Number of items</label>
            <input
              id="itemCount"
              v-model="form.itemCount"
              type="number"
              min="1"
              inputmode="numeric"
              placeholder="1"
              @blur="markTouched('itemCount')"
              @input="validateTouched"
            />
          </div>

          <div class="field">
            <label for="approximateWeightKg">Approximate weight</label>
            <input
              id="approximateWeightKg"
              v-model="form.approximateWeightKg"
              type="number"
              min="0"
              step="0.1"
              inputmode="decimal"
              placeholder="kg"
              @blur="markTouched('approximateWeightKg')"
              @input="validateTouched"
            />
          </div>

          <div class="field field-full">
            <label for="shipmentDescription"
              >Describe your shipment <span aria-hidden="true">*</span></label
            >
            <textarea
              id="shipmentDescription"
              v-model="form.shipmentDescription"
              placeholder="Tell us what is being transported, the approximate size or weight, any timing requirements and any special handling instructions."
              :aria-invalid="hasError('shipmentDescription')"
              :aria-describedby="errorId('shipmentDescription')"
              @blur="markTouched('shipmentDescription')"
              @input="validateTouched"
            />
            <p
              v-if="hasError('shipmentDescription')"
              :id="errorId('shipmentDescription')"
              class="field-error"
            >
              {{ errors.shipmentDescription }}
            </p>
          </div>

          <div class="field field-full">
            <label for="additionalInstructions">Additional instructions</label>
            <textarea
              id="additionalInstructions"
              v-model="form.additionalInstructions"
              class="small-textarea"
              placeholder="Access notes, recipient information, booking constraints or anything else the operations team should know."
              @blur="markTouched('additionalInstructions')"
              @input="validateTouched"
            />
          </div>

          <label class="consent field-full">
            <input
              v-model="form.consentToContact"
              type="checkbox"
              :aria-invalid="hasError('consentToContact')"
              :aria-describedby="errorId('consentToContact')"
              @blur="markTouched('consentToContact')"
              @change="validateTouched"
            />
            <span>
              I agree that Dach Courier Services may contact me about this quote request. View our
              <RouterLink to="/privacy">Privacy Policy</RouterLink>.
            </span>
          </label>
          <p
            v-if="hasError('consentToContact')"
            :id="errorId('consentToContact')"
            class="field-error field-full"
          >
            {{ errors.consentToContact }}
          </p>

          <button class="submit-button field-full" type="submit" :disabled="store.loading">
            {{ store.loading ? 'Sending request...' : 'Request Quote' }}
          </button>
        </div>
      </form>

      <div v-else class="quote-panel success-panel" role="status" aria-live="polite">
        <p class="success-label">Quote request received</p>
        <h2>Thank you. Our team will review your delivery details.</h2>
        <dl>
          <div>
            <dt>Quote reference</dt>
            <dd>{{ store.response.reference }}</dd>
          </div>
          <div>
            <dt>Submitted email</dt>
            <dd>{{ store.response.submittedEmail }}</dd>
          </div>
        </dl>
        <div class="success-actions">
          <RouterLink class="secondary-link" to="/">Return home</RouterLink>
          <RouterLink class="submit-button" to="/services">View services</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { z } from 'zod'
import quoteBackground from '@/assets/images/dach-depot-vans.jpg'
import { useQuoteStore } from '@/stores/quote.store'
import type { QuoteCustomerType, QuoteEnquiryRequest } from '@/types/quote'

type QuoteForm = {
  fullName: string
  email: string
  phone: string
  customerType: '' | QuoteCustomerType
  companyName: string
  collectionPostcode: string
  deliveryPostcode: string
  serviceSlug: string
  collectionDate: string
  preferredTime: string
  itemCount: string
  approximateWeightKg: string
  shipmentDescription: string
  additionalInstructions: string
  consentToContact: boolean
}

type QuoteField = keyof QuoteForm

const route = useRoute()
const store = useQuoteStore()

const serviceOptions = [
  { slug: 'same-day-courier', label: 'Same Day Courier' },
  { slug: 'next-day-delivery', label: 'Next Day Delivery' },
  { slug: 'multi-drop-delivery', label: 'Multi-Drop Delivery' },
  { slug: 'overnight-courier', label: 'Overnight Courier' },
  { slug: 'document-delivery', label: 'Document Delivery' },
  { slug: 'wait-and-return', label: 'Wait & Return' },
  { slug: 'international-courier', label: 'International Courier' },
  { slug: 'contract-runs', label: 'Contract Runs' },
  { slug: 'not-sure', label: 'Not sure which service I need' },
]

const serviceAliases: Record<string, string> = {
  'same-day': 'same-day-courier',
  sameday: 'same-day-courier',
  next: 'next-day-delivery',
  'next-day': 'next-day-delivery',
  multidrop: 'multi-drop-delivery',
  'multi-drop': 'multi-drop-delivery',
  overnight: 'overnight-courier',
  document: 'document-delivery',
  wait: 'wait-and-return',
  international: 'international-courier',
  contract: 'contract-runs',
}

const initialService = computed(() => {
  const queryValue = String(route.query.service ?? '')
  const normalised = serviceAliases[queryValue] ?? queryValue
  return serviceOptions.some((service) => service.slug === normalised) ? normalised : ''
})

const form = reactive<QuoteForm>({
  fullName: '',
  email: '',
  phone: '',
  customerType: '',
  companyName: '',
  collectionPostcode: '',
  deliveryPostcode: '',
  serviceSlug: initialService.value,
  collectionDate: '',
  preferredTime: '',
  itemCount: '',
  approximateWeightKg: '',
  shipmentDescription: '',
  additionalInstructions: '',
  consentToContact: false,
})

const errors = reactive<Partial<Record<QuoteField, string>>>({})
const touched = reactive<Partial<Record<QuoteField, boolean>>>({})
const submitted = ref(false)
const submitError = ref('')

const postcodePattern = /^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i
const phonePattern = /^[+()0-9\s.-]{7,24}$/

const optionalNumber = z
  .string()
  .trim()
  .optional()
  .transform((value) => (value ? Number(value) : undefined))
  .refine((value) => value === undefined || Number.isFinite(value), 'Enter a valid number')

const quoteSchema = z.object({
  fullName: z.string().trim().min(2, 'Enter your full name'),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z.string().trim().regex(phonePattern, 'Enter a valid phone number'),
  customerType: z.enum(['individual', 'business', 'organisation', 'unknown'], {
    message: 'Select a customer type',
  }),
  companyName: z.string().trim().optional(),
  collectionPostcode: z.string().trim().regex(postcodePattern, 'Enter a valid UK postcode'),
  deliveryPostcode: z.string().trim().regex(postcodePattern, 'Enter a valid UK postcode'),
  serviceSlug: z.string().trim().min(1, 'Select a service'),
  collectionDate: z.string().trim().min(1, 'Select a preferred collection date'),
  preferredTime: z.string().trim().optional(),
  itemCount: optionalNumber.refine(
    (value) => value === undefined || (Number.isInteger(value) && value > 0),
    'Enter a whole number greater than zero',
  ),
  approximateWeightKg: optionalNumber.refine(
    (value) => value === undefined || value >= 0,
    'Enter a weight of zero or more',
  ),
  shipmentDescription: z.string().trim().min(20, 'Describe the shipment in at least 20 characters'),
  additionalInstructions: z.string().trim().optional(),
  consentToContact: z.literal(true, {
    message: 'Confirm that we may contact you about this request',
  }),
})

const showCompanyName = computed(
  () => form.customerType === 'business' || form.customerType === 'organisation',
)

function syncErrors() {
  const result = quoteSchema.safeParse(form)

  Object.keys(errors).forEach((field) => {
    delete errors[field as QuoteField]
  })

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      const field = issue.path[0] as QuoteField | undefined
      if (field && !errors[field]) errors[field] = issue.message
    })
  }

  return result
}

function markTouched(field: QuoteField) {
  touched[field] = true
  syncErrors()
}

function validateTouched() {
  if (Object.values(touched).some(Boolean) || submitted.value) syncErrors()
}

function hasError(field: QuoteField) {
  return Boolean(errors[field] && (touched[field] || submitted.value))
}

function errorId(field: QuoteField) {
  return hasError(field) ? `${field}-error` : undefined
}

function toRequest(payload: z.infer<typeof quoteSchema>): QuoteEnquiryRequest {
  return {
    fullName: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    customerType: payload.customerType,
    companyName: payload.companyName || undefined,
    collectionPostcode: payload.collectionPostcode.toUpperCase(),
    deliveryPostcode: payload.deliveryPostcode.toUpperCase(),
    serviceSlug: payload.serviceSlug,
    collectionDate: payload.collectionDate,
    preferredTime: payload.preferredTime || undefined,
    itemCount: payload.itemCount,
    approximateWeightKg: payload.approximateWeightKg,
    shipmentDescription: payload.shipmentDescription,
    additionalInstructions: payload.additionalInstructions || undefined,
    consentToContact: payload.consentToContact,
  }
}

async function submit() {
  submitted.value = true
  submitError.value = ''
  const result = syncErrors()

  if (!result.success) {
    submitError.value = 'Please review the highlighted fields before sending your quote request.'
    return
  }

  try {
    await store.submitRequest(toRequest(result.data))
  } catch {
    submitError.value = store.error || 'We could not send your quote request. Please try again.'
  }
}
</script>

<style scoped>
.quote-page {
  position: relative;
  min-height: calc(100dvh - 116px);
  overflow: hidden;
  background: var(--dach-navy-950);
  padding: 76px 0;
}

.quote-page > img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.quote-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgb(7 23 44 / 74%) 0%, rgb(7 23 44 / 48%) 46%, rgb(7 23 44 / 32%) 100%),
    linear-gradient(0deg, rgb(7 23 44 / 22%), rgb(7 23 44 / 22%));
}

.quote-layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(520px, 600px);
  gap: 64px;
  align-items: start;
}

.quote-intro {
  max-width: 560px;
  color: var(--dach-white);
  padding-top: 64px;
}

.quote-intro h1 {
  font-size: clamp(3rem, 6vw, 5.2rem);
  line-height: 0.98;
  color: var(--dach-white);
}

.quote-intro > p:last-child {
  max-width: 520px;
  margin-top: 22px;
  color: rgb(255 255 255 / 82%);
  font-size: 1.1rem;
}

.quote-panel {
  width: min(100%, 600px);
  justify-self: end;
  background: var(--dach-white);
  border: 1px solid rgb(255 255 255 / 70%);
  border-radius: var(--dach-radius-md);
  box-shadow: 0 18px 50px rgb(7 23 44 / 18%);
  padding: 34px;
}

.panel-head {
  margin-bottom: 26px;
}

.panel-head h2 {
  color: var(--dach-blue-700);
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.08;
}

.panel-head p {
  max-width: 430px;
  margin-top: 10px;
  color: var(--dach-text-secondary);
}

.error-summary {
  margin-bottom: 18px;
  border: 1px solid var(--dach-danger-500);
  border-radius: var(--dach-radius-sm);
  background: var(--dach-danger-50);
  color: var(--dach-danger-700);
  padding: 12px 14px;
  font-weight: var(--font-weight-medium);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.field {
  display: grid;
  gap: 8px;
}

.field-full {
  grid-column: 1 / -1;
}

.field label,
.consent {
  color: var(--dach-text-primary);
  font-weight: var(--font-weight-semibold);
}

.field label span {
  color: var(--dach-danger-500);
}

.field input,
.field select,
.field textarea {
  min-height: 50px;
  width: 100%;
  border: 1px solid var(--dach-border-default);
  border-radius: var(--dach-radius-sm);
  background: var(--dach-white);
  padding: 0 15px;
  color: var(--dach-text-primary);
  font: inherit;
  font-weight: var(--font-weight-regular);
  transition:
    border-color var(--dach-transition-fast),
    box-shadow var(--dach-transition-fast);
}

.field textarea {
  min-height: 130px;
  padding: 14px 15px;
  resize: vertical;
}

.field textarea.small-textarea {
  min-height: 96px;
}

.field input::placeholder,
.field textarea::placeholder {
  color: var(--dach-grey-500);
  opacity: 0.62;
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  border-color: var(--dach-blue-600);
  box-shadow: 0 0 0 3px rgb(30 95 170 / 12%);
  outline: none;
}

.field input[aria-invalid='true'],
.field select[aria-invalid='true'],
.field textarea[aria-invalid='true'] {
  border-color: var(--dach-danger-500);
  box-shadow: 0 0 0 3px rgb(220 38 38 / 9%);
}

.field-error {
  margin: 0;
  color: var(--dach-danger-700);
  font-size: 0.9rem;
}

.consent {
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 12px;
  align-items: start;
  font-weight: var(--font-weight-regular);
  line-height: 1.45;
}

.consent input {
  width: 20px;
  height: 20px;
  margin-top: 2px;
  accent-color: var(--dach-blue-700);
}

.consent a {
  color: var(--dach-blue-700);
  font-weight: var(--font-weight-semibold);
  text-decoration: underline;
}

.submit-button {
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: var(--dach-radius-sm);
  background: var(--dach-blue-700);
  color: var(--dach-white);
  padding: 0 18px;
  font: inherit;
  font-weight: var(--font-weight-semibold);
  text-align: center;
  cursor: pointer;
  transition:
    background var(--dach-transition-fast),
    transform var(--dach-transition-fast);
}

.submit-button:hover {
  background: var(--dach-navy-800);
}

.submit-button:focus-visible,
.secondary-link:focus-visible,
.consent input:focus-visible {
  outline: 3px solid rgb(56 189 248 / 35%);
  outline-offset: 3px;
}

.submit-button:disabled {
  cursor: not-allowed;
  opacity: 0.72;
}

.success-panel {
  display: grid;
  gap: 22px;
}

.success-label {
  color: var(--dach-success-700);
  font-weight: var(--font-weight-semibold);
}

.success-panel h2 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.08;
}

.success-panel dl {
  display: grid;
  gap: 12px;
  margin: 0;
  border-top: 1px solid var(--dach-border-light);
  border-bottom: 1px solid var(--dach-border-light);
  padding: 18px 0;
}

.success-panel dt {
  color: var(--dach-text-muted);
  font-weight: var(--font-weight-regular);
}

.success-panel dd {
  margin: 4px 0 0;
  color: var(--dach-text-primary);
  font-weight: var(--font-weight-semibold);
}

.success-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.secondary-link {
  display: inline-flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--dach-border-default);
  border-radius: var(--dach-radius-sm);
  color: var(--dach-text-primary);
  padding: 0 18px;
  font-weight: var(--font-weight-semibold);
}

@media (max-width: 1040px) {
  .quote-layout {
    grid-template-columns: 1fr;
    gap: 34px;
  }

  .quote-intro {
    padding-top: 0;
  }

  .quote-panel {
    justify-self: start;
  }
}

@media (max-width: 680px) {
  .quote-page {
    padding: 36px 0;
  }

  .quote-overlay {
    background:
      linear-gradient(180deg, rgb(7 23 44 / 76%), rgb(7 23 44 / 52%)),
      linear-gradient(0deg, rgb(7 23 44 / 20%), rgb(7 23 44 / 20%));
  }

  .quote-intro h1 {
    font-size: clamp(2.5rem, 15vw, 3.6rem);
  }

  .quote-panel {
    padding: 24px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .success-actions,
  .success-actions .submit-button,
  .secondary-link {
    width: 100%;
  }
}
</style>
