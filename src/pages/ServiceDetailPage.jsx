import { useParams, Link } from 'react-router-dom'
import { SERVICES_CATALOG } from '../constants/services'
import { COMPANY } from '../constants/data'
import Icons from '../constants/icons'
import ServiceScheduleForm from '../components/ui/ServiceScheduleForm'
import SEO from '../components/seo/SEO'
import { buildServiceSchema, buildBreadcrumbSchema } from '../components/seo/structuredData'
import './ServiceDetailPage.css'

// ── AMC vs CMC comparison helper ──────────────
function ContractCompareBanner({ currentSlug }) {
  const isAmc = currentSlug === 'amc'
  const isCmc = currentSlug === 'cmc'
  if (!isAmc && !isCmc) return null
  return (
    <div className="svc-detail__compare-banner">
      <span className="svc-detail__compare-label">Compare contracts:</span>
      <Link to="/services/amc"
        className={`svc-detail__compare-btn ${isAmc ? 'svc-detail__compare-btn--active' : ''}`}>
        AMC — Labour &amp; visits included
      </Link>
      <Link to="/services/cmc"
        className={`svc-detail__compare-btn ${isCmc ? 'svc-detail__compare-btn--active' : ''}`}>
        CMC — Full coverage incl. parts
      </Link>
    </div>
  )
}

