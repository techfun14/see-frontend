import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'
import Icons from '../../constants/icons'
import LogoIcon from '../../components/ui/LogoIcon'
import './AdminLayout.css'

const SideIcon = ({ d }) => (
  <svg className="admin-sidebar__link-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d={d}/>
  </svg>
)

const NAV_ADMIN = [
  { label: 'Dashboard',          to: '/admin',                  icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', exact: true },
  { label: 'Service Schedules',  to: '/admin/schedules',        icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', badge: 'NEW' },
  { label: 'Product Enquiries',  to: '/admin/enquiries',        icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { label: 'Manage Services',    to: '/admin/services-manage',  icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
]

const NAV_CLIENT = [
  { label: 'My Dashboard',       to: '/dashboard',              icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z', exact: true },
  { label: 'My Service Requests',to: '/dashboard/my-services',  icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { label: 'My Enquiries',       to: '/dashboard/my-enquiries', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
]

export default function AdminLayout({ role = 'admin' }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const NAV = role === 'admin' ? NAV_ADMIN : NAV_CLIENT
  const baseLabel = role === 'admin' ? 'Admin Panel' : 'Client Portal'

  function handleLogout() {
    logout()
    navigate('/login')
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false)
  }

  return (
    <div className="admin-layout">
      {/* ── MOBILE HEADER ── */}
      <header className="admin-mobile-header">
        <button 
          className="admin-mobile-header__menu-btn" 
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
        <div className="admin-mobile-header__brand">
          <div className="admin-mobile-header__brand-icon">
            <LogoIcon size={26} />
          </div>
          <span>SEE Imaging</span>
        </div>
      </header>

      {/* ── MOBILE OVERLAY ── */}
      {mobileMenuOpen && (
        <div className="admin-mobile-overlay" onClick={closeMobileMenu} />
      )}

      {/* ── SIDEBAR ── */}
      <aside className={`admin-sidebar ${mobileMenuOpen ? 'admin-sidebar--open' : ''}`}>
        <div className="admin-sidebar__close-btn-wrap">
          <button 
            className="admin-sidebar__close-btn" 
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <Link to={role === 'admin' ? '/admin' : '/dashboard'} className="admin-sidebar__brand" onClick={closeMobileMenu}>
          <div className="admin-sidebar__brand-icon">
            <LogoIcon size={30} />
          </div>
          <div>
            <div className="admin-sidebar__brand-name">SEE Imaging</div>
            <div className="admin-sidebar__brand-role">{baseLabel}</div>
          </div>
        </Link>

        <nav className="admin-sidebar__nav">
          <div className="admin-sidebar__section-label">Navigation</div>
          {NAV.map(({ label, to, icon, badge, exact }) => (
            <NavLink
              key={to} to={to} end={exact}
              className={({ isActive }) => `admin-sidebar__link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <SideIcon d={icon} />
              {label}
              {badge && <span className="admin-sidebar__badge">{badge}</span>}
            </NavLink>
          ))}

          {role === 'admin' && (
            <>
              <div className="admin-sidebar__section-label" style={{marginTop:16}}>Quick links</div>
              <a href="/" target="_blank" rel="noreferrer" className="admin-sidebar__link">
                <SideIcon d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                View live website
              </a>
            </>
          )}
        </nav>

        <div className="admin-sidebar__footer">
          <button className="admin-sidebar__logout" onClick={handleLogout}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Sign out
          </button>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  )
}
