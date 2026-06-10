import { useEffect, useState, useCallback } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

// Layout
import Navbar            from './components/layout/Navbar'
import Footer            from './components/layout/Footer'
import WhatsAppBtn       from './components/ui/WhatsAppBtn'
import ProtectedRoute    from './components/ui/ProtectedRoute'
import IntroAnimation    from './components/ui/IntroAnimation'

// Public pages — NO login required for any of these
import HomePage          from './pages/HomePage'
import ProductsPage      from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ServicesPage      from './pages/ServicesPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import AboutPage         from './pages/AboutPage'
import ContactPage       from './pages/ContactPage'
import NotFoundPage      from './pages/NotFoundPage'

// Admin login — only login page, no public signup
import AdminLoginPage    from './pages/auth/AdminLoginPage'

// Admin panel — only accessible after admin login
import AdminLayout       from './pages/admin/AdminLayout'
import AdminDashboard    from './pages/admin/AdminDashboard'
import ServiceSchedulesPage   from './pages/admin/ServiceSchedulesPage'
import AdminServicesManagePage from './pages/admin/AdminServicesManagePage'
import EnquiriesPage          from './pages/admin/EnquiriesPage'

function ScrollToTopAndPrerender() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.dispatchEvent(new Event('prerender-ready'))
  }, [pathname])
  return null
}

// ── Public shell (navbar + footer visible) ───────────────
function PublicShell() {
  const [introReady, setIntroReady] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const handleIntroDone = useCallback(() => setIntroReady(true), [])

  // Skip intro for non-home pages
  useEffect(() => {
    if (!isHome) setIntroReady(true)
  }, [isHome])

  return (
    <>
      <ScrollToTopAndPrerender />

      {/* Intro animation — only on homepage, once per session */}
      {isHome && <IntroAnimation onComplete={handleIntroDone} />}

      <Navbar />
      <main>
        <Routes>
          <Route path="/"               element={<HomePage />}          />
          <Route path="/products"       element={<ProductsPage />}      />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/services"       element={<ServicesPage />}      />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/about"         element={<AboutPage />}           />
          <Route path="/contact"        element={<ContactPage />}       />
          <Route path="*"              element={<NotFoundPage />}      />
        </Routes>
      </main>
      <Footer />
      <WhatsAppBtn />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Admin login — no navbar/footer */}
        <Route path="/admin-login" element={<AdminLoginPage />} />

        {/* Admin panel — requires admin role */}
        <Route path="/admin" element={
          <ProtectedRoute role="admin">
            <AdminLayout role="admin" />
          </ProtectedRoute>
        }>
          <Route index                element={<AdminDashboard />}            />
          <Route path="schedules"     element={<ServiceSchedulesPage />}      />
          <Route path="enquiries"     element={<EnquiriesPage />}             />
          <Route path="services-manage" element={<AdminServicesManagePage />} />
        </Route>

        {/* All public routes — NO auth needed */}
        <Route path="/*" element={<PublicShell />} />

      </Routes>
    </BrowserRouter>
  )
}
