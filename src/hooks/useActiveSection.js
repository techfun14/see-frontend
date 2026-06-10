import { useState, useEffect } from 'react'

// Returns the id of the section currently in view
// Usage:
//   const active = useActiveSection(['products','services','about','contact'])
//   then use: className={active === 'products' ? 'navbar__link--active' : ''}

export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observers = sectionIds.map(id => {
      const el = document.getElementById(id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.4 }
      )
      observer.observe(el)
      return observer
    }).filter(Boolean)

    return () => observers.forEach(o => o.disconnect())
  }, [sectionIds])

  return active
}
