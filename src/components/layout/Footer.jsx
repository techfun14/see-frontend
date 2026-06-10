import { Link } from "react-router-dom"
import { COMPANY, FOOTER_PRODUCTS, FOOTER_SERVICES } from '../../constants/data'
import { PRODUCTS_CATALOG } from '../../constants/products'
import { SERVICES_CATALOG } from '../../constants/services'
import './Footer.css'

function ContactItem({ icon, main, sub }) {
  return (
    <div className="footer__contact-item">
      <span className="footer__contact-icon" aria-hidden="true">{icon}</span>
      <div className="footer__contact-text">
        <span className="footer__contact-main">{main}</span>
        {sub && <span>{sub}</span>}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__grid">

        {/* Brand */}
        <div>
          <div className="footer__brand-name">SEE <span className="footer__brand-gold">Imaging</span></div>
          <div className="footer__brand-tag">Advanced Diagnostic Solutions</div>
          <p className="footer__brand-desc">
            Specialists in refurbished GE CT Scan and MRI systems.
            Quality-tested radiology equipment with pan India service support.
          </p>
        </div>

        {/* Products — now proper links to product detail pages */}
        <nav aria-label="Products">
          <div className="footer__col-title">Products</div>
          <div className="footer__links">
            {PRODUCTS_CATALOG.map(p => (
              <Link key={p.id} to={`/products/${p.slug}`} className="footer__link">{p.title}</Link>
            ))}
          </div>
        </nav>

        {/* Services — now proper links to service detail pages */}
        <nav aria-label="Services">
          <div className="footer__col-title">Services</div>
          <div className="footer__links">
            {SERVICES_CATALOG.map(s => (
              <Link key={s.id} to={`/services/${s.slug}`} className="footer__link">{s.title}</Link>
            ))}
          </div>
        </nav>

        {/* Contact */}
        <div>
          <div className="footer__col-title">Contact</div>
          <ContactItem icon="📞" main={COMPANY.phone}   sub={COMPANY.hours} />
          <ContactItem icon="📍" main={COMPANY.address} />
          <ContactItem icon="✉️" main={COMPANY.email}   />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <span className="footer__copyright">
          © {new Date().getFullYear()} SEE Imaging. All rights reserved.
        </span>

        {/* Developer credit */}
        <div className="footer__dev-credit">
          <span>Built by</span>
          <a href="https://github.com/techfun14" target="_blank" rel="noreferrer" className="footer__dev-name">
            Utkarsh Jain
          </a>
          <a href="https://github.com/techfun14" target="_blank" rel="noreferrer" className="footer__dev-icon" title="GitHub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/utkarsh-jain-1ba12b1a3/" target="_blank" rel="noreferrer" className="footer__dev-icon footer__dev-icon--li" title="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        <div className="footer__legal">
          <a href="#" className="footer__link">Privacy Policy</a>
          <a href="#" className="footer__link">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  )
}
