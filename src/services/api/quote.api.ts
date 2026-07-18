import { apiClient } from './client'
import { getMockQuote, submitMockQuoteRequest } from '@/services/mock/quote.mock'
import type {
  QuoteEnquiryRequest,
  QuoteOption,
  QuoteRequest,
  QuoteRequestResponse,
} from '@/types/quote'

export const quoteApi = {
  async create(payload: QuoteRequest): Promise<QuoteOption[]> {
    if (import.meta.env.VITE_USE_MOCK_API !== 'false') return getMockQuote(payload)
    const { data } = await apiClient.post<QuoteOption[]>('/quotes', payload)
    return data
  },

  async submitRequest(payload: QuoteEnquiryRequest): Promise<QuoteRequestResponse> {
    if (import.meta.env.VITE_USE_MOCK_API !== 'false') return submitMockQuoteRequest(payload)
    const { data } = await apiClient.post<QuoteRequestResponse>('/quotes', payload)
    return data
  },
}
