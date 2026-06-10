import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import LogoIcon from '../../components/ui/LogoIcon'
import Icons from '../../constants/icons'
import './AuthPage.css'

export default function AdminLoginPage() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [form, setForm]       = useState({ email: '', password: '' })
  const [errors, setErrors]   = useState({})
  const [loading, setLoading] = useState(false)
  const [serverErr, setServerErr] = useState('')

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  function validate() {
    const e = {}
    if (!form.email.trim())    e.email    = 'Required'
    if (!form.password.trim()) e.password = 'Required'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setServerErr(''); setLoading(true)
    try {
      const user = await login(form.email, form.password)
      if (user.role !== 'admin') {
        setServerErr('Access denied. This login is for the business owner only.')
        return
      }
      navigate('/admin', { replace: true })
    } catch (err) {
      setServerErr(err.message || 'Invalid credentials')
    } finally { setLoading(false) }
  }

  return (
    <div className="auth-page">
      {/* Left panel */}
      <div className="auth-page__left">
        <Link to="/" className="auth-page__brand">
          <div className="auth-page__brand-icon"><LogoIcon size={34} /></div>
          <div>
            <div className="auth-page__brand-name">SEE Imaging</div>
            <div className="auth-page__brand-sub">Bhopal</div>
          </div>
        </Link>
        <div className="auth-page__left-body">
          <h2 className="auth-page__left-title">Owner &amp; Admin<br />Access Portal</h2>
          <p className="auth-page__left-sub">
            Manage service schedules, product listings, enquiries, and track your business — all from one place.
          </p>
          <div className="auth-page__features">
            <div className="auth-page__feature">
              <div className="auth-page__feature-icon">{Icons.shield}</div>
              <div>
                <div className="auth-page__feature-title">Manage service schedules</div>
                <div className="auth-page__feature-desc">View, assign technicians, update status and notify customers</div>
              </div>
            </div>
            <div className="auth-page__feature">
              <div className="auth-page__feature-icon">{Icons.cart}</div>
              <div>
                <div className="auth-page__feature-title">Product availability</div>
                <div className="auth-page__feature-desc">Toggle products live or hidden, update details instantly</div>
              </div>
            </div>
            <div className="auth-page__feature">
              <div className="auth-page__feature-icon">{Icons.mail}</div>
              <div>
                <div className="auth-page__feature-title">All enquiries in one place</div>
                <div className="auth-page__feature-desc">Track every product enquiry with callback status</div>
              </div>
            </div>
          </div>
        </div>
        <div className="auth-page__left-footer">
          © {new Date().getFullYear()} SEE Imaging and Electronics
        </div>
      </div>

      {/* Right panel */}
      <div className="auth-page__right">
        <div className="auth-form-wrap">
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:6 }}>
            <div style={{ width:36, height:36, borderRadius:8, background:'var(--bg-alt)', border:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--text-muted)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
            </div>
            <div className="auth-form__title" style={{marginBottom:0}}>Owner Login</div>
          </div>
          <p className="auth-form__sub">
            This area is restricted to the business owner only.
          </p>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {serverErr && <div className="auth-form__server-error">{serverErr}</div>}
            <div className="auth-form__field">
              <label className="auth-form__label">Email address</label>
              <input className="auth-form__input" type="email" name="email"
                placeholder="owner@seeimaging.com" value={form.email} onChange={handleChange} autoComplete="email" />
              {errors.email && <span className="auth-form__error">{errors.email}</span>}
            </div>
            <div className="auth-form__field">
              <label className="auth-form__label">Password</label>
              <input className="auth-form__input" type="password" name="password"
                placeholder="••••••••" value={form.password} onChange={handleChange} autoComplete="current-password" />
              {errors.password && <span className="auth-form__error">{errors.password}</span>}
            </div>
            <button type="submit" className="auth-form__submit" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In to Admin Panel →'}
            </button>
          </form>

          <p style={{ marginTop:20, textAlign:'center', fontSize:12, color:'var(--text-muted)' }}>
            <Link to="/" style={{ color:'var(--blue)' }}>← Back to website</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
