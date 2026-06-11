import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { PRODUCTS_CATALOG } from '../constants/products'
import { COMPANY } from '../constants/data'
import SEO from '../components/seo/SEO'
import { API_BASE } from '../constants/api'
import { buildProductSchema, buildBreadcrumbSchema } from '../components/seo/structuredData'
import './ProductDetailPage.css'

function EnquiryPanel({ productTitle, variantName }) {
  const [form, setForm]         = useState({ name:'', phone:'', email:'', city:'', message:'' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted]   = useState(false)
  const [error, setError]           = useState('')

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.phone) { setError('Name and phone are required.'); return }
    setError('')
    setSubmitting(true)
    try {
      const res = await fetch(`${API_BASE}/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, product: `${productTitle} — ${variantName}` }),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.message || 'Submission failed')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please call us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="detail-page__panel-success">
        <div className="detail-page__success-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <div className="detail-page__success-title">Enquiry Sent!</div>
        <p className="detail-page__success-sub">
          We'll call you back within 24 hours to discuss your requirement.
        </p>
      </div>
    )
  }

  return (
    <form className="detail-page__mini-form" onSubmit={handleSubmit} noValidate>
      {/* Pre-filled product name */}
      <input
        className="detail-page__mini-input detail-page__mini-input--prefilled"
        value={`${productTitle}${variantName ? ` — ${variantName}` : ''}`}
        readOnly
        tabIndex={-1}
      />
      <input
        className="detail-page__mini-input"
        name="name"
        placeholder="Your full name *"
        value={form.name}
        onChange={handleChange}
      />
      <input
        className="detail-page__mini-input"
        name="email"
        type="email"
        placeholder="Your email address"
        value={form.email}
        onChange={handleChange}
      />
      <input
        className="detail-page__mini-input"
        name="phone"
        type="tel"
        placeholder="Phone number *"
        value={form.phone}
        onChange={handleChange}
      />
      <input
        className="detail-page__mini-input"
        name="city"
        placeholder="Your city"
        value={form.city}
        onChange={handleChange}
      />
      <textarea
        className="detail-page__mini-input detail-page__mini-textarea"
        name="message"
        placeholder="Any specific requirement or question..."
        value={form.message}
        onChange={handleChange}
      />
      {error && <p style={{ fontSize: 12, color: '#FFCDD2' }}>{error}</p>}
      <button type="submit" className="detail-page__mini-submit" disabled={submitting}>
        {submitting ? 'Sending...' : 'Send Quote Request →'}
      </button>
    </form>
  )
}

export default function ProductDetailPage() {
  const { slug }    = useParams()
  const navigate    = useNavigate()
  const product     = PRODUCTS_CATALOG.find(p => p.slug === slug)

  const [activeVariantIdx, setActiveVariantIdx] = useState(0)
  const [activeImageIdx,   setActiveImageIdx]   = useState(0)

  if (!product) {
    return (
      <div className="detail-page">
        <SEO title="Product Not Found" description="The product you're looking for doesn't exist." path={`/products/${slug}`} noIndex />
        <div className="detail-page__not-found">
          <h2>Product not found</h2>
          <p>The product you're looking for doesn't exist or may have been removed.</p>
          <Link to="/products" style={{ color: 'var(--blue)', fontWeight: 600 }}>
            ← Back to all products
          </Link>
        </div>
      </div>
    )
  }

  const activeVariant  = product.variants[activeVariantIdx]
  const isMRI          = product.category === 'MRI'
  const isComingSoon   = product.badge === 'Coming Soon'
  // Build gallery: always show 2 slots (main + second photo)
  const allImages      = product.gallery.length > 0 ? product.gallery : [null, null]

  const productJsonLd = [
    buildProductSchema(product, activeVariant),
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: product.title },
    ]),
  ]

  return (
    <div className="detail-page">
      <SEO
        title={product.title}
        description={`${product.tagline}. ${product.highlights.slice(0, 3).join('. ')}. Refurbished by SEE Imaging, Bhopal. Enquire for pricing.`}
        path={`/products/${product.slug}`}
        type="product"
        keywords={`${product.title}, refurbished ${product.categoryLabel}, ${activeVariant.model}, buy ${product.category} India, SEE Imaging`}
        jsonLd={productJsonLd}
      />

      {/* Breadcrumb */}
      <div className="detail-page__breadcrumb">
        <Link to="/">Home</Link>
        <span className="detail-page__breadcrumb-sep">›</span>
        <Link to="/products">Products</Link>
        <span className="detail-page__breadcrumb-sep">›</span>
        <span className="detail-page__breadcrumb-current">{product.title}</span>
      </div>

      <div className="detail-page__body">

        {/* ── LEFT COLUMN ── */}
        <div className="detail-page__left">

          {/* Meta */}
          <div className="detail-page__meta">
            <span className="detail-page__category">{product.categoryLabel}</span>
            <span className={`detail-page__badge ${product.badgeClass}`}>{product.badge}</span>
          </div>
          <h1 className="detail-page__title">{product.title}</h1>
          <p className="detail-page__tagline">{product.tagline}</p>

          {/* Gallery */}
          <div className="detail-page__gallery">
            <div className="detail-page__main-image">
              {allImages[activeImageIdx]
                ? <img src={allImages[activeImageIdx]} alt={`${product.title} — ${activeVariant.model} refurbished medical imaging equipment`} loading="lazy" width="600" height="450" />
                : <div className="detail-page__main-placeholder">{product.label}</div>
              }
              {isComingSoon && (
                <div className="detail-page__coming-overlay">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0A2E5C" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                  </svg>
                  <div className="detail-page__coming-text">Photos Coming Soon</div>
                  <div className="detail-page__coming-sub">Enquire for details and availability</div>
                </div>
              )}
            </div>
            {/* Always show 2 thumbnail slots */}
            <div className="detail-page__thumb-row">
              {allImages.map((img, i) => (
                <div
                  key={i}
                  className={`detail-page__thumb ${i === activeImageIdx ? 'active' : ''} ${!img ? 'detail-page__thumb--placeholder' : ''}`}
                  onClick={() => setActiveImageIdx(i)}
                >
                  {img
                    ? <img src={img} alt={`${product.title} photo ${i + 1}`} loading="lazy" width="80" height="80" />
                    : <span style={{fontSize:9,color:'var(--text-muted)',fontWeight:500}}>Photo {i + 1}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Variant selector */}
          {product.variants.length > 1 && (
            <div className="detail-page__variants">
              <div className="detail-page__section-label">
                {product.category === 'CT Scanner' ? 'Slice configuration' : 'Field strength / model'}
              </div>
              <div className="detail-page__variant-tabs">
                {product.variants.map((v, i) => (
                  <button
                    key={v.name}
                    className={`detail-page__variant-tab ${i === activeVariantIdx ? 'active' : ''}`}
                    onClick={() => { setActiveVariantIdx(i); setActiveImageIdx(0); }}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
              <p className="detail-page__variant-model">
                Model: <span>{activeVariant.model}</span>
              </p>
            </div>
          )}

          {/* Specs */}
          <div className="detail-page__specs">
            <div className="detail-page__section-label">Technical specifications</div>
            <table className="detail-page__specs-table">
              <tbody>
                {Object.entries(activeVariant.specs).map(([key, val]) => (
                  <tr key={key}>
                    <td className="detail-page__spec-key">{key}</td>
                    <td className="detail-page__spec-val">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Description */}
          <div className="detail-page__description">
            <div className="detail-page__section-label">About this equipment</div>
            <p className="detail-page__desc-text">{product.description}</p>
          </div>

          {/* Highlights + Applications */}
          <div className="detail-page__two-col">
            <div className="detail-page__info-box">
              <div className="detail-page__info-title">Key highlights</div>
              <ul className="detail-page__info-list">
                {product.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
            </div>
            <div className="detail-page__info-box">
              <div className="detail-page__info-title">Clinical applications</div>
              <ul className="detail-page__info-list">
                {product.applications.map(a => <li key={a}>{a}</li>)}
              </ul>
            </div>
          </div>

          {/* Related services — internal linking for SEO */}
          <div className="detail-page__description">
            <div className="detail-page__section-label">Related services</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8 }}>
              <Link to="/services/amc" style={{ fontSize: 13, fontWeight: 600, color: 'var(--blue)', padding: '8px 16px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-alt)', textDecoration: 'none' }}>
                AMC — Annual Maintenance Contract
              </Link>
              <Link to="/services/cmc" style={{ fontSize: 13, fontWeight: 600, color: 'var(--blue)', padding: '8px 16px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-alt)', textDecoration: 'none' }}>
                CMC — Comprehensive Maintenance Contract
              </Link>
              <Link to="/services/installation-dismantling" style={{ fontSize: 13, fontWeight: 600, color: 'var(--blue)', padding: '8px 16px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-alt)', textDecoration: 'none' }}>
                Installation & Dismantling
              </Link>
              <Link to="/services/spare-parts-supply-repair" style={{ fontSize: 13, fontWeight: 600, color: 'var(--blue)', padding: '8px 16px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-alt)', textDecoration: 'none' }}>
                Spare Parts Supply & Repair
              </Link>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN ── */}
        <div className="detail-page__right">
          <div className="detail-page__enquiry-panel">
            <div className="detail-page__panel-title">Request a Quote</div>
            <p className="detail-page__panel-sub">
              Tell us your requirement. We'll call you back within 24 hours.
            </p>

            <EnquiryPanel
              productTitle={product.title}
              variantName={product.variants.length > 1 ? activeVariant.name : ''}
            />

            <hr className="detail-page__panel-divider" />

            <div className="detail-page__panel-or">or contact us directly</div>

            <div className="detail-page__alt-contacts">
              <a href={`tel:${COMPANY.phone}`} className="detail-page__alt-btn detail-page__alt-btn--phone">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                {COMPANY.phone}
              </a>
              <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="detail-page__alt-btn detail-page__alt-btn--wa">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
