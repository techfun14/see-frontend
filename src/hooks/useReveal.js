import { useRef, useEffect } from 'react'

// Adds 'visible' class when the element enters the viewport
// Usage:
//   const ref = useReveal()
//   return <section ref={ref} className="reveal"> ... </section>

export default function useReveal(threshold = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
