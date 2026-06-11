// ─────────────────────────────────────────────────────────
//  Central API base URL.
//  All backend calls go through this so the API version lives
//  in ONE place. If the backend ever ships /api/v2, change it here.
// ─────────────────────────────────────────────────────────
const API_ROOT = import.meta.env.VITE_API_URL || ''

export const API_BASE = `${API_ROOT}/api/v1`
