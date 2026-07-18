import { trackingResults } from '@/mocks/tracking'
import { normaliseReference } from '@/utils/tracking'

export const getMockTracking = async (reference: string) => {
  await new Promise((resolve) => setTimeout(resolve, 180))
  return (
    trackingResults.find((item) => item.reference === normaliseReference(reference)) ??
    trackingResults[0]
  )
}
