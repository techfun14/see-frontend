import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Icons from '../../constants/icons'
import './AuthPage.css'

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
)

export default function SignupPage() {
  const navigate = useNavigate()
  const { signup, loginWithGoogle } = useAuth()
  const [form, setForm]   = useState({ name:'', email:'', password:'', confirm:'' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [gLoading, setGLoading] = useState(false)
  const [serverErr, setServerErr] = useState('')

  function validate() {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    if (form.password.length < 6) e.password = 'Password must be at least 6 characters'
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match'
    return e
  }

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setServerErr(''); setLoading(true)
    try {
      await signup(form.name, form.email, form.password)
      navigate('/dashboard', { replace: true })
    } catch (err) {
      setServerErr(err.message || 'Signup failed.')
    } finally { setLoading(false) }
  }

  async function handleGoogle() {
    setServerErr(''); setGLoading(true)
    try {
      await loginWithGoogle()
      navigate('/dashboard', { replace: true })
    } catch { setServerErr('Google sign-in failed.')
    } finally { setGLoading(false) }
  }

  return (
    <div className="auth-page">
      <div className="auth-page__left">
        <Link to="/" className="auth-page__brand">
          <div className="auth-page__brand-icon">{Icons.bolt}</div>
          <div>
            <div className="auth-page__brand-name">SEE Imaging</div>
            <div className="auth-page__brand-sub">Pvt Ltd, Bhopal</div>
          </div>
        </Link>
        <div className="auth-page__left-body">
          <h2 className="auth-page__left-title">Join SEE Imaging's service platform</h2>
          <p className="auth-page__left-sub">Create an account to schedule services, track machine health, and manage your maintenance contracts.</p>
          <div className="auth-page__features">
            <div className="auth-page__feature">
              <div className="auth-page__feature-icon">{Icons.shield}</div>
              <div><div className="auth-page__feature-title">Track all service visits</div><div className="auth-page__feature-desc">See scheduled, ongoing, and completed service history</div></div>
            </div>
            <div className="auth-page__feature">
              <div className="auth-page__feature-icon">{Icons.tool}</div>
              <div><div className="auth-page__feature-title">Schedule services online</div><div className="auth-page__feature-desc">Book PM visits and repair calls from your dashboard</div></div>
            </div>
            <div className="auth-page__feature">
              <div className="auth-page__feature-icon">{Icons.mail}</div>
              <div><div className="auth-page__feature-title">Instant notifications</div><div className="auth-page__feature-desc">Email and SMS when service is confirmed or updated</div></div>
            </div>
          </div>
        </div>
        <div className="auth-page__left-footer">© 2025 SEE Imaging and Electronics</div>
      </div>

      <div className="auth-page__right">
        <div className="auth-form-wrap">
          <div className="auth-form__title">Create account</div>
          <p className="auth-form__sub">Start managing your radiology equipment</p>

          <button className="auth-form__google" onClick={handleGoogle} disabled={gLoading || loading} type="button">
            <GoogleIcon />
            {gLoading ? 'Signing up...' : 'Sign up with Google'}
          </button>

          <div className="auth-form__divider">or create with email</div>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            {serverErr && <div className="auth-form__server-error">{serverErr}</div>}
            <div className="auth-form__field">
              <label className="auth-form__label">Full name</label>
              <input className="auth-form__input" type="text" name="name" placeholder="Dr. Rajesh Kumar" value={form.name} onChange={handleChange} />
              {errors.name && <span className="auth-form__error">{errors.name}</span>}
            </div>
            <div className="auth-form__field">
              <label className="auth-form__label">Email address</label>
              <input className="auth-form__input" type="email" name="email" placeholder="you@hospital.com" value={form.email} onChange={handleChange} />
              {errors.email && <span className="auth-form__error">{errors.email}</span>}
            </div>
            <div className="auth-form__field">
              <label className="auth-form__label">Password</label>
              <input className="auth-form__input" type="password" name="password" placeholder="At least 6 characters" value={form.password} onChange={handleChange} />
              {errors.password && <span className="auth-form__error">{errors.password}</span>}
            </div>
            <div className="auth-form__field">
              <label className="auth-form__label">Confirm password</label>
              <input className="auth-form__input" type="password" name="confirm" placeholder="Repeat password" value={form.confirm} onChange={handleChange} />
              {errors.confirm && <span className="auth-form__error">{errors.confirm}</span>}
            </div>
            <button type="submit" className="auth-form__submit" disabled={loading || gLoading}>
              {loading ? 'Creating account...' : 'Create Account →'}
            </button>
          </form>

          <p className="auth-form__footer">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
