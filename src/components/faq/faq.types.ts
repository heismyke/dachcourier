export interface FAQ {
  id: string
  question: string
  answer: string
  category: 'booking' | 'tracking' | 'pricing' | 'coverage' | 'business' | 'support'
}
