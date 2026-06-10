import useReveal from '../../hooks/useReveal'
import SectionLabel from '../ui/SectionLabel'
import Icons from '../../constants/icons'
import { WHAT_WE_DO } from '../../constants/data'
import './WhatWeDo.css'

export default function WhatWeDo() {
  const ref = useReveal()

  return (
    <section ref={ref} className="wwd reveal" aria-label="What we do">

      <div className="wwd__header">
        <SectionLabel>What we do</SectionLabel>
        <h2 className="wwd__title">Complete Radiology Equipment Solutions</h2>
        <p className="wwd__sub">
          From sales and installation to ongoing maintenance — we handle everything
          so you can focus on patient care.
        </p>
      </div>

      <div className="wwd__grid">
        {WHAT_WE_DO.map(({ iconKey, title, desc }) => (
          <div key={title} className="wwd__card stagger-child">
            <div className="wwd__icon">{Icons[iconKey]}</div>
            <h3 className="wwd__card-title">{title}</h3>
            <p className="wwd__card-desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
