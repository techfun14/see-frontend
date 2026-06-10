import useReveal from '../../hooks/useReveal'
import SectionLabel from '../ui/SectionLabel'
import { TESTIMONIALS } from '../../constants/data'
import './Testimonials.css'

function TestimonialCard({ initials, name, role, text }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__quote">"</div>
      <p className="testimonial-card__text">{text}</p>
      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar">{initials}</div>
        <div>
          <div className="testimonial-card__name">{name}</div>
          <div className="testimonial-card__role">{role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useReveal()

  return (
    <section ref={ref} className="testimonials reveal" aria-label="Client testimonials">

      <div className="testimonials__header">
        <SectionLabel>What clients say</SectionLabel>
        <h2 className="testimonials__title">Trusted Across India</h2>
        <p className="testimonials__sub">
          Hospitals and diagnostic centres rely on us for their
          radiology equipment needs.
        </p>
      </div>

      <div className="testimonials__grid">
        {TESTIMONIALS.map(t => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  )
}
