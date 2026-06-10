import { useEffect, useRef } from 'react'
import './HeroBackground.css'

export default function HeroBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const PARTICLE_COUNT = 30
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.25,
      dy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.25 + 0.05,
      color: Math.random() > 0.6 ? '212,164,55' : '255,255,255',
    }))

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      particles.forEach(p => {
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(212,164,55, ${0.04 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="hero-bg">
      <canvas ref={canvasRef} className="hero-bg__canvas" />
      <div className="hero-bg__ghost-logo">
        <svg viewBox="0 0 260 240" fill="none">
          <defs>
            <linearGradient id="ghostGold" x1="200" y1="20" x2="60" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D4A437" stopOpacity="0.06"/>
              <stop offset="100%" stopColor="#B8851F" stopOpacity="0.02"/>
            </linearGradient>
          </defs>
          <path d="M 70 35 A 103 103 0 1 1 70 190 A 84 84 0 1 0 70 35 Z"
            fill="url(#ghostGold)" className="hero-bg__ghost-arc" />
          <circle cx="130" cy="112" r="68"
            stroke="rgba(255,255,255,0.03)" strokeWidth="8" fill="none"
            className="hero-bg__ghost-ring" />
          <circle cx="130" cy="112" r="68"
            stroke="rgba(212,164,55,0.12)" strokeWidth="3"
            strokeDasharray="30 397" fill="none"
            className="hero-bg__ghost-sweep" />
        </svg>
      </div>
      <div className="hero-bg__orb hero-bg__orb--gold" />
    </div>
  )
}
