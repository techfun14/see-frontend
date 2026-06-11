import { useState } from 'react'
import { ALL_MACHINES, ALL_MACHINE_GROUPS, INDIAN_STATES } from '../../constants/formOptions'
import { API_BASE } from '../../constants/api'
import './ServiceScheduleForm.css'

const INITIAL = { name:'', phone:'', email:'', hospital:'', city:'', state:'', machine:'', urgency:'', problem:'' }

export default function ServiceScheduleForm({ serviceTitle, urgencyOptions }) {
  const [form, setForm]             = useState(INITIAL)
  const [errors, setErrors]         = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted]   = useState(false)
  const [serverErr, setServerErr]   = useState('')

  function validate() {
    const e = {}
    if (!form.name.trim())  e.name    = 'Required'
    if (!form.phone.trim()) e.phone   = 'Required'
    if (!form.city.trim())  e.city    = 'Required'
    if (!form.state)        e.state   = 'Required'
    if (!form.machine)      e.machine = 'Required'
    if (!form.problem.trim()) e.problem = 'Please describe the issue'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setServerErr(''); setSubmitting(true)
    try {
      const res = await fetch(`${API_BASE}/service-requests`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...form, serviceType: serviceTitle }),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.message || 'Submission failed')
      }
      setSubmitted(true)
      setForm(INITIAL)
    } catch (err) {
      setServerErr(err.message || 'Something went wrong. Call +91-9424482233.')
    } finally { setSubmitting(false) }
  }

  if (submitted) return (
    <div className="ssf__success">
      <div className="ssf__success-icon">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <div className="ssf__success-title">Request Submitted!</div>
      <p className="ssf__success-sub">Our team will call you back within 2–4 hours.</p>
    </div>
  )

  return (
    <form className="ssf" onSubmit={handleSubmit} noValidate>
      <div className="ssf__field">
        <label className="ssf__label">Service required</label>
        <input className="ssf__input ssf__prefilled" value={serviceTitle} readOnly tabIndex={-1} />
      </div>
      <div className="ssf__row">
        <div className="ssf__field">
          <label className="ssf__label">Full name *</label>
          <input className="ssf__input" name="name" placeholder="Dr. Rajesh Kumar" value={form.name} onChange={handleChange} />
          {errors.name && <span className="ssf__error">{errors.name}</span>}
        </div>
        <div className="ssf__field">
          <label className="ssf__label">Phone *</label>
          <input className="ssf__input" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
          {errors.phone && <span className="ssf__error">{errors.phone}</span>}
        </div>
      </div>
      <div className="ssf__row">
        <div className="ssf__field">
          <label className="ssf__label">Hospital / Clinic</label>
          <input className="ssf__input" name="hospital" placeholder="City Diagnostic Centre" value={form.hospital} onChange={handleChange} />
        </div>
        <div className="ssf__field">
          <label className="ssf__label">Email</label>
          <input className="ssf__input" name="email" type="email" placeholder="you@hospital.com" value={form.email} onChange={handleChange} />
        </div>
      </div>
      <div className="ssf__row">
        <div className="ssf__field">
          <label className="ssf__label">City *</label>
          <input className="ssf__input" name="city" placeholder="Indore" value={form.city} onChange={handleChange} />
          {errors.city && <span className="ssf__error">{errors.city}</span>}
        </div>
        <div className="ssf__field">
          <label className="ssf__label">State *</label>
          <div className="ssf__select-wrap">
          <select className="ssf__select" name="state" value={form.state} onChange={handleChange}>
            <option value="">— Select state —</option>
            {INDIAN_STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          </div>
          {errors.state && <span className="ssf__error">{errors.state}</span>}
        </div>
      </div>
      <div className="ssf__field">
        <label className="ssf__label">Machine model *</label>
        <div className="ssf__select-wrap">
        <select className="ssf__select" name="machine" value={form.machine} onChange={handleChange}>
          <option value="">— Select your machine —</option>
          {ALL_MACHINE_GROUPS.map(group => {
            const ms = ALL_MACHINES.filter(m => m.group === group)
            return ms.length ? (
              <optgroup key={group} label={group}>
                {ms.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
              </optgroup>
            ) : null
          })}
        </select>
        </div>
        {errors.machine && <span className="ssf__error">{errors.machine}</span>}
      </div>
      {urgencyOptions?.length > 0 && (
        <div className="ssf__field">
          <label className="ssf__label">Urgency / Visit type</label>
          <div className="ssf__select-wrap">
          <select className="ssf__select" name="urgency" value={form.urgency} onChange={handleChange}>
            <option value="">— Select —</option>
            {urgencyOptions.map(o => <option key={o} value={o}>{o}</option>)}
          </select>
          </div>
        </div>
      )}
      <div className="ssf__field">
        <label className="ssf__label">Describe the problem / requirement *</label>
        <textarea className="ssf__textarea" name="problem" placeholder="e.g. Machine showing error E-421, gantry stopped rotating..." value={form.problem} onChange={handleChange} />
        {errors.problem && <span className="ssf__error">{errors.problem}</span>}
      </div>
      {serverErr && <p className="ssf__server-error">{serverErr}</p>}
      <button type="submit" className="ssf__submit" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit Service Request →'}
      </button>
    </form>
  )
}
