export interface TrackingEvent {
  id: string
  label: string
  location: string
  timestamp: string
  complete: boolean
}

export interface TrackingResult {
  reference: string
  status: string
  service: string
  eta: string
  events: TrackingEvent[]
  proofOfDeliveryUrl?: string
}
