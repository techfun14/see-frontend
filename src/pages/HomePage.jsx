import Hero         from '../components/sections/Hero'
import WhatWeDo     from '../components/sections/WhatWeDo'
import Products     from '../components/sections/Products'
import WhyUs        from '../components/sections/WhyUs'
import Services     from '../components/sections/Services'
import Testimonials from '../components/sections/Testimonials'
import CTA          from '../components/sections/CTA'
import SEO          from '../components/seo/SEO'
import { organizationSchema, websiteSchema } from '../components/seo/structuredData'

export default function HomePage() {
  return (
    <>
      <SEO
        path="/"
        description="SEE Imaging — India's trusted source for refurbished GE CT Scan machines (Single to 128 Slice), MRI systems, spare parts, AMC/CMC contracts, and pan India service support from Bhopal."
        keywords="refurbished CT scan, GE CT scanner India, refurbished MRI system, CT scan spare parts, AMC CMC contract, medical imaging equipment Bhopal, SEE Imaging"
        jsonLd={[organizationSchema, websiteSchema]}
      />
      <Hero />
      <WhatWeDo />
      <Products />
      <WhyUs />
      <Services />
      <Testimonials />
      <CTA />
    </>
  )
}
