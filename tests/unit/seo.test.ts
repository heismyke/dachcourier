import { describe, expect, it } from 'vitest'
import { cityRouteSeo, getSeoForPath, routeSeo, serviceRouteSeo } from '@/seo/routeSeo'

describe('route SEO configuration', () => {
  it('uses unique titles and descriptions for public indexable pages', () => {
    const indexable = routeSeo.filter((route) => route.robots !== 'noindex, nofollow')
    const titles = new Set(indexable.map((route) => route.title))
    const descriptions = new Set(indexable.map((route) => route.description))

    expect(titles.size).toBe(indexable.length)
    expect(descriptions.size).toBe(indexable.length)
  })

  it('generates service metadata and service JSON-LD', () => {
    expect(serviceRouteSeo.length).toBeGreaterThan(0)

    for (const route of serviceRouteSeo) {
      expect(route.path).toMatch(/^\/services\//)
      expect(route.title).toContain('Dach Courier Services')
      expect(route.description.length).toBeGreaterThan(80)
      expect(route.jsonLd?.some((item) => item['@type'] === 'Service')).toBe(true)
    }
  })

  it('only creates approved city SEO pages', () => {
    expect(cityRouteSeo.map((route) => route.path).sort()).toEqual([
      '/coverage/belfast',
      '/coverage/birmingham',
      '/coverage/cardiff',
      '/coverage/edinburgh',
      '/coverage/glasgow',
      '/coverage/leeds',
      '/coverage/london',
      '/coverage/manchester',
    ])
  })

  it('noindexes private and user-specific pages', () => {
    expect(getSeoForPath('/login').robots).toBe('noindex, nofollow')
    expect(getSeoForPath('/register').robots).toBe('noindex, nofollow')
    expect(getSeoForPath('/forgot-password').robots).toBe('noindex, nofollow')
    expect(getSeoForPath('/account/bookings').robots).toBe('noindex, nofollow')
    expect(getSeoForPath('/booking/confirmation/DCS-123456').robots).toBe('noindex, nofollow')
    expect(getSeoForPath('/track/DCS-123456').robots).toBe('noindex, nofollow')
  })

  it('keeps public tracking search indexable', () => {
    expect(getSeoForPath('/track').robots).toBeUndefined()
  })
})
