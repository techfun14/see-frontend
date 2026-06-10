import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'

export default function EnquiriesPage() {
  const { authHeader } = useAuth()
  const [enquiries, setEnquiries] = useState([])
  const [loading,   setLoading]   = useState(true)
  const [error,     setError]     = useState('')
  const [filter,    setFilter]    = useState('all')
  const [expanded,  setExpanded]  = useState(null)

  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/enquiry`, {
          headers: { ...authHeader(), 'Content-Type': 'application/json' }
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setEnquiries(data)
      } catch (err) {
        setError('Could not load enquiries. ' + err.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  async function updateStatus(id, status) {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/enquiry/${id}/status?status=${status}`,
        { method: 'PATCH', headers: authHeader() }
      )
      if (!res.ok) throw new Error('Update failed')
      const updated = await res.json()
      setEnquiries(es => es.map(e => e.id === id ? updated : e))
    } catch (err) {
      alert('Status update failed: ' + err.message)
    }
  }

  const filtered = filter === 'all'
    ? enquiries
    : enquiries.filter(e => (e.status||'').toLowerCase() === filter)

  return (
    <>
      <div className="admin-topbar">
        <div className="admin-topbar__title">Product Enquiries</div>
        <div className="admin-topbar__actions">
          <span style={{fontSize:12,color:'var(--text-muted)'}}>
            {enquiries.filter(e=>(e.status||'').toUpperCase()==='NEW').length} new enquiries
          </span>
        </div>
      </div>

      <div className="admin-content">
        <div style={{display:'flex',gap:6,marginBottom:20,flexWrap:'wrap'}}>
          {['all','new','called','done'].map(f=>(
            <button key={f} onClick={()=>setFilter(f)}
              style={{fontSize:12,fontWeight:500,padding:'7px 14px',borderRadius:20,border:'1px solid var(--border)',background:filter===f?'var(--navy)':'white',color:filter===f?'white':'var(--text-muted)',cursor:'pointer'}}>
              {f.charAt(0).toUpperCase()+f.slice(1)}
              <span style={{marginLeft:5,opacity:.6}}>
                ({f==='all' ? enquiries.length : enquiries.filter(e=>(e.status||'').toLowerCase()===f).length})
              </span>
            </button>
          ))}
        </div>

        {loading && <p style={{color:'var(--text-muted)',fontSize:13,padding:'20px 0'}}>Loading enquiries...</p>}
        {error   && <p style={{color:'#C62828',fontSize:13,padding:'20px 0'}}>{error}</p>}

        {!loading && !error && (
          <div className="admin-table-wrap">
            <div style={{overflowX:'auto'}}>
              <table className="admin-table">
                <thead>
                  <tr><th>ID</th><th>Customer</th><th>Phone</th><th>City</th><th>Interested in</th><th>Date</th><th>Status</th><th>Action</th></tr>
                </thead>
                <tbody>
                  {filtered.length===0 && (
                    <tr><td colSpan={8} data-label="" style={{textAlign:'center',color:'var(--text-muted)',padding:32}}>No enquiries found</td></tr>
                  )}
                  {filtered.map(e=>(
                    <>
                      <tr key={e.id} style={{cursor:'pointer'}} onClick={()=>setExpanded(expanded===e.id?null:e.id)}>
                        <td data-label="ID" style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-muted)'}}>{e.id}</td>
                        <td data-label="Customer">
                          <div style={{fontWeight:600,color:'var(--navy)',fontSize:13}}>{e.name}</div>
                          <div style={{fontSize:11,color:'var(--text-muted)'}}>{e.hospital}</div>
                        </td>
                        <td data-label="Phone"><a href={`tel:${e.phone}`} style={{color:'var(--blue)',fontSize:13}}>{e.phone}</a></td>
                        <td data-label="City" style={{fontSize:13}}>{e.city}</td>
                        <td data-label="Interested in" style={{fontSize:12,maxWidth:180}}>{e.product}</td>
                        <td data-label="Date" style={{fontSize:12}}>{e.createdAt ? e.createdAt.substring(0,10) : '—'}</td>
                        <td data-label="Status">
                          <span className={`status-badge status-badge--${
                            (e.status||'NEW').toUpperCase()==='NEW' ? 'new' :
                            (e.status||'').toUpperCase()==='CALLED' ? 'scheduled' : 'done'
                          }`}>{(e.status||'NEW').toLowerCase()}</span>
                        </td>
                        <td data-label="" onClick={ev=>ev.stopPropagation()}>
                          {(e.status||'NEW').toUpperCase()==='NEW' && (
                            <button className="tbl-btn" onClick={()=>updateStatus(e.id,'CALLED')}>Mark Called</button>
                          )}
                          {(e.status||'').toUpperCase()==='CALLED' && (
                            <button className="tbl-btn" onClick={()=>updateStatus(e.id,'DONE')}>Mark Done</button>
                          )}
                        </td>
                      </tr>
                      {expanded===e.id && (
                        <tr key={`${e.id}-exp`}>
                          <td colSpan={8} data-label="" style={{background:'var(--bg-alt)',padding:'14px 20px'}}>
                            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:16,fontSize:13}}>
                              <div>
                                <div style={{fontSize:11,fontWeight:600,textTransform:'uppercase',color:'var(--text-muted)',marginBottom:4}}>Email</div>
                                <div>{e.email||'—'}</div>
                              </div>
                              <div>
                                <div style={{fontSize:11,fontWeight:600,textTransform:'uppercase',color:'var(--text-muted)',marginBottom:4}}>Hospital</div>
                                <div>{e.hospital||'—'}</div>
                              </div>
                              {e.message && (
                                <div style={{gridColumn:'1/-1'}}>
                                  <div style={{fontSize:11,fontWeight:600,textTransform:'uppercase',color:'var(--text-muted)',marginBottom:4}}>Message</div>
                                  <div style={{lineHeight:1.65}}>{e.message}</div>
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
    </>
  )
}
