import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { SERVICES_CATALOG, SERVICE_CATEGORIES } from '../constants/services'
import Icons from '../constants/icons'
import SEO from '../components/seo/SEO'
import { buildItemListSchema } from '../components/seo/structuredData'
import './ServicesPage.css'

function ServiceCard({ slug, colorKey, icon, number, title, shortDesc, badge, badgeClass, machines }) {
  return (
    <Link to={`/services/${slug}`} className={`svc-card svc-card--${colorKey}`}>
      <div className="svc-card__header">
        <div className="svc-card__icon-wrap">{Icons[icon] || Icons.tool}</div>
        <span className={`svc-card__badge ${badgeClass}`}>{badge}</span>
      </div>

      <h3 className="svc-card__title">{title}</h3>
      <p className="svc-card__desc">{shortDesc}</p>

      <div className="svc-card__machines">
        {machines.slice(0,3).map(m => (
          <span key={m} className="svc-card__machine-tag">{m}</span>
        ))}
      </div>

      <div className="svc-card__footer">
        <span className="svc-card__cta">View details →</span>
        <span className="svc-card__schedule-btn">Schedule</span>
      </div>
    </Link>
  )
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [visibleServices, setVisibleServices] = useState(SERVICES_CATALOG)

  // Load visibility from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('servicesVisibility')
    if (saved) {
      try {
        const visibility = JSON.parse(saved)
        const visible = SERVICES_CATALOG.filter(s => visibility[s.id] !== false)
        setVisibleServices(visible)
        console.log('Loaded visible services:', visible.map(s => s.title))
      } catch (e) {
        console.error('Failed to parse services visibility:', e)
      }
    }
  }, [])

  const filtered = activeCategory === 'all'
    ? visibleServices
    : visibleServices.filter(s => s.category === activeCategory)

  const amc = visibleServices.find(s => s.slug === 'amc')
  const cmc = visibleServices.find(s => s.slug === 'cmc')

  const serviceListSchema = useMemo(
    () => buildItemListSchema(
      visibleServices.map(s => ({ ...s, slug: `services/${s.slug}` })),
      'CT Scan & MRI Services'
    ),
    [visibleServices]
  )

  return (
    <div className="services-page">
      <SEO
        title="CT Scan & MRI Services — Repair, AMC, CMC, Installation"
        description="Expert breakdown repair, preventive maintenance, AMC/CMC contracts, installation, spare parts supply, and technical consultation for GE CT Scanners and MRI systems. Pan India service by SEE Imaging, Bhopal."
        path="/services"
        keywords="CT scan repair India, MRI service contract, AMC CMC CT scanner, GE CT installation, medical equipment maintenance Bhopal, SEE Imaging services"
        jsonLd={serviceListSchema}
      />

      {/* Hero */}
      <div className="services-page__hero">
        <div className="services-page__hero-grid" />
        <div className="services-page__hero-label">What we offer</div>
        <h1 className="services-page__hero-title">
          Service &amp; Support<br />for Radiology Equipment
        </h1>
        <p className="services-page__hero-sub">
          From emergency breakdown repair to annual maintenance contracts —
          our GE-trained technicians travel anywhere in India to keep your
          CT and MRI systems running.
        </p>
      </div>

      {/* AMC / CMC highlight band */}
      <div className="services-page__contracts-band">
        <span className="services-page__contracts-label">Maintenance contracts</span>
        <div className="services-page__contract-cards">
          <Link to="/services/amc" className="services-page__contract-card services-page__contract-card--amc">
            <div className="services-page__contract-icon services-page__contract-icon--amc">AMC</div>
            <div>
              <div className="services-page__contract-name">Annual Maintenance Contract</div>
              <div className="services-page__contract-desc">All visits + labour included. Parts at cost.</div>
            </div>
            <span className="services-page__contract-arrow">→</span>
          </Link>
          <Link to="/services/cmc" className="services-page__contract-card services-page__contract-card--cmc">
            <div className="services-page__contract-icon services-page__contract-icon--cmc">CMC</div>
            <div>
              <div className="services-page__contract-name">Comprehensive Maintenance Contract</div>
              <div className="services-page__contract-desc">Everything covered — parts, labour, and warranty.</div>
            </div>
            <span className="services-page__contract-arrow">→</span>
          </Link>
        </div>
      </div>

      {/* Filter bar */}
      <div className="services-page__filter-bar">
        {SERVICE_CATEGORIES.map(cat => (
          <button
            key={cat.value}
            className={`services-page__filter-btn ${activeCategory === cat.value ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Service cards */}
      <div className="services-page__body">
        <div className="services-page__grid">
          {filtered.map(s => <ServiceCard key={s.id} {...s} />)}
        </div>
      </div>
    </div>
  )
}
