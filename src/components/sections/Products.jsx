import { Link } from 'react-router-dom'
import useReveal from '../../hooks/useReveal'
import SectionLabel from '../ui/SectionLabel'
import { PRODUCTS_CATALOG } from '../../constants/products'
import './Products.css'

function ProductCard({ slug, categoryLabel, title, description, badge, badgeClass, label, mainImage, className = '' }) {
  return (
    <Link to={`/products/${slug}`} className={`product-card ${className}`} style={{ textDecoration: 'none' }}>
      <div className="product-card__image">
        {mainImage
          ? <img src={mainImage} alt={`${title} — refurbished ${categoryLabel} available in India`} className="product-card__img" loading="lazy" width="400" height="300" />
          : <span className="product-card__label-placeholder">{label}</span>
        }
        <span className={`product-card__badge ${badgeClass}`}>{badge}</span>
      </div>
      <div className="product-card__body">
        <div className="product-card__category">{categoryLabel}</div>
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__desc">{description.slice(0, 110)}...</p>
        <span className="product-card__enquire">View details →</span>
      </div>
    </Link>
  )
}

export default function Products() {
  const ref = useReveal()

  return (
    <section ref={ref} id="products" className="products reveal" aria-label="Our products">
      <div className="products__header">
        <div>
          <SectionLabel>Featured products</SectionLabel>
          <h2 className="products__title">Refurbished Radiology Equipment</h2>
        </div>
        <Link to="/products" className="products__view-all">View all products →</Link>
      </div>

      <div className="products__grid">
        {PRODUCTS_CATALOG.map(p => <ProductCard key={p.id} {...p} className="stagger-child" />)}
      </div>

      {/* Full-width CTA banner below the grid — avoids the empty grid-cell gap */}
      <div className="products__cta-banner">
        <div className="products__cta-banner-text">
          <div className="products__cta-banner-heading">Need a custom solution?</div>
          <p className="products__cta-banner-sub">
            Talk to our technical team. We'll find the right equipment for your budget.
          </p>
        </div>
        <Link to="/contact" className="products__cta-banner-btn">Talk to us →</Link>
      </div>
    </section>
  )
}
