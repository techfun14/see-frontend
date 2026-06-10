const SITE_URL = 'https://seeimaging.com'
const ORG_NAME = 'SEE Imaging'
const ORG_PHONE = '+91-9424482233'
const ORG_EMAIL = 'info@seeimaging.com'

// ── Organization / LocalBusiness (homepage) ──────────────
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#organization`,
  name: ORG_NAME,
  legalName: 'SEE Imaging Pvt Ltd',
  description: 'Trusted experts in refurbished GE CT Scan and MRI systems — sales, AMC/CMC contracts, spare parts, and pan India service support from Bhopal.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-see-imaging.svg`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: ORG_PHONE,
  email: ORG_EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bhopal',
    addressRegion: 'Madhya Pradesh',
    postalCode: '462001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.2599,
    longitude: 77.4126,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:30',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
  priceRange: '$$',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: ORG_PHONE,
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
}

// ── WebSite schema (homepage — enables sitelinks searchbox) ──
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: ORG_NAME,
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
}

// ── Product schema (product detail pages) ────────────────
export function buildProductSchema(product, variant) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.title}${variant ? ` — ${variant.name}` : ''}`,
    description: product.tagline || product.description,
    brand: { '@type': 'Brand', name: 'GE Healthcare' },
    category: product.category,
    url: `${SITE_URL}/products/${product.slug}`,
    image: product.mainImage ? `${SITE_URL}${product.mainImage}` : `${SITE_URL}/og-image.jpg`,
    offers: {
      '@type': 'Offer',
      availability: product.badge === 'Coming Soon'
        ? 'https://schema.org/PreOrder'
        : 'https://schema.org/InStock',
      priceCurrency: 'INR',
      price: undefined,
      priceValidUntil: undefined,
      seller: {
        '@type': 'Organization',
        name: ORG_NAME,
      },
    },
  }
}

// ── Service schema (service detail pages) ─────────────────
export function buildServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDesc || service.description,
    serviceType: service.title,
    provider: {
      '@type': 'LocalBusiness',
      name: ORG_NAME,
      telephone: ORG_PHONE,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bhopal',
        addressRegion: 'Madhya Pradesh',
        addressCountry: 'IN',
      },
    },
    areaServed: { '@type': 'Country', name: 'India' },
    url: `${SITE_URL}/services/${service.slug}`,
  }
}

// ── ItemList schema (listing pages — products/services) ───
export function buildItemListSchema(items, listName) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.title,
      url: `${SITE_URL}/${item.slug.includes('/') ? item.slug : `products/${item.slug}`}`,
    })),
  }
}

// ── Breadcrumb schema (detail pages) ──────────────────────
export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${SITE_URL}${item.url}` : undefined,
    })),
  }
}

// ── FAQ schema (service pages, about) ─────────────────────
export function buildFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
