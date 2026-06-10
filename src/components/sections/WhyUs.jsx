import useReveal from '../../hooks/useReveal'
import SectionLabel from '../ui/SectionLabel'
import AnimatedCounter from '../ui/AnimatedCounter'
import Icons from '../../constants/icons'
import { WHY_FEATURES, WHY_STATS } from '../../constants/data'
import './WhyUs.css'

export default function WhyUs() {
  const ref = useReveal()

  return (
    <section ref={ref} id="about" className="whyus reveal" aria-label="Why choose SEE Imaging">

      <div className="whyus__bg-pattern" />

      <div className="whyus__grid">

        {/* ── Left: text + features ── */}
        <div>
          <SectionLabel>Why choose us</SectionLabel>
          <h2 className="whyus__title">
            Built on Trust.<br />Backed by Expertise.
          </h2>
          <p className="whyus__sub">
            We've been installing and servicing radiology equipment across India
            for years. Our customers trust us because we deliver what we promise.
          </p>

          <div className="whyus__features">
            {WHY_FEATURES.map(({ iconKey, title, desc }) => (
              <div key={title} className="whyus__feat">
                <div className="whyus__feat-icon">{Icons[iconKey]}</div>
                <div>
                  <div className="whyus__feat-title">{title}</div>
                  <div className="whyus__feat-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: stats panel ── */}
        <div className="whyus__stats">
          {WHY_STATS.map(({ number, suffix, label, accent }) => (
            <div
              key={label}
              className={`whyus__stat ${accent ? 'whyus__stat--accent' : ''}`}
            >
              <div className="whyus__stat-number">
                <AnimatedCounter end={number} duration={2000} /><span className="whyus__stat-suffix">{suffix}</span>
              </div>
              <div className="whyus__stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
