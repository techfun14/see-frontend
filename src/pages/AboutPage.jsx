import { useEffect } from 'react'
import SEO from '../components/seo/SEO'
import { organizationSchema } from '../components/seo/structuredData'
import './AboutPage.css'
import GEReveolution16slice from '../assets/images/GeRevolution Expert 16 slice.png';
import mukeshpatel from '../assets/images/Staff/MukeshPatel.jpeg';
import kamleshyadav from '../assets/images/Staff/KamleshYadav.png';
// Icon components
const CheckCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
)

const AwardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
)

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const TargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="about-page">
      <SEO
        title="About Us — Trusted Partner in Refurbished Medical Imaging"
        description="Since 2015, SEE Imaging has completed 100+ installations of refurbished GE CT Scanners and MRI systems across 20+ cities in India. Based in Bhopal, Madhya Pradesh."
        path="/about"
        keywords="about SEE Imaging, refurbished medical imaging company India, GE CT scanner dealer Bhopal, medical equipment supplier Madhya Pradesh"
        jsonLd={organizationSchema}
      />
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__container">
          <div className="about-hero__content reveal">
            <span className="about-hero__label">About SEE Imaging</span>
            <h1 className="about-hero__title">
              Trusted Partner in <span className="highlight">Refurbished Medical Imaging</span>
            </h1>
            <p className="about-hero__description">
              Since 2015, we've been revolutionizing healthcare accessibility across India by providing 
              certified, refurbished CT and MRI systems. With over 100+ successful installations and 
              15+ years of combined expertise, we're the partner hospitals trust.
            </p>
            <div className="about-hero__stats">
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Installations</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Cities Covered</div>
              </div>
            </div>
          </div>
          <div className="about-hero__image reveal">
            <div className="image-wrapper">
              <img src={GEReveolution16slice} alt="SEE Imaging — CT scanner installation and service support across India" loading="lazy" width="600" height="400" />
              <div className="image-badge">
                <span>Pan India Service Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="about-story__container">
          <div className="section-header reveal">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Building Trust, One Installation at a Time</h2>
          </div>
          
          <div className="story-content">
            <div className="story-text reveal">
              <p className="story-intro">
                Founded in Bhopal, Madhya Pradesh, SEE Imaging emerged from a simple
                yet powerful vision: to make advanced medical imaging technology accessible to healthcare 
                providers across India, regardless of their budget constraints.
              </p>
              
              <div className="story-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <CheckCircleIcon />
                  </div>
                  <div>
                    <h4>Quality First</h4>
                    <p>Every machine undergoes rigorous testing and certification before delivery</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <CheckCircleIcon />
                  </div>
                  <div>
                    <h4>Pan-India Support</h4>
                    <p>24/7 technical support with technicians available across major cities</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <CheckCircleIcon />
                  </div>
                  <div>
                    <h4>Transparent Pricing</h4>
                    <p>No hidden costs — comprehensive AMC and CMC packages available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="story-image reveal">
              <div className="timeline-card">
                <div className="timeline-item">
                  <div className="timeline-year">2015</div>
                  <div className="timeline-desc">Company founded in Bhopal</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2017</div>
                  <div className="timeline-desc">First 50 installations completed</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2020</div>
                  <div className="timeline-desc">Expanded to 15+ cities across India</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2024</div>
                  <div className="timeline-desc">100+ hospitals served nationwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="about-values__container">
          <div className="section-header reveal">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">What Sets Us Apart</h2>
            <p className="section-subtitle">
              We don't just sell equipment — we partner with you for long-term success
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card reveal">
              <div className="value-icon">
                <AwardIcon />
              </div>
              <h3>Certified Quality</h3>
              <p>
                All our refurbished systems are tested against OEM specifications. Every unit comes 
                with full documentation and AERB compliance certificates.
              </p>
            </div>

            <div className="value-card reveal">
              <div className="value-icon">
                <UsersIcon />
              </div>
              <h3>Expert Technicians</h3>
              <p>
                GE-trained engineers with 10+ years of experience. Available for emergency breakdowns, 
                preventive maintenance, and annual contracts.
              </p>
            </div>

            <div className="value-card reveal">
              <div className="value-icon">
                <TargetIcon />
              </div>
              <h3>End-to-End Service</h3>
              <p>
                From site planning to installation, calibration, and ongoing support — we handle 
                everything so you can focus on patient care.
              </p>
            </div>

            <div className="value-card reveal">
              <div className="value-icon">
                <CheckCircleIcon />
              </div>
              <h3>Genuine Spare Parts</h3>
              <p>
                Direct sourcing from authorized distributors. Fast delivery across India with 
                in-house inventory for critical components.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="about-team__container">
          <div className="section-header reveal">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">Meet Our Team</h2>
          </div>

          <div className="team-grid">
            <div className="team-member reveal">
              <div className="member-image">
                <img src={kamleshyadav} alt="Kamlesh Yadav — Founder & Managing Director" className="member-photo" loading="lazy" />
              </div>
              <div className="member-info">
                <h3>Kamlesh Yadav</h3>
                <p className="member-role">Founder & Managing Director</p>
                <p className="member-bio">
                  "Our mission is simple: make advanced diagnostic technology accessible to every 
                  hospital in India. Quality equipment shouldn't be a luxury — it's a necessity 
                  for saving lives."
                </p>
              </div>
            </div>

            <div className="team-member reveal">
              <div className="member-image">
                <img src={mukeshpatel} alt="Mukesh Patel — Head of Technical Operations at SEE Imaging" className="member-photo" loading="lazy" />
              </div>
              <div className="member-info">
                <h3>Mukesh Patel</h3>
                <p className="member-role">Head of Technical Operations</p>
                <p className="member-bio">
                  "Every machine we deliver is backed by our commitment to excellence. Our team 
                  ensures zero-compromise quality through rigorous testing and certification."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="about-coverage">
        <div className="about-coverage__container">
          <div className="coverage-content reveal">
            <h2>Pan-India Service Coverage</h2>
            <p>
              Based in Bhopal, our service network extends across 20+ major cities in India. 
              From emergency breakdown support to scheduled preventive maintenance, our certified 
              technicians are just a call away.
            </p>
            <div className="coverage-cities">
              <span>Bhopal</span>
              <span>Indore</span>
              <span>Delhi</span>
              <span>Mumbai</span>
              <span>Bangalore</span>
              <span>Chennai</span>
              <span>Hyderabad</span>
              <span>Pune</span>
              <span>Jaipur</span>
              <span>Lucknow</span>
              <span>Nagpur</span>
              <span>Surat</span>
              <span>and more...</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="about-cta__container reveal">
          <h2>Ready to Upgrade Your Radiology Department?</h2>
          <p>
            Get a free consultation and quote for certified refurbished CT or MRI systems. 
            Our team will help you find the perfect solution for your hospital's needs.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Get Free Quote</a>
            <a href="/products" className="btn btn-secondary">View Equipment</a>
          </div>
        </div>
      </section>
    </div>
  )
}