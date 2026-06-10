import CTA from '../components/sections/CTA'
import SEO from '../components/seo/SEO'
import { organizationSchema } from '../components/seo/structuredData'

export default function ContactPage() {
  return (
    <div className="contact-page">
      <SEO
        title="Contact Us — Get a Free Quote"
        description="Contact SEE Imaging for refurbished GE CT Scanners, MRI systems, spare parts, and AMC/CMC contracts. Call +91-9424482233 or enquire online. Bhopal, Madhya Pradesh, India."
        path="/contact"
        keywords="contact SEE Imaging, CT scan enquiry India, MRI quote Bhopal, medical equipment enquiry, AMC CMC quote"
        jsonLd={organizationSchema}
      />
      <CTA />
    </div>
  )
}
