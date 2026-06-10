import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

// Only used to protect /admin/* routes
// Any non-admin who hits /admin gets sent to /admin-login
export default function ProtectedRoute({ children, role }) {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'center',
        minHeight:'100vh', background:'#F4F7FB',
        fontFamily:"'Sora',sans-serif", fontSize:13, color:'#7A8FA6', letterSpacing:'.04em',
      }}>
        Loading...
      </div>
    )
  }

  // Not logged in at all
  if (!user) {
    return <Navigate to="/admin-login" state={{ from: location }} replace />
  }

  // Logged in but not admin
  if (role === 'admin' && user.role !== 'admin') {
    return <Navigate to="/admin-login" replace />
  }

  return children
}
