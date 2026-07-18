import { quoteOptions } from '@/mocks/quotes'
import type { QuoteEnquiryRequest, QuoteRequest } from '@/types/quote'

export const getMockQuote = async (_payload: QuoteRequest) => {
  void _payload
  await new Promise((resolve) => setTimeout(resolve, 180))
  return quoteOptions
}

export const submitMockQuoteRequest = async (payload: QuoteEnquiryRequest) => {
  await new Promise((resolve) => setTimeout(resolve, 420))

  return {
    reference: `DCS-Q-${Math.floor(100000 + Math.random() * 900000)}`,
    status: 'received' as const,
    submittedAt: new Date().toISOString(),
    submittedEmail: payload.email,
  }
}
