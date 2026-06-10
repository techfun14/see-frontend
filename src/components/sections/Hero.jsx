import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { HERO_STATS } from '../../constants/data'
import HeroBackground from '../ui/HeroBackground'
import AnimatedCounter from '../ui/AnimatedCounter'
import './Hero.css'
import landingImg from '../../assets/images/ct-Scanner16/Ct-Scanner1632image.jpeg'
import ge64slice from '../../assets/images/ct64slice.png';
import ctscanner from  '../../assets/images/imagectScanner.jpg'
import brivo385 from '../../assets/images/brivo385.jpg'
// ──────────────────────────────────────────────────────────────────
//  SLIDE CONFIG
//
//  image: path to your photo in /public/images/hero/
//  Works perfectly with PORTRAIT (vertical) photos.
//  Recommended: any size, JPG/WEBP, under 500KB
//
//  Example: image: '/images/hero/ct-machine-1.jpg'
//  Place files in: public/images/hero/
// ──────────────────────────────────────────────────────────────────
const SLIDES = [
  {
    id: 1,
    badge: 'Pan India Service Support',
    lines: ['Trusted Experts in', 'Refurbished GE', 'CT Scan & MRI Systems'],
    accent: 1,             // index of line that gets orange colour
    sub: 'From Single Slice to 128 Slice CT machines. Quality-tested, certified, and backed by full installation and AMC support across India.',
    btn1: { label: 'Send Enquiry',   to: '/contact'  },
    btn2: { label: 'View Products',  to: '/products' },
    image: landingImg,           // 👉 '/images/hero/slide1.jpg'
    label: 'CT',           // shown in thumbnail strip when no image
    showStats: true,
  },
  {
    id: 2,
    badge: 'GE Revolution Series',
    lines: ['GE Revolution CT', '4, 16 & 64 Slice', 'Now Available'],
    accent: 0,
    sub: 'Latest GE Revolution CT platform — advanced ASiR low-dose technology and faster throughput. Fully refurbished and certified.',
    btn1: { label: 'View Revolution CT', to: '/products/ge-revolutionary-16-slice' },
    btn2: { label: 'Get Enquiry',        to: '/contact' },
    image: ge64slice,           // 👉 '/images/hero/slide2.jpg'
    label: 'CT',
    showStats: false,
  },
  {
    id: 3,
    badge: 'Emergency Response — Pan India',
    lines: ['Machine Down?', 'We Come to Your City'],
    accent: 1,
    sub: 'CT or MRI machine malfunction? Our GE-trained technicians travel anywhere in India. One call — technician dispatched within hours.',
    btn1: { label: 'Schedule Repair', to: '/services/breakdown-repair' },
    btn2: { label: 'Call Now',        to: 'tel:+919424482233' },
    image: ctscanner,           // 👉 '/images/hero/slide3.jpg'
    label: 'SVC',
    showStats: false,
  },
  {
    id: 4,
    badge: 'Annual & Comprehensive Contracts',
    lines: ['AMC & CMC', 'Maintenance Contracts', 'Available Now'],
    accent: 2,
    sub: 'One annual price — all service visits, labour, and travel included. CMC covers spare parts with full warranty on all replaced components.',
    btn1: { label: 'View AMC', to: '/services/amc' },
    btn2: { label: 'View CMC', to: '/services/cmc' },
    image: brivo385,           // 👉 '/images/hero/slide4.jpg'
    label: 'AMC',
    showStats: false,
  },
]

const INTERVAL = 5500

export default function Hero() {
  const [current,  setCurrent]  = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef(null)
  const rafRef      = useRef(null)
  const startRef    = useRef(Date.now())

  const goTo = useCallback(idx => {
    setCurrent(idx)
    setProgress(0)
    startRef.current = Date.now()
  }, [])

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo])

  useEffect(() => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(next, INTERVAL)
    return () => clearInterval(intervalRef.current)
  }, [next])

  useEffect(() => {
    startRef.current = Date.now()
    const tick = () => {
      const pct = Math.min(((Date.now() - startRef.current) / INTERVAL) * 100, 100)
      setProgress(pct)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [current])

  return (
    <section className="hero">
      <HeroBackground />

      {SLIDES.map((s, i) => (
        <div key={s.id} className={`hero__slide ${i === current ? 'active' : ''}`}>

          {/* ── LEFT — text ────────────────────────────── */}
          <div className="hero__left">
            <div className="hero__text">

              <div className="hero__badge">
                <div className="hero__badge-dot" />
                <span className="hero__badge-text">{s.badge}</span>
              </div>

              <h1 className="hero__heading">
                {s.lines.map((line, li) => (
                  <span key={li}>
                    {li === s.accent
                      ? <span className="hero__accent">{line}</span>
                      : line
                    }
                    {li < s.lines.length - 1 && <br />}
                  </span>
                ))}
              </h1>

              <p className="hero__sub">{s.sub}</p>

              <div className="hero__btns">
                <Link to={s.btn1.to} className="hero__btn-primary">{s.btn1.label}</Link>
                <Link to={s.btn2.to} className="hero__btn-outline">{s.btn2.label}</Link>
              </div>

              {s.showStats && (
                <div className="hero__stats">
                  {HERO_STATS.map(({ number, suffix, label }) => (
                    <div key={label}>
                      <div className="hero__stat-number">
                        <AnimatedCounter end={number} duration={2200} /><span className="hero__stat-suffix">{suffix}</span>
                      </div>
                      <div className="hero__stat-label">{label}</div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>

          {/* ── RIGHT — photo ───────────────────────────── */}
          <div className="hero__right">
            {/* Blurred background for gaps around portrait photos */}
            {s.image && (
              <div
                className="hero__photo-blur"
                style={{ backgroundImage: `url(${s.image})` }}
              />
            )}

            {s.image ? (
              <img
                src={s.image}
                alt={`SEE Imaging — ${s.badge} — refurbished GE CT scan and MRI equipment`}
                className="hero__photo"
                loading={i === 0 ? 'eager' : 'lazy'}
                width="600"
                height="500"
              />
            ) : (
              /* Placeholder when no image yet */
              <div className="hero__photo-placeholder">
                <div className="hero__photo-placeholder-icon">{s.label}</div>
                <div className="hero__photo-placeholder-text">Photo coming soon</div>
              </div>
            )}

            {/* Thumbnail strip — Hotstar style */}
            <div className="hero__strip">
              {SLIDES.map((ts, ti) => (
                <div
                  key={ts.id}
                  className={`hero__strip-thumb ${ti === current ? 'active' : ''}`}
                  onClick={() => goTo(ti)}
                >
                  {ts.image
                    ? <img src={ts.image} alt={`${ts.badge} thumbnail`} loading="lazy" width="60" height="60" />
                    : <span className="hero__strip-label">{ts.label}</span>
                  }
                </div>
              ))}
              <button className="hero__strip-arrow" onClick={next}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      ))}

      {/* Prev / Next arrows */}
      <button className="hero__arrow hero__arrow--prev" onClick={prev} aria-label="Previous">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <button className="hero__arrow hero__arrow--next" onClick={next} aria-label="Next">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      {/* Dots */}
      <div className="hero__dots">
        {SLIDES.map((s, i) => (
          <button key={s.id} className={`hero__dot ${i === current ? 'active' : ''}`} onClick={() => goTo(i)} />
        ))}
      </div>

      {/* Progress bar */}
      <div className="hero__progress" style={{ width: `${progress}%` }} />

    </section>
  )
}
