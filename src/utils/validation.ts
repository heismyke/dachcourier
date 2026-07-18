import { z } from 'zod'

export const postcodeSchema = z.string().min(5, 'Enter a valid UK postcode')
export const emailSchema = z.string().email('Enter a valid email address')
