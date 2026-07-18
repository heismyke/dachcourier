import type { CourierService } from '@/types/service'

export const services: CourierService[] = [
  {
    slug: 'same-day-courier',
    name: 'Same Day Courier',
    summary: 'Priority UK collections and direct-to-door delivery for urgent consignments.',
    features: ['Rapid collection windows', 'Dedicated vehicle options', 'Live shipment updates'],
    startingPrice: 29,
  },
  {
    slug: 'next-day-delivery',
    name: 'Next Day Delivery',
    summary: 'Reliable next business day delivery for parcels, documents, and stock movements.',
    features: ['Tracked handover', 'Business-ready invoicing', 'Nationwide UK coverage'],
    startingPrice: 11,
  },
  {
    slug: 'business-logistics',
    name: 'Business Logistics',
    summary: 'Managed courier workflows for teams that ship repeatedly across the UK.',
    features: ['Account reporting', 'Multi-stop routing', 'Dedicated support'],
    startingPrice: 49,
  },
  {
    slug: 'multi-drop-delivery',
    name: 'Multi-Drop Delivery',
    summary: 'Planned delivery routes for several stops, customer orders, and business rounds.',
    features: ['Route planning', 'Multiple recipients', 'Status visibility'],
    startingPrice: 39,
  },
  {
    slug: 'overnight-courier',
    name: 'Overnight Courier',
    summary:
      'Overnight courier support for parcels, stock movement, and planned next-day arrivals.',
    features: ['Tracked overnight movement', 'Business delivery windows', 'Regional coverage'],
    startingPrice: 18,
  },
  {
    slug: 'document-delivery',
    name: 'Document Delivery',
    summary: 'Courier handling for contracts, records, and business-critical documents.',
    features: ['Recipient details', 'Proof workflows', 'Professional handover'],
    startingPrice: 15,
  },
  {
    slug: 'wait-and-return',
    name: 'Wait & Return',
    summary:
      'Courier waits while documents or goods are signed, exchanged, or prepared for return.',
    features: ['Return journey support', 'Timed handover', 'Clear booking notes'],
    startingPrice: 35,
  },
  {
    slug: 'international-courier',
    name: 'International Courier',
    summary: 'International courier enquiries for customers moving items beyond UK routes.',
    features: ['Route review', 'Customs preparation notes', 'Operations support'],
    startingPrice: 79,
  },
  {
    slug: 'contract-runs',
    name: 'Contract Runs',
    summary: 'Recurring courier schedules and repeat routes for commercial customers.',
    features: ['Regular collections', 'Account workflows', 'Operational reporting preparation'],
    startingPrice: 99,
  },
]
