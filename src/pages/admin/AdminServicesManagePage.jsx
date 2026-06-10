import { useState, useEffect } from 'react'
import { SERVICES_CATALOG } from '../../constants/services'

export default function AdminServicesManagePage() {
  // Load from localStorage or initialize from catalog
  const [services, setServices] = useState(() => {
    const saved = localStorage.getItem('servicesVisibility')
    if (saved) {
      try {
        const visibility = JSON.parse(saved)
        return SERVICES_CATALOG.map(s => ({
          ...s,
          active: visibility[s.id] !== undefined ? visibility[s.id] : true
        }))
      } catch (e) {
        console.error('Failed to parse saved services:', e)
      }
    }
    return SERVICES_CATALOG.map(s => ({ ...s, active: true }))
  })

  // Save to localStorage whenever services change
  useEffect(() => {
    const visibility = services.reduce((acc, s) => {
      acc[s.id] = s.active
      return acc
    }, {})
    localStorage.setItem('servicesVisibility', JSON.stringify(visibility))
    console.log('Services visibility saved:', visibility)
  }, [services])

  function toggle(id) {
    setServices(ss => ss.map(s => s.id === id ? { ...s, active: !s.active } : s))
  }

  return (
    <>
      <div className="admin-topbar">
        <div className="admin-topbar__title">Manage Services</div>
        <div className="admin-topbar__actions">
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            {services.filter(s => s.active).length} active · {services.filter(s => !s.active).length} hidden
          </span>
        </div>
      </div>

      <div className="admin-content">
        <div style={{ fontSize: 13, color: 'var(--text-muted)', background: 'var(--bg-alt)', border: '1px solid var(--border)', borderRadius: 10, padding: '12px 16px', marginBottom: 20 }}>
          Toggle services to show or hide them on the public services page. The service is still accessible by direct URL when hidden.
        </div>

        <div className="admin-table-wrap">
          <div style={{ overflowX: 'auto' }}>
            <table className="admin-table">
              <thead>
                <tr><th>ID</th><th>Service</th><th>Badge</th><th>Category</th><th>Visibility</th></tr>
              </thead>
              <tbody>
                {services.map(s => (
                  <tr key={s.id}>
                    <td data-label="ID" style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)' }}>SVC-{String(s.id).padStart(2, '0')}</td>
                    <td data-label="Service">
                      <div style={{ fontWeight: 600, color: 'var(--navy)', fontSize: 13 }}>{s.title}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{s.shortDesc?.slice(0, 70)}...</div>
                    </td>
                    <td data-label="Badge">
                      <span className={`status-badge ${s.badgeClass}`}>{s.badge}</span>
                    </td>
                    <td data-label="Category" style={{ fontSize: 12, textTransform: 'capitalize' }}>{s.category}</td>
                    <td data-label="Visibility">
                      <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                        <div
                          style={{ width: 42, height: 24, borderRadius: 12, position: 'relative', transition: 'background .2s', background: s.active ? 'var(--blue)' : 'var(--border)', cursor: 'pointer' }}
                          onClick={() => toggle(s.id)}
                        >
                          <div style={{
                            position: 'absolute', top: 3,
                            left: s.active ? 'calc(100% - 21px)' : '3px',
                            width: 18, height: 18, borderRadius: '50%',
                            background: 'white', transition: 'left .2s',
                            boxShadow: '0 1px 4px rgba(0,0,0,.2)',
                          }} />
                        </div>
                        <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{s.active ? 'Visible' : 'Hidden'}</span>
                      </label>
                    </td>
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
