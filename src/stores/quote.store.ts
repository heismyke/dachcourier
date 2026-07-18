import { defineStore } from 'pinia'
import { quoteApi } from '@/services/api/quote.api'
import type {
  QuoteEnquiryRequest,
  QuoteOption,
  QuoteRequest,
  QuoteRequestResponse,
} from '@/types/quote'

export const useQuoteStore = defineStore('quote', {
  state: () => ({
    options: [] as QuoteOption[],
    request: null as QuoteRequest | null,
    enquiry: null as QuoteEnquiryRequest | null,
    response: null as QuoteRequestResponse | null,
    error: '',
    loading: false,
  }),
  actions: {
    async create(request: QuoteRequest) {
      this.loading = true
      this.request = request
      try {
        this.options = await quoteApi.create(request)
      } finally {
        this.loading = false
      }
    },

    async submitRequest(request: QuoteEnquiryRequest) {
      this.loading = true
      this.error = ''
      this.enquiry = request
      try {
        this.response = await quoteApi.submitRequest(request)
        return this.response
      } catch {
        this.error = 'We could not send your quote request. Please try again.'
        throw new Error(this.error)
      } finally {
        this.loading = false
      }
    },
  },
})
