import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const MY_SERVICES = [
  { id:'SVC-002', service:'Preventive Maintenance (PM)', machine:'GE BrightSpeed Elite (32 Slice)', city:'Bhopal, MP', date:'2025-04-14', time:'09:00', technician:'Suresh Verma', status:'scheduled' },
  { id:'SVC-004', service:'Spare Parts Supply', machine:'GE HiSpeed CT/i', city:'Gwalior, MP', date:'2025-04-10', time:'—', technician:'Ramesh Gupta', status:'done' },
]

const MY_ENQUIRIES = [
  { id:'ENQ-002', product:'AMC Contract', date:'2025-04-04', status:'called', notes:'Our team has called. Sending quote by email.' },
]

export default function ClientDashboard() {
  const { user } = useAuth()

  return (
    <>
      <div className="admin-topbar">
        <div className="admin-topbar__title">My Dashboard — {user?.name}</div>
        <div className="admin-topbar__actions">
          <Link to="/services" className="admin-topbar__btn">Browse services</Link>
          <Link to="/services/breakdown-repair" className="admin-topbar__btn admin-topbar__btn--primary">
            Schedule service +
          </Link>
        </div>
      </div>

      <div className="admin-content">

        <div className="admin-stats">
          <div className="admin-stat-card">
            <div className="admin-stat-card__label">Scheduled visits</div>
            <div className="admin-stat-card__value">1</div>
            <div className="admin-stat-card__sub"><span className="admin-stat-card__dot admin-stat-card__dot--orange"/>Upcoming this week</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-card__label">My machines</div>
            <div className="admin-stat-card__value">2</div>
            <div className="admin-stat-card__sub"><span className="admin-stat-card__dot admin-stat-card__dot--green"/>GE BrightSpeed + HiSpeed</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-card__label">Open enquiries</div>
            <div className="admin-stat-card__value">1</div>
            <div className="admin-stat-card__sub"><span className="admin-stat-card__dot admin-stat-card__dot--blue"/>AMC quote pending</div>
          </div>
        </div>

        <div className="admin-table-wrap" style={{marginBottom:24}}>
          <div className="admin-table-header">
            <div className="admin-table-title">My service requests</div>
            <Link to="/dashboard/my-services" className="admin-topbar__btn">View all</Link>
          </div>
          <div style={{overflowX:'auto'}}>
            <table className="admin-table">
              <thead>
                <tr><th>ID</th><th>Service</th><th>Machine</th><th>Location</th><th>Date</th><th>Technician</th><th>Status</th></tr>
              </thead>
              <tbody>
                {MY_SERVICES.map(s => (
                  <tr key={s.id}>
                    <td style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-muted)'}}>{s.id}</td>
                    <td style={{fontWeight:600,color:'var(--navy)',fontSize:13}}>{s.service}</td>
                    <td style={{fontSize:12}}>{s.machine}</td>
                    <td style={{fontSize:12}}>{s.city}</td>
                    <td>
                      <div style={{fontSize:13,fontWeight:500}}>{s.date}</div>
                      <div style={{fontSize:11,color:'var(--text-muted)'}}>{s.time}</div>
                    </td>
                    <td style={{fontSize:12}}>{s.technician}</td>
                    <td><span className={`status-badge status-badge--${s.status}`}>{s.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="admin-table-wrap">
          <div className="admin-table-header">
            <div className="admin-table-title">My product enquiries</div>
          </div>
          <div style={{overflowX:'auto'}}>
            <table className="admin-table">
              <thead><tr><th>ID</th><th>Product / Service</th><th>Date</th><th>Status</th><th>Notes</th></tr></thead>
              <tbody>
                {MY_ENQUIRIES.map(e => (
                  <tr key={e.id}>
                    <td style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-muted)'}}>{e.id}</td>
                    <td style={{fontWeight:600,color:'var(--navy)',fontSize:13}}>{e.product}</td>
                    <td style={{fontSize:12}}>{e.date}</td>
                    <td><span className={`status-badge status-badge--${e.status==='called'?'scheduled':'new'}`}>{e.status}</span></td>
                    <td style={{fontSize:12,color:'var(--text-muted)'}}>{e.notes}</td>
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
