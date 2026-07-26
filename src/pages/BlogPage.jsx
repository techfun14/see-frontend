import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { BLOG_POSTS, BLOG_TAGS } from '../constants/blog'
import SectionLabel from '../components/ui/SectionLabel'
import SEO from '../components/seo/SEO'
import useReveal from '../hooks/useReveal'
import './BlogPage.css'

const TAG_COLORS = {
  'CT':      { bg: '#E6F1FB', color: '#185FA5' },
  'MRI':     { bg: '#E8F5E9', color: '#2E7D32' },
  'PET-CT':  { bg: '#FFF3E0', color: '#E65100' },
  'Guide':   { bg: '#F3E5F5', color: '#6A1B9A' },
  'Service': { bg: '#E3F2FD', color: '#1565C0' },
}

function BlogCard({ slug, tag, date, readTime, title, summary }) {
  const tagStyle = TAG_COLORS[tag] || TAG_COLORS['CT']
  return (
    <Link to={`/blog/${slug}`} className="blog-card stagger-child">
      <div className="blog-card__tag-row">
        <span
          className="blog-card__tag"
          style={{ background: tagStyle.bg, color: tagStyle.color }}
        >
          {tag}
        </span>
        <span className="blog-card__meta">{date} · {readTime}</span>
      </div>
      <h3 className="blog-card__title">{title}</h3>
      <p className="blog-card__summary">{summary}</p>
      <span className="blog-card__cta">Read article →</span>
    </Link>
  )
}

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState('all')
  const gridRef = useReveal()

  const filtered = useMemo(() =>
    activeTag === 'all'
      ? BLOG_POSTS
      : BLOG_POSTS.filter(p => p.tag === activeTag),
    [activeTag]
  )

  const featured = BLOG_POSTS[BLOG_POSTS.length - 1]
  const featuredTagStyle = TAG_COLORS[featured.tag] || TAG_COLORS['CT']

  return (
    <div className="blog-page">
      <SEO
        title="Medical Imaging Blog — CT, MRI & PET-CT Guides"
        description="Practical guides on CT scanners, MRI systems, PET-CT, site preparation, and service contracts. Written for diagnostic centres and hospitals across India by SEE Imaging."
        path="/blog"
        keywords="CT scanner guide India, MRI system guide, PET-CT scanner India, refurbished CT scanner, medical imaging blog, AERB CT installation, AMC CMC service contract"
      />

      {/* ── Hero ── */}
      <div className="blog-page__hero">
        <div className="blog-page__hero-grid" />
        <div className="blog-page__hero-label">Knowledge Centre</div>
        <h1 className="blog-page__hero-title">
          Imaging Equipment<br />Guides & Insights
        </h1>
        <p className="blog-page__hero-sub">
          Practical advice on CT scanners, MRI systems, PET-CT, site preparation,
          and maintenance — written for diagnostic centres and hospitals across India.
        </p>
      </div>

      {/* ── Featured post ── */}
      <div className="blog-page__featured-wrap">
        <Link to={`/blog/${featured.slug}`} className="blog-featured">
          <div className="blog-featured__inner">
            <div className="blog-featured__left">
              <SectionLabel>Latest Article</SectionLabel>
              <div className="blog-featured__tag-row">
                <span
                  className="blog-card__tag"
                  style={{ marginTop: 12, background: featuredTagStyle.bg, color: featuredTagStyle.color }}
                >
                  {featured.tag}
                </span>
                <span className="blog-card__meta">{featured.date} · {featured.readTime}</span>
              </div>
              <h2 className="blog-featured__title">{featured.title}</h2>
              <p className="blog-featured__summary">{featured.summary}</p>
              <span className="blog-featured__cta">Read article →</span>
            </div>
            <div className="blog-featured__right">
              <div className="blog-featured__icon-wrap">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="32" fill="rgba(21,101,192,0.08)"/>
                  <path d="M20 32h24M38 26l6 6-6 6" stroke="#1565C0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="18" y="22" width="28" height="20" rx="3" stroke="#F57C00" strokeWidth="1.5" fill="none" opacity="0.4"/>
                </svg>
                <div className="blog-featured__tag-large">{featured.tag}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* ── Filter bar ── */}
      <div className="blog-page__filter-bar">
        {BLOG_TAGS.map(t => (
          <button
            key={t.value}
            className={`blog-page__filter-btn ${activeTag === t.value ? 'active' : ''}`}
            onClick={() => setActiveTag(t.value)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Grid ── */}
      <div className="blog-page__body">
        <p className="blog-page__count">
          Showing <span>{filtered.length}</span>{' '}
          {filtered.length === 1 ? 'article' : 'articles'}
          {activeTag !== 'all' && ` in ${BLOG_TAGS.find(t => t.value === activeTag)?.label}`}
        </p>

        <div ref={gridRef} className="blog-page__grid reveal">
          {filtered.map(post => <BlogCard key={post.id} {...post} />)}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="blog-page__cta-strip">
        <div className="blog-page__cta-inner">
          <h3 className="blog-page__cta-title">Have a question about a specific machine?</h3>
          <p className="blog-page__cta-sub">
            Our team is available on WhatsApp and phone for honest, no-pressure advice.
          </p>
          <Link to="/contact" className="blog-page__cta-btn">Talk to Us</Link>
        </div>
      </div>
    </div>
  )
}
