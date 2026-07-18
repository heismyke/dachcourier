import type { QuoteOption } from '@/types/quote'

export const quoteOptions: QuoteOption[] = [
  {
    id: 'same-day',
    name: 'Same day direct',
    description: 'Fastest option with courier-to-door handling.',
    price: 68,
    eta: 'Today by 18:00',
  },
  {
    id: 'next-day',
    name: 'Next business day',
    description: 'Tracked delivery for parcels and documents.',
    price: 18,
    eta: 'Tomorrow by 12:00',
  },
  {
    id: 'scheduled',
    name: 'Scheduled collection',
    description: 'Choose a collection window that suits your team.',
    price: 24,
    eta: 'Selected window',
  },
]
