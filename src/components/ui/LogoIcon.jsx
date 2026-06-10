// Logo icon — SEE Imaging reference-accurate recreation
// Gold crescent + black ring + viewfinder + gold bar + black bar + black bowl
// Always #2D2D2D for non-gold elements (sits on white background in navbar)

import { useId } from 'react'

export default function LogoIcon({ size = 40, className = '' }) {
  // Unique gradient id per instance — prevents collisions when more than one
  // LogoIcon is on the page (e.g. admin sidebar + hidden mobile header), which
  // would otherwise make the gold fill disappear.
  const uid = useId()
  const goldId = `logoGold-${uid}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 260 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={goldId} x1="200" y1="20" x2="60" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E0B840"/>
          <stop offset="45%" stopColor="#D4A437"/>
          <stop offset="100%" stopColor="#B8851F"/>
        </linearGradient>
      </defs>

      {/* ── Gold crescent — bold C-shape, thick RIGHT, tapered tips LEFT ── */}
      <path
        d="M 70 35 A 103 103 0 1 1 70 190 A 84 84 0 1 0 70 35 Z"
        fill={`url(#${goldId})`}
      />

      {/* ── Black circular ring ── */}
      <circle cx="130" cy="112" r="68" stroke="#2D2D2D" strokeWidth="13" fill="none" />

      {/* ── Viewfinder notch ── */}
      <rect x="123" y="40" width="14" height="10" rx="2" fill="#2D2D2D" />

      {/* ── Bar 1 — GOLD ── */}
      <line x1="48" y1="138" x2="212" y2="138" stroke={`url(#${goldId})`} strokeWidth="8" strokeLinecap="round" />

      {/* ── Bar 2 — BLACK ── */}
      <line x1="62" y1="152" x2="198" y2="152" stroke="#2D2D2D" strokeWidth="5" strokeLinecap="round" />

      {/* ── Bar 3 — BLACK semi-circular bowl ── */}
      <path d="M 80 156 Q 130 212 180 156 Z" fill="#2D2D2D" />
    </svg>
  )
}
