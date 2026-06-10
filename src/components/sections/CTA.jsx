import useReveal from '../../hooks/useReveal'
import SectionLabel from '../ui/SectionLabel'
import EnquiryForm from '../ui/EnquiryForm'
import Icons from '../../constants/icons'
import { COMPANY } from '../../constants/data'
import './CTA.css'

function ContactItem({ icon, label, children }) {
  return (
    <div className="cta__contact-item">
      <div className="cta__contact-icon">{icon}</div>
      <div>
        <div className="cta__contact-label">{label}</div>
        <div className="cta__contact-value">{children}</div>
      </div>
    </div>
  )
}

export default function CTA() {
  const ref = useReveal()

  return (
    <section ref={ref} id="contact" className="cta reveal" aria-label="Contact us">
      <div className="cta__grid-overlay" />

      <div className="cta__inner">

        <div className="cta__header">
          <SectionLabel>Contact us</SectionLabel>
          <h2 className="cta__title">Get in Touch</h2>
          <p className="cta__sub">
            Looking for a refurbished CT or MRI system? Need a service contract or spare part?
            Fill the form and we will call you back within 24 hours.
          </p>
        </div>

        <div className="cta__body">

          <div>
            <div className="cta__info-title">SEE Imaging</div>

            <ContactItem icon={Icons.phone} label="Call us">
              <a href={"tel:" + COMPANY.phone}>{COMPANY.phone}</a>
            </ContactItem>

            <ContactItem icon={Icons.mail} label="Email us">
              <a href={"mailto:" + COMPANY.email}>{COMPANY.email}</a>
            </ContactItem>

            <ContactItem
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              }
              label="Location"
            >
              {COMPANY.address}
            </ContactItem>

            <hr className="cta__divider" />
            <div className="cta__hours-label">Working hours</div>
            <div className="cta__hours-value">{COMPANY.hours}</div>
          </div>

          <div className="cta__form-box">
            <div className="cta__form-title">Send an Enquiry</div>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
