import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { API_BASE } from '../../constants/api'

const STATUSES = ['NEW','SCHEDULED','ONGOING','DONE','DELAYED','CANCELLED']
const TECHNICIANS = ['Ramesh Gupta', 'Suresh Verma', 'Pradeep Sharma', 'Amit Tiwari']

function StatusBadge({ status }) {
  const statusLower = (status || 'NEW').toLowerCase()
  return <span className={`status-badge status-badge--${statusLower}`}>{status}</span>
}

function EditModal({ schedule, onSave, onClose }) {
  const [form, setForm] = useState({
    status:        schedule.status || 'NEW',
    scheduledDate: schedule.scheduledDate || '',
    scheduledTime: schedule.scheduledTime || '',
    technician:    schedule.technician   || '',
    notes:         schedule.notes        || '',
  })

  return (
    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.45)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:200,padding:16}}>
      <div style={{background:'white',borderRadius:16,padding:28,width:'100%',maxWidth:480,maxHeight:'90vh',overflowY:'auto'}}>
        <div style={{fontFamily:"'Sora',sans-serif",fontSize:17,fontWeight:700,color:'var(--navy)',marginBottom:4}}>Update Schedule</div>
        <div style={{fontSize:12,color:'var(--text-muted)',marginBottom:20}}>
          #{schedule.id} · {schedule.name} · {schedule.serviceType}
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))',gap:14,marginBottom:14}}>
          <div>
            <label style={{fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'.06em',color:'var(--text-muted)',display:'block',marginBottom:5}}>Status</label>
            <select style={{width:'100%',padding:'10px 12px',borderRadius:8,border:'1.5px solid var(--border)',fontSize:13,fontFamily:'inherit',outline:'none'}}
              value={form.status} onChange={e=>setForm(f=>({...f,status:e.target.value}))}>
              {STATUSES.map(s=><option key={s} value={s}>{s.charAt(0).toUpperCase()+s.slice(1)}</option>)}
            </select>
          </div>
          <div>
            <label style={{fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'.06em',color:'var(--text-muted)',display:'block',marginBottom:5}}>Technician</label>
            <select style={{width:'100%',padding:'10px 12px',borderRadius:8,border:'1.5px solid var(--border)',fontSize:13,fontFamily:'inherit',outline:'none'}}
              value={form.technician} onChange={e=>setForm(f=>({...f,technician:e.target.value}))}>
              <option value="">Unassigned</option>
              {TECHNICIANS.map(t=><option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))',gap:14,marginBottom:14}}>
          <div>
            <label style={{fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'.06em',color:'var(--text-muted)',display:'block',marginBottom:5}}>Scheduled date</label>
            <input type="date" style={{width:'100%',padding:'10px 12px',borderRadius:8,border:'1.5px solid var(--border)',fontSize:13,fontFamily:'inherit',outline:'none'}}
              value={form.scheduledDate} onChange={e=>setForm(f=>({...f,scheduledDate:e.target.value}))}/>
          </div>
          <div>
            <label style={{fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'.06em',color:'var(--text-muted)',display:'block',marginBottom:5}}>Time</label>
            <input type="time" style={{width:'100%',padding:'10px 12px',borderRadius:8,border:'1.5px solid var(--border)',fontSize:13,fontFamily:'inherit',outline:'none'}}
              value={form.scheduledTime} onChange={e=>setForm(f=>({...f,scheduledTime:e.target.value}))}/>
          </div>
        </div>

        <div style={{marginBottom:20}}>
          <label style={{fontSize:11,fontWeight:600,textTransform:'uppercase',letterSpacing:'.06em',color:'var(--text-muted)',display:'block',marginBottom:5}}>Internal notes</label>
          <textarea style={{width:'100%',padding:'10px 12px',borderRadius:8,border:'1.5px solid var(--border)',fontSize:13,fontFamily:'inherit',outline:'none',resize:'vertical',minHeight:72}}
            value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))}
            placeholder="Notes, parts needed, travel arrangements..."/>
        </div>

        <div style={{background:'var(--bg-alt)',borderRadius:10,padding:'12px 14px',fontSize:12,color:'var(--text-muted)',marginBottom:20}}>
          Saving will update the schedule. Customer notification can be set up via email integration.
        </div>

        <div style={{display:'flex',gap:10,justifyContent:'flex-end'}}>
          <button className="tbl-btn" onClick={onClose}>Cancel</button>
          <button className="admin-topbar__btn admin-topbar__btn--primary" onClick={()=>onSave({...schedule,...form})}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ServiceSchedulesPage() {
  const { authHeader } = useAuth()
  const [schedules, setSchedules] = useState([])
  const [loading,   setLoading]   = useState(true)
  const [error,     setError]     = useState('')
  const [filter,    setFilter]    = useState('all')
  const [editing,   setEditing]   = useState(null)
  const [expanded,  setExpanded]  = useState(null)

  // Fetch all service requests from backend
  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
        const res = await fetch(`${API_BASE}/service-requests`, {
          headers: { ...authHeader(), 'Content-Type': 'application/json' }
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setSchedules(data)
      } catch (err) {
        setError('Could not load schedules. ' + err.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  async function handleSave(updated) {
    try {
      const res = await fetch(`${API_BASE}/service-requests/${updated.id}`, {
        method:  'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body:    JSON.stringify(updated),
      })
      if (!res.ok) throw new Error('Update failed')
      const saved = await res.json()
      setSchedules(sc => sc.map(s => s.id === saved.id ? saved : s))
      setEditing(null)
    } catch (err) {
      alert('Save failed: ' + err.message)
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Permanently delete this service request? This cannot be undone.')) return
    try {
      const res = await fetch(`${API_BASE}/service-requests/${id}`, {
        method:  'DELETE',
        headers: authHeader(),
      })
      if (!res.ok) throw new Error('Delete failed')
      setSchedules(sc => sc.filter(s => s.id !== id))
    } catch (err) {
      alert('Delete failed: ' + err.message)
    }
  }

  async function handleCancel(id) {
    if (!window.confirm('Mark this service request as CANCELLED?')) return
    try {
      const item = schedules.find(s => s.id === id)
      const res  = await fetch(`${API_BASE}/service-requests/${id}`, {
        method:  'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...item, status: 'CANCELLED' }),
      })
      if (!res.ok) throw new Error('Cancel failed')
      const saved = await res.json()
      setSchedules(sc => sc.map(s => s.id === id ? saved : s))
    } catch (err) {
      alert('Cancel failed: ' + err.message)
    }
  }

  const filtered = filter === 'all'
    ? schedules
    : schedules.filter(s => (s.status || '').toUpperCase() === filter.toUpperCase())

  return (
    <>
      <div className="admin-topbar">
        <div className="admin-topbar__title">Service Schedules</div>
        <div className="admin-topbar__actions">
          <span style={{fontSize:12,color:'var(--text-muted)'}}>
            {schedules.filter(s=>(s.status||'').toLowerCase()==='new').length} new ·{' '}
            {schedules.filter(s=>(s.status||'').toLowerCase()==='scheduled').length} scheduled
          </span>
        </div>
      </div>

      <div className="admin-content">

        {/* Filter tabs */}
        <div style={{display:'flex',gap:6,marginBottom:20,flexWrap:'wrap'}}>
          {['all',...STATUSES].map(f=>(
            <button key={f} onClick={()=>setFilter(f)}
              style={{fontSize:12,fontWeight:500,padding:'7px 14px',borderRadius:20,border:'1px solid var(--border)',background:filter===f?'var(--navy)':'white',color:filter===f?'white':'var(--text-muted)',cursor:'pointer',transition:'all .15s'}}>
              {f.charAt(0).toUpperCase()+f.slice(1)}
              {f!=='all' && <span style={{marginLeft:5,opacity:.6}}>({schedules.filter(s=>(s.status||'').toLowerCase()===f).length})</span>}
            </button>
          ))}
        </div>

        {loading && <p style={{color:'var(--text-muted)',fontSize:13,padding:'20px 0'}}>Loading schedules...</p>}
        {error   && <p style={{color:'#C62828',fontSize:13,padding:'20px 0'}}>{error}</p>}

        {!loading && !error && (
          <div className="admin-table-wrap">
            <div style={{overflowX:'auto'}}>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>ID</th><th>Customer</th><th>City · State</th>
                    <th>Machine</th><th>Service</th><th>Date</th>
                    <th>Technician</th><th>Status</th><th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 && (
                    <tr><td colSpan={9} data-label="" style={{textAlign:'center',color:'var(--text-muted)',padding:32}}>No schedules found</td></tr>
                  )}
                  {filtered.map(s=>(
                    <>
                      <tr key={s.id} style={{cursor:'pointer'}} onClick={()=>setExpanded(expanded===s.id?null:s.id)}>
                        <td data-label="ID" style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-muted)'}}>{s.id}</td>
                        <td data-label="Customer">
                          <div style={{fontWeight:600,color:'var(--navy)',fontSize:13}}>{s.name}</div>
                          <div style={{fontSize:11,color:'var(--text-muted)'}}>{s.hospital}</div>
                        </td>
                        <td data-label="City · State">
                          <div style={{fontSize:13}}>{s.city}</div>
                          <div style={{fontSize:11,color:'var(--text-muted)'}}>{s.state}</div>
                        </td>
                        <td data-label="Machine" style={{fontSize:12,maxWidth:160}}>{s.machine}</td>
                        <td data-label="Service" style={{fontSize:12,maxWidth:160}}>{s.serviceType}</td>
                        <td data-label="Date">
                          <div style={{fontSize:13,fontWeight:500}}>{s.scheduledDate||'—'}</div>
                          <div style={{fontSize:11,color:'var(--text-muted)'}}>{s.scheduledTime||''}</div>
                        </td>
                        <td data-label="Technician" style={{fontSize:12}}>{s.technician||<span style={{color:'var(--orange)',fontWeight:500}}>Unassigned</span>}</td>
                        <td data-label="Status"><StatusBadge status={(s.status||'NEW')}/></td>
                        <td data-label="" onClick={e=>e.stopPropagation()}>
                          <div style={{display:'flex',gap:6}}>
                            <button className="tbl-btn" onClick={()=>setEditing(s)}>Edit</button>
                            <button className="tbl-btn tbl-btn--danger" onClick={()=>handleDelete(s.id)}>Delete</button>
                          </div>
                        </td>
                      </tr>
                      {expanded===s.id && (
                        <tr key={`${s.id}-exp`}>
                          <td colSpan={9} data-label="" style={{background:'var(--bg-alt)',padding:'16px 20px'}}>
                            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(130px,1fr))',gap:16,fontSize:13}}>
                              <div>
                                <div style={{fontSize:11,fontWeight:600,textTransform:'uppercase',color:'var(--text-muted)',marginBottom:4}}>Contact</div>
                                <div><a href={`tel:${s.phone}`} style={{color:'var(--blue)'}}>{s.phone}</a></div>
                                <div style={{color:'var(--text-muted)'}}>{s.email||'—'}</div>
                              </div>
                              <div>
                                <div style={{fontSize:11,fontWeight:600,textTransform:'uppercase',color:'var(--text-muted)',marginBottom:4}}>Urgency</div>
                                <div>{s.urgency||'—'}</div>
                              </div>
                              <div>
                                <div style={{fontSize:11,fontWeight:600,textTransform:'uppercase',color:'var(--text-muted)',marginBottom:4}}>Submitted</div>
                                <div>{s.createdAt ? s.createdAt.substring(0,10) : '—'}</div>
                              </div>
                              {s.problem && (
                                <div style={{gridColumn:'1/-1'}}>
                                  <div style={{fontSize:11,fontWeight:600,textTransform:'uppercase',color:'var(--text-muted)',marginBottom:4}}>Problem / Requirement</div>
                                  <div style={{lineHeight:1.6}}>{s.problem}</div>
                                </div>
                              )}
                              {s.notes && (
                                <div style={{gridColumn:'1/-1'}}>
                                  <div style={{fontSize:11,fontWeight:600,textTransform:'uppercase',color:'var(--text-muted)',marginBottom:4}}>Internal Notes</div>
                                  <div style={{lineHeight:1.6}}>{s.notes}</div>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {editing && <EditModal schedule={editing} onSave={handleSave} onClose={()=>setEditing(null)}/>}
    </>
  )
}
