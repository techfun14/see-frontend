import { useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { BLOG_POSTS } from '../constants/blog'
import SEO from '../components/seo/SEO'
import useReveal from '../hooks/useReveal'
import './BlogDetailPage.css'

const TAG_COLORS = {
  'CT':      { bg: '#E6F1FB', color: '#185FA5' },
  'MRI':     { bg: '#E8F5E9', color: '#2E7D32' },
  'PET-CT':  { bg: '#FFF3E0', color: '#E65100' },
  'Guide':   { bg: '#F3E5F5', color: '#6A1B9A' },
  'Service': { bg: '#E3F2FD', color: '#1565C0' },
}

// ── Lightweight markdown renderer ─────────────────────────
// Supports: **bold**, - bullet lists, | tables |
function renderBody(text) {
  const lines = text.split('\n')
  const output = []
  let tableBuffer = []
  let inTable = false

  const flushTable = (key) => {
    if (tableBuffer.length < 2) {
      tableBuffer.forEach((l, i) =>
        output.push(<p key={`tl-${key}-${i}`} className="blog-detail__p">{l}</p>)
      )
      tableBuffer = []
      inTable = false
      return
    }
    const headers = tableBuffer[0].split('|').map(h => h.trim()).filter(Boolean)
    const rows    = tableBuffer.slice(2).map(r => r.split('|').map(c => c.trim()).filter(Boolean))
    output.push(
      <div key={`table-${key}`} className="blog-detail__table-wrap">
        <table className="blog-detail__table">
          <thead>
            <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
    )
    tableBuffer = []
    inTable = false
  }

  lines.forEach((line, idx) => {
    const key = `line-${idx}`

    // Table row
    if (line.trim().startsWith('|')) {
      inTable = true
      tableBuffer.push(line.trim())
      return
    }
    if (inTable) flushTable(idx)

    // Empty line
    if (line.trim() === '') {
      output.push(<div key={key} style={{ height: 12 }} />)
      return
    }

    // Bullet
    if (line.trim().startsWith('- ')) {
      const content = line.trim().slice(2)
      output.push(
        <li
          key={key}
          className="blog-detail__li"
          dangerouslySetInnerHTML={{
            __html: content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'),
          }}
        />
      )
      return
    }

    // Paragraph with inline bold
    const rendered = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    output.push(
      <p
        key={key}
        className="blog-detail__p"
        dangerouslySetInnerHTML={{ __html: rendered }}
      />
    )
  })

  if (inTable) flushTable('end')
  return output
}

function RelatedCard({ slug, tag, date, readTime, title }) {
  const tagStyle = TAG_COLORS[tag] || TAG_COLORS['CT']
  return (
    <Link to={`/blog/${slug}`} className="blog-detail__related-card">
      <span className="blog-detail__related-tag" style={{ color: tagStyle.color }}>{tag}</span>
      <h4 className="blog-detail__related-title">{title}</h4>
      <span className="blog-detail__related-meta">{date} · {readTime}</span>
    </Link>
  )
}

export default function BlogDetailPage() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find(p => p.slug === slug)

  const related = useMemo(() =>
    BLOG_POSTS.filter(p => p.slug !== slug && p.tag === post?.tag).slice(0, 3),
    [slug, post]
  )

  const contentRef = useReveal()

  if (!post) return <Navigate to="/blog" replace />

  const tagStyle = TAG_COLORS[post.tag] || TAG_COLORS['CT']

  // Build Article schema inline (no dependency on structuredData.js needed)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.summary,
    author: { '@type': 'Organization', name: 'SEE Imaging' },
    publisher: {
      '@type': 'Organization',
      name: 'SEE Imaging',
      logo: { '@type': 'ImageObject', url: 'https://www.seeimaging.com/logo-see-imaging.svg' },
    },
    url: `https://www.seeimaging.com/blog/${post.slug}`,
    datePublished: post.date,
    mainEntityOfPage: `https://www.seeimaging.com/blog/${post.slug}`,
  }

  return (
    <div className="blog-detail-page">
      <SEO
        title={post.title}
        description={post.summary}
        path={`/blog/${post.slug}`}
        keywords={`${post.tag}, medical imaging India, CT scanner, MRI, PET-CT, SEE Imaging`}
        jsonLd={articleSchema}
      />

      {/* ── Hero ── */}
      <div className="blog-detail__hero">
        <div className="blog-detail__hero-grid" />
        <div className="blog-detail__hero-inner">
          <Link to="/blog" className="blog-detail__back">← Back to Blog</Link>
          <div className="blog-detail__tag-row">
            <span
              className="blog-detail__tag"
              style={{ background: tagStyle.bg, color: tagStyle.color }}
            >
              {post.tag}
            </span>
            <span className="blog-detail__meta">{post.date} · {post.readTime}</span>
          </div>
          <h1 className="blog-detail__title">{post.title}</h1>
          <p className="blog-detail__summary">{post.summary}</p>
        </div>
      </div>

      {/* ── Article + sidebar ── */}
      <div className="blog-detail__layout">
        <article ref={contentRef} className="blog-detail__article reveal">

          {/* Table of contents */}
          {post.sections.length > 2 && (
            <div className="blog-detail__toc">
              <div className="blog-detail__toc-title">In This Article</div>
              <ul className="blog-detail__toc-list">
                {post.sections.map((s, i) => (
                  <li key={i}>
                    <a href={`#section-${i}`} className="blog-detail__toc-link">{s.heading}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sections */}
          {post.sections.map((section, i) => (
            <section key={i} id={`section-${i}`} className="blog-detail__section">
              <h2 className="blog-detail__section-heading">{section.heading}</h2>
              <div className="blog-detail__section-body">
                {renderBody(section.body)}
              </div>
            </section>
          ))}

          {/* Article CTA */}
          <div className="blog-detail__cta-block">
            <div className="blog-detail__cta-text">
              <strong>Ready to take the next step?</strong>
              <span>
                SEE Imaging supplies fully tested, calibrated refurbished GE CT, MRI,
                and PET-CT systems with complete installation support across India.
              </span>
            </div>
            <Link to={post.ctaLink} className="blog-detail__cta-btn">{post.ctaLabel}</Link>
          </div>
        </article>

        {/* ── Sidebar ── */}
        <aside className="blog-detail__sidebar">

          {/* Quick contact */}
          <div className="blog-detail__sidebar-card">
            <div className="blog-detail__sidebar-title">Speak to Our Team</div>
            <p className="blog-detail__sidebar-text">
              Have questions about a specific machine or site requirement?
              Our engineers respond on WhatsApp within hours.
            </p>
            <Link to="/contact" className="blog-detail__sidebar-btn">Contact Us</Link>
            <Link to="/products" className="blog-detail__sidebar-link">Browse Products →</Link>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="blog-detail__sidebar-card">
              <div className="blog-detail__sidebar-title">Related Articles</div>
              <div className="blog-detail__related-list">
                {related.map(r => <RelatedCard key={r.id} {...r} />)}
              </div>
            </div>
          )}

          <Link to="/blog" className="blog-detail__all-link">← All Articles</Link>
        </aside>
      </div>
    </div>
  )
}
