import { Link } from 'react-router-dom'
import SEO from '../components/seo/SEO'

export default function NotFoundPage() {
  return (
    <div style={{
      paddingTop: 120,
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 20px 80px',
    }}>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist. Browse our refurbished GE CT scanners, MRI systems, and services."
        noIndex
      />

      <div style={{ fontSize: 72, fontWeight: 700, color: 'var(--navy)', opacity: 0.12, fontFamily: "'Sora', sans-serif", lineHeight: 1 }}>
        404
      </div>
      <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--navy)', marginTop: 16, marginBottom: 10 }}>
        Page Not Found
      </h1>
      <p style={{ fontSize: 16, color: 'var(--text-muted)', maxWidth: 420, lineHeight: 1.6, marginBottom: 32 }}>
        The page you're looking for doesn't exist or may have been moved.
        Try browsing our products or services.
      </p>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" style={{
          fontSize: 14, fontWeight: 600, color: 'white', background: 'var(--navy)',
          padding: '12px 24px', borderRadius: 10, textDecoration: 'none',
        }}>
          Go Home
        </Link>
        <Link to="/products" style={{
          fontSize: 14, fontWeight: 600, color: 'var(--navy)', background: 'var(--bg-alt)',
          padding: '12px 24px', borderRadius: 10, textDecoration: 'none', border: '1px solid var(--border)',
        }}>
          Browse Products
        </Link>
        <Link to="/services" style={{
          fontSize: 14, fontWeight: 600, color: 'var(--navy)', background: 'var(--bg-alt)',
          padding: '12px 24px', borderRadius: 10, textDecoration: 'none', border: '1px solid var(--border)',
        }}>
          View Services
        </Link>
      </div>
    </div>
  )
}
