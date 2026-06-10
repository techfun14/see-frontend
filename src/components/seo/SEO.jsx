import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://seeimaging.com'
const DEFAULT_TITLE = 'SEE Imaging — Refurbished GE CT Scan & MRI Systems | Bhopal India'
const DEFAULT_DESCRIPTION = 'SEE Imaging — India\'s trusted source for refurbished GE CT Scan machines (Single to 128 Slice), MRI systems, spare parts, AMC/CMC service contracts, and pan India installation support from Bhopal, Madhya Pradesh.'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

/**
 * @param {string}  title       – Page-specific title (appended with " | SEE Imaging")
 * @param {string}  description – Meta description (max ~155 chars for Google snippet)
 * @param {string}  path        – Path for canonical URL (e.g. "/products")
 * @param {string}  image       – OG image URL
 * @param {string}  type        – OG type (website, product, article)
 * @param {object|array} jsonLd – One schema object or array of schemas
 * @param {boolean} noIndex     – true to add noindex
 * @param {string}  keywords    – Comma-separated keywords
 */
export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  jsonLd,
  noIndex = false,
  keywords,
}) {
  const fullTitle = title ? `${title} | SEE Imaging` : DEFAULT_TITLE
  const canonicalUrl = `${SITE_URL}${path}`

  // Support single schema or array of schemas
  const schemas = jsonLd
    ? Array.isArray(jsonLd) ? jsonLd : [jsonLd]
    : []

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="SEE Imaging" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo tags for local SEO */}
      <meta name="geo.region" content="IN-MP" />
      <meta name="geo.placename" content="Bhopal" />

      {/* JSON-LD structured data — one <script> per schema */}
      {schemas.map((schema, i) => (
        <script key={`ld-${i}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
