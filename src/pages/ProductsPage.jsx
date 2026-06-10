import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { PRODUCTS_CATALOG, PRODUCT_CATEGORIES } from '../constants/products'
import SectionLabel from '../components/ui/SectionLabel'
import SEO from '../components/seo/SEO'
import { buildItemListSchema } from '../components/seo/structuredData'
import './ProductsPage.css'

function CatalogCard({ slug, categoryLabel, category, title, tagline, badge, badgeClass, label, mainImage, variants }) {
  return (
    <Link to={`/products/${slug}`} className="catalog-card">
      <div className="catalog-card__image">
        {mainImage
          ? <img src={mainImage} alt={`${title} — refurbished ${categoryLabel} for sale in India`} loading="lazy" width="400" height="300" />
          : <div className="catalog-card__placeholder">{label}</div>
        }
        <span className={`catalog-card__badge ${badgeClass}`}>{badge}</span>
      </div>

      <div className="catalog-card__body">
        <div className="catalog-card__category">{categoryLabel}</div>
        <h3 className="catalog-card__title">{title}</h3>
        <p className="catalog-card__tagline">{tagline}</p>

        {variants.length > 1 && (
          <div className="catalog-card__variants">
            {variants.map(v => (
              <span key={v.name} className="catalog-card__variant-pill">{v.name}</span>
            ))}
          </div>
        )}

        <div className="catalog-card__footer">
          <span className="catalog-card__cta">View full details →</span>
          <span className="catalog-card__enquire-btn">Enquire</span>
        </div>
      </div>
    </Link>
  )
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter(p => p.category === activeCategory)

  const productListSchema = useMemo(
    () => buildItemListSchema(PRODUCTS_CATALOG, 'Refurbished GE CT Scanners & MRI Systems'),
    []
  )

  return (
    <div className="products-page">
      <SEO
        title="Refurbished GE CT Scanners & MRI Systems"
        description="Browse refurbished GE CT Scanners from Single Slice to 128 Slice, MRI systems, and genuine spare parts. Tested, certified, and delivered across India by SEE Imaging, Bhopal."
        path="/products"
        keywords="refurbished GE CT scanner, buy CT scan machine India, GE MRI system, CT scanner price India, refurbished medical imaging, SEE Imaging products"
        jsonLd={productListSchema}
      />

      {/* Hero banner */}
      <div className="products-page__hero">
        <div className="products-page__hero-grid" />
        <div className="products-page__hero-label">Our catalog</div>
        <h1 className="products-page__hero-title">
          Refurbished Radiology<br />Equipment
        </h1>
        <p className="products-page__hero-sub">
          GE CT Scanners from Single Slice to 128 Slice, MRI Systems, and Spare Parts.
          All units are tested, certified, and ready for installation across India.
        </p>
      </div>

      {/* Filter tab bar */}
      <div className="products-page__filter-bar">
        {PRODUCT_CATEGORIES.map(cat => (
          <button
            key={cat.value}
            className={`products-page__filter-btn ${activeCategory === cat.value ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="products-page__body">
        <p className="products-page__count">
          Showing <span>{filtered.length}</span> {filtered.length === 1 ? 'product' : 'products'}
          {activeCategory !== 'all' && ` in ${PRODUCT_CATEGORIES.find(c => c.value === activeCategory)?.label}`}
        </p>

        <div className="products-page__grid">
          {filtered.map(p => <CatalogCard key={p.id} {...p} />)}
        </div>
      </div>
    </div>
  )
}
