import { useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { API_BASE } from '../../constants/api'

export default function AdminProductsPage() {
  const { authHeader } = useAuth()
  const [products,  setProducts]  = useState([])
  const [loading,   setLoading]   = useState(true)
  const [error,     setError]     = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editForm,  setEditForm]  = useState({})

  useEffect(() => {
    async function load() {
      setLoading(true)
      try {
        const res = await fetch(
  `${API_BASE}/products`,
  {
    headers: authHeader()
  }
)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        setError('Could not load products. ' + err.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  async function toggleAvailability(id, current) {
    const newAvailable = !current
    try {
      const res = await fetch(
        `${API_BASE}/products/${id}/availability?available=${newAvailable}`,
        { method: 'PATCH', headers: authHeader() }
      )
      if (!res.ok) throw new Error('Toggle failed')
      const updated = await res.json()
      setProducts(ps => ps.map(p => p.id === id ? updated : p))
    } catch (err) {
      alert('Toggle failed: ' + err.message)
    }
  }

  async function saveEdit(id) {
    try {
      const product = products.find(p => p.id === id)
      const res = await fetch(`${API_BASE}/products/${id}`, {
        method:  'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...product, ...editForm }),
      })
      if (!res.ok) throw new Error('Save failed')
      const updated = await res.json()
      setProducts(ps => ps.map(p => p.id === id ? updated : p))
      setEditingId(null)
    } catch (err) {
      alert('Save failed: ' + err.message)
    }
  }

  const safeProducts = Array.isArray(products) ? products : []
const available = safeProducts.filter(p => p.available !== false).length
const unavailable = safeProducts.filter(p => p.available === false).length

  return (
    <>
      <div className="admin-topbar">
        <div className="admin-topbar__title">Manage Products</div>
        <div className="admin-topbar__actions">
          <span style={{fontSize:12,color:'var(--text-muted)'}}>
            {available} available · {unavailable} unavailable
          </span>
        </div>
      </div>

      <div className="admin-content">
        <div style={{fontSize:13,color:'var(--text-muted)',background:'var(--bg-alt)',border:'1px solid var(--border)',borderRadius:10,padding:'12px 16px',marginBottom:20}}>
          Toggle availability to show or hide products on the website. Changes are live immediately.
        </div>

        {loading && <p style={{color:'var(--text-muted)',fontSize:13,padding:'20px 0'}}>Loading products...</p>}
        {error   && <p style={{color:'#C62828',fontSize:13,padding:'20px 0'}}>{error}</p>}

        {!loading && !error && (
          <div className="admin-table-wrap">
            <div style={{overflowX:'auto'}}>
              <table className="admin-table">
                <thead>
                  <tr><th>ID</th><th>Product</th><th>Category</th><th>Status</th><th>Availability</th><th>Actions</th></tr>
                </thead>
                <tbody>
                  {products.map(p=>(
                    <tr key={p.id}>
                      <td style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--text-muted)'}}>PRD-{String(p.id).padStart(3,'0')}</td>
                      <td>
                        {editingId===p.id ? (
                          <div style={{display:'flex',flexDirection:'column',gap:6}}>
                            <input style={{padding:'7px 10px',borderRadius:6,border:'1.5px solid var(--blue)',fontSize:12,outline:'none'}}
                              value={editForm.title||''} onChange={e=>setEditForm(f=>({...f,title:e.target.value}))}/>
                            <input style={{padding:'6px 10px',borderRadius:6,border:'1px solid var(--border)',fontSize:11,outline:'none',color:'var(--text-muted)'}}
                              value={editForm.tagline||''} onChange={e=>setEditForm(f=>({...f,tagline:e.target.value}))}/>
                          </div>
                        ) : (
                          <>
                            <div style={{fontWeight:600,color:'var(--navy)',fontSize:13}}>{p.title}</div>
                            <div style={{fontSize:11,color:'var(--text-muted)',marginTop:2}}>{p.tagline}</div>
                          </>
                        )}
                      </td>
                      <td style={{fontSize:12}}>{p.categoryLabel||p.category}</td>
                      <td>
                        <span className={`status-badge ${p.available!==false ? 'status-badge--available' : 'status-badge--unavailable'}`}>
                          {p.available!==false ? 'Available' : 'Unavailable'}
                        </span>
                      </td>
                      <td>
                        <label style={{display:'flex',alignItems:'center',gap:8,cursor:'pointer'}}>
                          <div style={{
                            width:42,height:24,borderRadius:12,position:'relative',transition:'background .2s',
                            background: p.available!==false ? 'var(--blue)' : 'var(--border)',
                            cursor:'pointer',
                          }} onClick={()=>toggleAvailability(p.id, p.available!==false)}>
                            <div style={{
                              position:'absolute',top:3,
                              left: p.available!==false ? 'calc(100% - 21px)' : '3px',
                              width:18,height:18,borderRadius:'50%',
                              background:'white',transition:'left .2s',
                              boxShadow:'0 1px 4px rgba(0,0,0,.2)',
                            }}/>
                          </div>
                          <span style={{fontSize:12,color:'var(--text-muted)'}}>{p.available!==false ? 'Live' : 'Hidden'}</span>
                        </label>
                      </td>
                      <td>
                        {editingId===p.id ? (
                          <div style={{display:'flex',gap:6}}>
                            <button className="admin-topbar__btn admin-topbar__btn--primary" onClick={()=>saveEdit(p.id)} style={{fontSize:11,padding:'5px 10px'}}>Save</button>
                            <button className="tbl-btn" onClick={()=>setEditingId(null)}>Cancel</button>
                          </div>
                        ) : (
                          <button className="tbl-btn" onClick={()=>{setEditingId(p.id);setEditForm({title:p.title,tagline:p.tagline})}}>Edit</button>
                        )}
                      </td>
                    </tr>
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