// ── What's included checklist (for contracts) ──
function IncludedList({ items }) {
  return (
    <ul className="svc-detail__included-list">
      {items.map(({ included, item }) => (
        <li key={item} className={`svc-detail__included-item ${included ? 'svc-detail__included-item--yes' : 'svc-detail__included-item--no'}`}>
          <span className={`svc-detail__included-tick ${included ? 'svc-detail__included-tick--yes' : 'svc-detail__included-tick--no'}`}>
            {included ? '✓' : '–'}
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

// ── Covered items checklist ────────────────────
function CoveredList({ items }) {
  return (
    <ul className="svc-detail__check-list">
      {items.map(item => (
        <li key={item}>
          <span className="svc-detail__check-icon svc-detail__check-icon--yes">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

// ── Process steps ──────────────────────────────
function ProcessSteps({ steps }) {
  return (
    <div className="svc-detail__process">
      {steps.map(({ step, title, desc }) => (
        <div key={step} className="svc-detail__step">
          <div className="svc-detail__step-num">{step}</div>
          <div className="svc-detail__step-content">
            <div className="svc-detail__step-title">{title}</div>
            <p className="svc-detail__step-desc">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Contact alternatives in panel ─────────────
function AltContacts() {
  return (
    <>
      <div className="svc-detail__panel-or">or contact us directly</div>
      <div className="svc-detail__alt-contacts">
        <a href={`tel:${COMPANY.phone}`} className="svc-detail__alt-btn svc-detail__alt-btn--phone">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          {COMPANY.phone}
        </a>
        <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" className="svc-detail__alt-btn svc-detail__alt-btn--wa">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </>
  )
}

// ── MAIN PAGE ──────────────────────────────────
export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service  = SERVICES_CATALOG.find(s => s.slug === slug)

  if (!service) {
    return (
      <div className="svc-detail">
        <SEO title="Service Not Found" description="The service you're looking for doesn't exist." path={`/services/${slug}`} noIndex />
        <div className="svc-detail__not-found">
          <h2>Service not found</h2>
          <p>The service you're looking for doesn't exist.</p>
          <Link to="/services" style={{ color: 'var(--blue)', fontWeight: 600 }}>← Back to all services</Link>
        </div>
      </div>
    )
  }

  const serviceJsonLd = [
    buildServiceSchema(service),
    buildBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: service.title },
    ]),
  ]

  return (
    <div className="svc-detail">
      <SEO
        title={service.title}
        description={`${service.shortDesc} Expert GE CT scan and MRI service by SEE Imaging, Bhopal. Pan India coverage.`}
        path={`/services/${service.slug}`}
        keywords={`${service.title}, GE CT scan service, MRI service India, ${service.slug.replace(/-/g, ' ')}, SEE Imaging Bhopal`}
        jsonLd={serviceJsonLd}
      />

      {/* Breadcrumb */}
      <div className="svc-detail__breadcrumb">
        <Link to="/">Home</Link>
        <span className="svc-detail__breadcrumb-sep">›</span>
        <Link to="/services">Services</Link>
        <span className="svc-detail__breadcrumb-sep">›</span>
        <span className="svc-detail__breadcrumb-current">{service.title}</span>
      </div>

      {/* Hero */}
      <div className="svc-detail__hero">
        <div className="svc-detail__hero-meta">
          <span className="svc-detail__hero-category">Service</span>
          <span className={`svc-detail__hero-badge ${service.badgeClass}`}>{service.badge}</span>
        </div>
        <h1 className="svc-detail__hero-title">{service.title}</h1>
        <p className="svc-detail__hero-tagline">{service.tagline}</p>

        {/* AMC vs CMC switcher */}
        <ContractCompareBanner currentSlug={slug} />
      </div>

      {/* Body */}
      <div className="svc-detail__body">

        {/* ── LEFT ── */}
        <div className="svc-detail__left">

          {/* Description */}
          <div className="svc-detail__section">
            <div className="svc-detail__section-label">About this service</div>
            <p className="svc-detail__description">{service.description}</p>
          </div>

          {/* How it works */}
          {service.process && (
            <div className="svc-detail__section">
              <div className="svc-detail__section-label">How it works</div>
              <ProcessSteps steps={service.process} />
            </div>
          )}

          {/* What's included (AMC/CMC) or What's covered (other services) */}
          {service.whatsIncluded ? (
            <div className="svc-detail__section">
              <div className="svc-detail__section-label">
                {service.contractType === 'amc' ? 'What AMC covers' : 'What CMC covers'}
              </div>
              <IncludedList items={service.whatsIncluded} />
            </div>
          ) : service.covered && (
            <div className="svc-detail__section">
              <div className="svc-detail__section-label">What we cover</div>
              <div className="svc-detail__info-box">
                <CoveredList items={service.covered} />
              </div>
            </div>
          )}

          {/* Machines covered */}
          <div className="svc-detail__section">
            <div className="svc-detail__section-label">Machines covered</div>
            <div className="svc-detail__machines-row">
              {service.machines.map(m => (
                <span key={m} className="svc-detail__machine-pill">{m}</span>
              ))}
            </div>
          </div>

          {/* AMC vs CMC: nudge to compare */}
          {service.isContract && (
            <div className="svc-detail__section">
              <div className="svc-detail__info-box" style={{ background: 'var(--bg-alt)' }}>
                <div className="svc-detail__info-title">
                  {service.contractType === 'amc'
                    ? 'Need total coverage including spare parts?'
                    : 'Want a more affordable option without parts coverage?'}
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: 14 }}>
                  {service.contractType === 'amc'
                    ? 'Consider our CMC — it covers everything including all spare parts, with a full warranty on replaced components.'
                    : 'Consider our AMC — a lower annual cost with all service visits and labour included. Spare parts billed at cost.'}
                </p>
                <Link
                  to={service.contractType === 'amc' ? '/services/cmc' : '/services/amc'}
                  style={{ fontSize: 13, fontWeight: 600, color: 'var(--blue)' }}
                >
                  {service.contractType === 'amc' ? 'View CMC details →' : 'View AMC details →'}
                </Link>
              </div>
            </div>
          )}

          {/* Related products — internal linking for SEO */}
          <div className="svc-detail__section">
            <div className="svc-detail__section-label">Browse our equipment</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8 }}>
              <Link to="/products/ge-ct-scanner-single-dual-slice" style={{ fontSize: 13, fontWeight: 600, color: 'var(--blue)', padding: '8px 16px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-alt)', textDecoration: 'none' }}>
                GE CT Scanner — Single & Dual Slice
              </Link>
              <Link to="/products/ge-ct-scanner-16-32-slice" style={{ fontSize: 13, fontWeight: 600, color: 'var(--blue)', padding: '8px 16px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-alt)', textDecoration: 'none' }}>
                GE CT Scanner — 16 & 32 Slice
              </Link>
              <Link to="/products/ge-ct-scanner-64-128-slice" style={{ fontSize: 13, fontWeight: 600, color: 'var(--blue)', padding: '8px 16px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-alt)', textDecoration: 'none' }}>
                GE CT Scanner — 64 & 128 Slice
              </Link>
              <Link to="/products/ge-ct-scan-spare-parts" style={{ fontSize: 13, fontWeight: 600, color: 'var(--blue)', padding: '8px 16px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-alt)', textDecoration: 'none' }}>
                GE CT Scan Spare Parts
              </Link>
              <Link to="/products" style={{ fontSize: 13, fontWeight: 600, color: 'var(--blue)', padding: '8px 16px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg-alt)', textDecoration: 'none' }}>
                View all products →
              </Link>
            </div>
          </div>
        </div>

        {/* ── RIGHT — Sticky panel ── */}
        <div className="svc-detail__right">
          <div className="svc-detail__panel">
            <div className="svc-detail__panel-title">{service.formTitle}</div>
            <p className="svc-detail__panel-sub">{service.formSubtitle}</p>

            <ServiceScheduleForm
              serviceTitle={service.title}
              urgencyOptions={service.urgencyOptions}
            />

            <hr className="svc-detail__panel-divider" />
            <AltContacts />
          </div>
        </div>
      </div>
    </div>
  )
}
