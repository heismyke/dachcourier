import type { Customer } from './customer'

export interface AuthSession {
  token: string
  user: Customer
}
