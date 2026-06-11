import { useState } from 'react'
import { PRODUCT_ENQUIRY_OPTIONS, INDIAN_STATES } from '../../constants/formOptions'
import { API_BASE } from '../../constants/api'
import './EnquiryForm.css'

const INITIAL = { name:'', phone:'', email:'', city:'', hospital:'', product:'', message:'' }

export default function EnquiryForm() {
  const [form, setForm]             = useState(INITIAL)
  const [errors, setErrors]         = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted]   = useState(false)
  const [serverError, setServerError] = useState('')

  function validate() {
    const e = {}
    if (!form.name.trim())  e.name      = 'Name is required'
    if (!form.phone.trim()) e.phone     = 'Phone is required'
    if (!form.city.trim())  e.city      = 'City is required'
    if (!form.product)      e.product = 'Please select equipment or service'
    // Email is optional
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Invalid email format'
    }
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitting(true); setServerError('')
    try {
      const res = await fetch(`${API_BASE}/enquiry`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.message || 'Submission failed')
      }
      setSubmitted(true)
      setForm(INITIAL)
    } catch (err) {
      setServerError(err.message || 'Something went wrong. Please call us directly.')
    } finally { setSubmitting(false) }
  }

  if (submitted) return (
    <div className="enquiry-form__success">
      <div className="enquiry-form__success-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <div className="enquiry-form__success-title">Enquiry Sent!</div>
      <p className="enquiry-form__success-sub">Thank you. Our team will call you back within 24 hours.</p>
    </div>
  )

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="enquiry-form__row">
        <div className="enquiry-form__field">
          <label className="enquiry-form__label">Full name *</label>
          <input className="enquiry-form__input" type="text" name="name" placeholder="Dr. Rajesh Kumar" value={form.name} onChange={handleChange} />
          {errors.name && <span className="enquiry-form__error">{errors.name}</span>}
        </div>
        <div className="enquiry-form__field">
          <label className="enquiry-form__label">Phone *</label>
          <input className="enquiry-form__input" type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
          {errors.phone && <span className="enquiry-form__error">{errors.phone}</span>}
        </div>
      </div>
      <div className="enquiry-form__row">
        <div className="enquiry-form__field">
          <label className="enquiry-form__label">Email</label>
          <input className="enquiry-form__input" type="email" name="email" placeholder="yourname@hospital.com" value={form.email} onChange={handleChange} />
          {errors.email && <span className="enquiry-form__error">{errors.email}</span>}
        </div>
        <div className="enquiry-form__field">
          <label className="enquiry-form__label">City *</label>
          <input className="enquiry-form__input" type="text" name="city" placeholder="Bhopal" value={form.city} onChange={handleChange} />
          {errors.city && <span className="enquiry-form__error">{errors.city}</span>}
        </div>
      </div>
      <div className="enquiry-form__row">
        <div className="enquiry-form__field">
          <label className="enquiry-form__label">Hospital / Clinic</label>
          <input className="enquiry-form__input" type="text" name="hospital" placeholder="City Hospital" value={form.hospital} onChange={handleChange} />
        </div>
        <div className="enquiry-form__field">
          <label className="enquiry-form__label">Interested in *</label>
          <select className="enquiry-form__select" name="product" value={form.product} onChange={handleChange}>
            <option value="">— Select product or service —</option>
            <optgroup label="CT Scanners">
              {PRODUCT_ENQUIRY_OPTIONS.slice(0,9).map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </optgroup>
            <optgroup label="MRI & Other">
              {PRODUCT_ENQUIRY_OPTIONS.slice(9).map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </optgroup>
          </select>
          {errors.product && <span className="enquiry-form__error">{errors.product}</span>}
        </div>
      </div>
      <div className="enquiry-form__field">
        <label className="enquiry-form__label">Message (optional)</label>
        <textarea className="enquiry-form__textarea" name="message" placeholder="Tell us more about your requirement..." value={form.message} onChange={handleChange} />
      </div>
      {serverError && <p className="enquiry-form__error" style={{textAlign:'center'}}>{serverError}</p>}
      <button type="submit" className="enquiry-form__submit" disabled={submitting}>
        {submitting ? 'Sending...' : 'Send Enquiry →'}
      </button>
    </form>
  )
}
