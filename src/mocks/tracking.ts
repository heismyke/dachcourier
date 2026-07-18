import type { TrackingResult } from '@/types/tracking'

export const trackingResults: TrackingResult[] = [
  {
    reference: 'DACH-7K42QX',
    status: 'In transit',
    service: 'Same Day Courier',
    eta: 'Today, 17:30',
    events: [
      {
        id: '1',
        label: 'Booking confirmed',
        location: 'Dach Dispatch',
        timestamp: '2026-07-14T09:35:00.000Z',
        complete: true,
      },
      {
        id: '2',
        label: 'Collected',
        location: 'Manchester',
        timestamp: '2026-07-14T10:15:00.000Z',
        complete: true,
      },
      {
        id: '3',
        label: 'In transit',
        location: 'M6 Southbound',
        timestamp: '2026-07-14T13:40:00.000Z',
        complete: true,
      },
      {
        id: '4',
        label: 'Delivered',
        location: 'London',
        timestamp: '2026-07-14T17:30:00.000Z',
        complete: false,
      },
    ],
  },
]
