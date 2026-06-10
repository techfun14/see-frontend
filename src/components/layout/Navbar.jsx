import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Icons from '../../constants/icons'
import LogoIcon from '../ui/LogoIcon'
import './Navbar.css'

const NAV_ITEMS = [
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'About',    to: '/about'   },
  { label: 'Contact',  to: '/contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { user, logout }        = useAuth()
  const location                = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false); window.scrollTo(0, 0) }, [location.pathname])

  useEffect(() => {
    const fn = () => { if (window.innerWidth > 900) setMenuOpen(false) }
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])

  function isActive(to) {
    if (to === '/products') return location.pathname.startsWith('/products')
    if (to === '/services') return location.pathname.startsWith('/services')
    if (to === '/about')   return location.pathname.startsWith('/about') 
    if (to === '/contact')  return location.pathname === '/contact'
    return false
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">

      {/* Logo */}
      <Link to="/" className="navbar__logo">
        <div className="navbar__logo-icon"><LogoIcon size={42} /></div>
        <div className="navbar__logo-text">
          <div className="navbar__logo-name">SEE <span className="navbar__logo-gold">Imaging</span></div>
          <div className="navbar__logo-sub">Advanced Diagnostic Solutions</div>
        </div>
      </Link>

      {/* Desktop nav */}
      <ul className="navbar__links">
        {NAV_ITEMS.map(({ label, to }) => (
          <li key={label}>
            <Link to={to} className={`navbar__link ${isActive(to) ? 'navbar__link--active' : ''}`}>
              {label}
            </Link>
          </li>
        ))}

        <li><Link to="/contact" className="navbar__cta">Get Enquiry</Link></li>

        {/* Admin: when signed in show Dashboard + Sign out; otherwise a subtle lock */}
        {user?.role === 'admin' ? (
          <>
            <li>
              <Link to="/admin" className="navbar__admin-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                  <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
                </svg>
                Dashboard
              </Link>
            </li>
            <li>
              <button onClick={logout} className="navbar__signout-btn">Sign out</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/admin-login" className="navbar__admin-login" aria-label="Admin login">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
            </Link>
          </li>
        )}
      </ul>

      {/* Hamburger */}
      <button className="navbar__hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {menuOpen
            ? (<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>)
            : (<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>)
          }
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {NAV_ITEMS.map(({ label, to }) => (
            <Link key={label} to={to} className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
          <Link to="/contact" className="navbar__mobile-cta" onClick={() => setMenuOpen(false)}>
            Get Enquiry
          </Link>
          
          {/* Admin section */}
          {!user && (
            <Link to="/admin-login" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}
              style={{ borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:8, paddingTop:16 }}>
              🔐 Admin Login
            </Link>
          )}
          {user?.role === 'admin' && (
            <Link to="/admin" className="navbar__mobile-link" onClick={() => setMenuOpen(false)}
              style={{ borderTop:'1px solid rgba(255,255,255,0.06)', marginTop:8, paddingTop:16 }}>
              🔐 Dashboard
            </Link>
          )}
          {user?.role === 'admin' && (
            <button onClick={() => { logout(); setMenuOpen(false) }}
              style={{ display:'block', padding:'13px 0', fontSize:14, color:'rgba(255,255,255,0.5)', background:'none', border:'none', cursor:'pointer', width:'100%', textAlign:'left', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
              Sign out
            </button>
          )}
        </div>
      )}
    </nav>
  )
}
