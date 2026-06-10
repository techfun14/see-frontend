import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function AdminDashboard() {
  const { user, authHeader } = useAuth()
  const [stats,     setStats]     = useState(null)
  const [schedules, setSchedules] = useState([])
  const [enquiries, setEnquiries] = useState([])
  const [loading,   setLoading]   = useState(true)

  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
        const [svcRes, enqRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_API_URL}/api/service-requests`, { headers: authHeader() }),
          fetch(`${import.meta.env.VITE_API_URL}/api/enquiry`,          { headers: authHeader() }),
        ])

        const svcData = svcRes.ok ? await svcRes.json() : []
        const enqData = enqRes.ok ? await enqRes.json() : []

        const newEnq       = enqData.filter(e => (e.status||'').toUpperCase() === 'NEW').length
        const scheduled    = svcData.filter(s => (s.status||'').toUpperCase() === 'SCHEDULED').length
        const ongoing      = svcData.filter(s => (s.status||'').toUpperCase() === 'ONGOING').length
        const totalSvc     = svcData.length

        setStats([
          { label: 'New Enquiries',        value: newEnq,    sub: 'Awaiting callback',  dot: 'orange' },
          { label: 'Services Scheduled',   value: scheduled, sub: 'Upcoming visits',    dot: 'blue'   },
          { label: 'Services in Progress', value: ongoing,   sub: 'Technician on-site', dot: 'green'  },
          { label: 'Total Service Requests', value: totalSvc, sub: `All time`,          dot: 'blue' },
        ])

        // Most recent 5
        setSchedules([...svcData].sort((a,b) => (b.id||0)-(a.id||0)).slice(0,5))
        setEnquiries([...enqData].sort((a,b) => (b.id||0)-(a.id||0)).slice(0,3))
      } catch (err) {
        console.error('Dashboard load error:', err)
        // Show zeros if backend unreachable
        setStats([
          { label: 'New Enquiries',        value: 0, sub: 'Backend unreachable', dot: 'orange' },
          { label: 'Services Scheduled',   value: 0, sub: '—',                  dot: 'blue'   },
          { label: 'Services in Progress', value: 0, sub: '—',                  dot: 'green'  },
          { label: 'Total Service Requests', value: 0, sub: '—',                dot: 'blue'   },
        ])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <>
      <div className="admin-topbar">
        <div className="admin-topbar__title">
          Welcome back 👋
        </div>
        <div className="admin-topbar__actions">
          <Link to="/admin/schedules" className="admin-topbar__btn">View schedules</Link>
          <Link to="/admin/enquiries" className="admin-topbar__btn admin-topbar__btn--primary">View enquiries</Link>
        </div>
      </div>

      <div className="admin-content">

        {/* Stats */}
        {loading ? (
          <p style={{color:'var(--text-muted)',fontSize:13,padding:'20px 0'}}>Loading dashboard...</p>
        ) : (
          <div className="admin-stats">
            {(stats||[]).map(s => (
              <div key={s.label} className="admin-stat-card">
                <div className="admin-stat-card__label">{s.label}</div>
                <div className="admin-stat-card__value">{s.value}</div>
                <div className="admin-stat-card__sub">
                  <span className={`admin-stat-card__dot admin-stat-card__dot--${s.dot}`}/>
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recent service schedules */}
        <div className="admin-table-wrap" style={{marginBottom:24}}>
          <div className="admin-table-header">
            <div className="admin-table-title">Recent service schedules</div>
            <Link to="/admin/schedules" className="admin-topbar__btn">View all</Link>
          </div>
          <div style={{overflowX:'auto'}}>
            <table className="admin-table">
              <thead>
                <tr><th>ID</th><th>Customer</th><th>City</th><th>Machine</th><th>Service</th><th>Date</th><th>Status</th></tr>
              </thead>
              <tbody>
                {loading && <tr><td colSpan={7} data-label="" style={{textAlign:'center',padding:24,color:'var(--text-muted)'}}>Loading...</td></tr>}
                {!loading && schedules.length === 0 && (
                  <tr><td colSpan={7} data-label="" style={{textAlign:'center',padding:24,color:'var(--text-muted)'}}>No service requests yet. They will appear here when customers submit the form.</td></tr>
                )}
                {schedules.map(s => (
                  <tr key={s.id}>
                    <td data-label="ID" style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-muted)'}}>{s.id}</td>
                    <td data-label="Customer" style={{fontWeight:500,color:'var(--navy)',fontSize:13}}>{s.name}</td>
                    <td data-label="City">{s.city}</td>
                    <td data-label="Machine" style={{fontSize:12,maxWidth:150}}>{s.machine}</td>
                    <td data-label="Service" style={{fontSize:12}}>{s.serviceType}</td>
                    <td data-label="Date" style={{fontSize:12}}>{s.scheduledDate || s.createdAt?.substring(0,10) || '—'}</td>
                    <td data-label="Status"><span className={`status-badge status-badge--${(s.status||'new').toLowerCase()}`}>{(s.status||'new').toLowerCase()}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent enquiries */}
        <div className="admin-table-wrap">
          <div className="admin-table-header">
            <div className="admin-table-title">Recent enquiries</div>
            <Link to="/admin/enquiries" className="admin-topbar__btn">View all</Link>
          </div>
          <div style={{overflowX:'auto'}}>
            <table className="admin-table">
              <thead>
                <tr><th>ID</th><th>Name</th><th>Phone</th><th>City</th><th>Interested in</th><th>Status</th></tr>
              </thead>
              <tbody>
                {loading && <tr><td colSpan={6} data-label="" style={{textAlign:'center',padding:24,color:'var(--text-muted)'}}>Loading...</td></tr>}
                {!loading && enquiries.length === 0 && (
                  <tr><td colSpan={6} data-label="" style={{textAlign:'center',padding:24,color:'var(--text-muted)'}}>No enquiries yet. They will appear here when customers fill the enquiry form.</td></tr>
                )}
                {enquiries.map(e => (
                  <tr key={e.id}>
                    <td data-label="ID" style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-muted)'}}>{e.id}</td>
                    <td data-label="Name" style={{fontWeight:500,color:'var(--navy)',fontSize:13}}>{e.name}</td>
                    <td data-label="Phone"><a href={`tel:${e.phone}`} style={{color:'var(--blue)'}}>{e.phone}</a></td>
                    <td data-label="City">{e.city}</td>
                    <td data-label="Interested in" style={{fontSize:12}}>{e.product}</td>
                    <td data-label="Status"><span className={`status-badge status-badge--${(e.status||'NEW').toLowerCase()==='new'?'new':(e.status||'').toLowerCase()==='called'?'scheduled':'done'}`}>{(e.status||'NEW').toLowerCase()}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
