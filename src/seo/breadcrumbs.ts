import type { BreadcrumbItem } from './seo.types'

export function pageBreadcrumbs(items: BreadcrumbItem[]) {
  return [{ name: 'Home', path: '/' }, ...items]
}
