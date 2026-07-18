import { describe, expect, it } from 'vitest'
import { formatCurrency } from '@/utils/currency'

describe('formatCurrency', () => {
  it('formats GBP values', () => {
    expect(formatCurrency(18)).toContain('18.00')
  })
})
