import { Link } from 'react-router-dom'
import useReveal from '../../hooks/useReveal'
import SectionLabel from '../ui/SectionLabel'
import { SERVICES_CATALOG } from '../../constants/services'
import './Services.css'

export default function Services() {
  const ref = useReveal()

  return (
    <section ref={ref} id="services" className="services reveal" aria-label="Our services">

      <div className="services__header">
        <SectionLabel>Our services</SectionLabel>
        <h2 className="services__title">Everything Your Equipment Needs</h2>
        <p className="services__sub">
          From emergency breakdown repair to full annual maintenance contracts —
          our technicians travel anywhere in India.
        </p>
      </div>

      <div className="services__grid">
        {SERVICES_CATALOG.map(({ slug, number, title, shortDesc }) => (
          <Link key={number} to={`/services/${slug}`} className="service-card stagger-child" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="service-card__num">{number}</div>
            <div>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__desc">{shortDesc}</p>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 36 }}>
        <Link to="/services" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 14, fontWeight: 600, color: 'var(--blue)',
          padding: '12px 28px', borderRadius: 10,
          border: '1.5px solid var(--border)',
          background: 'white', transition: 'all 0.2s'
        }}>
          View all services →
        </Link>
      </div>
    </section>
  )
}
