import { createContext, useContext, useState, useEffect } from 'react'
import { API_BASE } from '../constants/api'

// ─────────────────────────────────────────────────────────
//  AUTH CONTEXT — Admin only
//
//  HOW TO CREATE YOUR ADMIN ACCOUNT (first run):
//  1. Start Spring Boot backend
//  2. In Postman: POST http://localhost:8080/api/auth/signup
//     Body (JSON): { "name":"Shakti Admin", "email":"admin@shaktielectrical.in", "password":"your_password" }
//  3. Then login at http://localhost:5173/admin-login with those credentials
//
//  VITE_API_URL in .env: http://localhost:8080
// ─────────────────────────────────────────────────────────

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user,    setUser]    = useState(null)
  const [loading, setLoading] = useState(true)

  // Restore session from localStorage on page load
  // Does NOT call the backend — avoids 401 loop on every page load
  useEffect(() => {
    try {
      const stored = localStorage.getItem('shakti_admin')
      const token  = localStorage.getItem('shakti_token')
      if (stored && token) {
        setUser(JSON.parse(stored))
      }
    } catch {
      localStorage.removeItem('shakti_admin')
      localStorage.removeItem('shakti_token')
    } finally {
      setLoading(false)
    }
  }, [])

  // ── Login ──────────────────────────────────────────────
  async function login(email, password) {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message || 'Invalid email or password')
    }

    const role = (data.role || '').toLowerCase()
    if (role !== 'admin') {
      throw new Error('Access denied. This login is for the business owner only.')
    }

    const adminUser = {
      email:  data.email,
      name:   data.name,
      role:   'admin',
      avatar: data.avatar || data.name?.slice(0, 2).toUpperCase() || 'AD',
    }

    setUser(adminUser)
    localStorage.setItem('shakti_admin', JSON.stringify(adminUser))
    localStorage.setItem('shakti_token', data.token)

    return adminUser
  }

  // ── Logout ─────────────────────────────────────────────
  function logout() {
    setUser(null)
    localStorage.removeItem('shakti_admin')
    localStorage.removeItem('shakti_token')
  }

  // ── Get auth header for protected API calls ────────────
  function authHeader() {
    const token = localStorage.getItem('shakti_token')
    return token ? { 'Authorization': `Bearer ${token}` } : {}
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, authHeader }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
