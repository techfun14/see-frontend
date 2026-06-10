import { useState, useEffect } from 'react'
import './IntroAnimation.css'

// Full-screen logo reveal animation — SEE Imaging
export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState('active')

  useEffect(() => {
    if (sessionStorage.getItem('see_intro_done')) {
      setPhase('done')
      onComplete?.()
      return
    }

    const fadeTimer = setTimeout(() => setPhase('fade'), 2800)
    const doneTimer = setTimeout(() => {
      setPhase('done')
      sessionStorage.setItem('see_intro_done', '1')
      onComplete?.()
    }, 3400)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(doneTimer)
    }
  }, [onComplete])

  if (phase === 'done') return null

  return (
    <div className={`intro ${phase === 'fade' ? 'intro--fade' : ''}`}>
      <div className="intro__particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="intro__particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }} />
        ))}
      </div>

      <div className="intro__content">
        <svg className="intro__logo" viewBox="0 0 260 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="introGold" x1="200" y1="20" x2="60" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E0B840"/>
              <stop offset="45%" stopColor="#D4A437"/>
              <stop offset="100%" stopColor="#B8851F"/>
            </linearGradient>
          </defs>

          {/* Gold crescent — draws in, bold C-shape on RIGHT */}
          <path
            d="M 70 35 A 96 96 0 1 1 70 190"
            stroke="url(#introGold)"
            strokeWidth="24"
            fill="none"
            strokeLinecap="round"
            className="intro__arc"
          />

          {/* Ring — draws in */}
          <circle
            cx="130" cy="112" r="68"
            stroke="#2D2D2D"
            strokeWidth="13"
            fill="none"
            className="intro__ring"
          />

          {/* Viewfinder notch — fades in */}
          <rect x="123" y="40" width="14" height="10" rx="2" fill="#2D2D2D" className="intro__window" />

          {/* Bar 1 — GOLD, draws in */}
          <line x1="48" y1="138" x2="212" y2="138" stroke="url(#introGold)" strokeWidth="8" strokeLinecap="round" className="intro__bed" />

          {/* Bar 2 — DARK, draws in */}
          <line x1="62" y1="152" x2="198" y2="152" stroke="#2D2D2D" strokeWidth="5" strokeLinecap="round" className="intro__bed2" />

          {/* Bar 3 — DARK semi-circular base, fades in */}
          <path d="M 80 156 Q 130 212 180 156 Z" fill="#2D2D2D" className="intro__bowl" />
        </svg>

        <div className="intro__text">
          <span className="intro__see">SEE</span>
          <span className="intro__imaging">IMAGING</span>
        </div>

        <div className="intro__tagline">Advanced Diagnostic Solutions</div>
      </div>

      <div className="intro__scanline" />
    </div>
  )
}
