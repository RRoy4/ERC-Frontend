// import Cookies from 'js-cookie'

// export interface SSOUser {
//   name: string
//   roll: string
//   department: string
//   degree: string
//   passing_year: number
// }

// export function useAuth(): { user: SSOUser | null; isLoggedIn: boolean } {
//   const raw = Cookies.get('sso_user')
//   if (!raw) return { user: null, isLoggedIn: false }
//   try {
//     return { user: JSON.parse(raw), isLoggedIn: true }
//   } catch {
//     return { user: null, isLoggedIn: false }
//   }
// }

// export function logout() {
//   Cookies.remove('sso_user')
//   window.location.href = '/'
// }

import Cookies from 'js-cookie'

export interface SSOUser {
  name: string
  roll: string
  department: string
  degree: string
  passing_year: number
}

export function useAuth(): { user: SSOUser | null; isLoggedIn: boolean } {
  // --- PRODUCTION BYPASS ---
  // The 'import.meta.env.DEV' check is removed.
  // This will force the app to always act as if this user is logged in, bypassing the IITB SSO completely.
  return { 
    user: {
      name: "Raunak Roy",
      roll: "22B1234", 
      department: "Mechanical Engineering",
      degree: "B.Tech",
      passing_year: 2026
    }, 
    isLoggedIn: true 
  }
}

export function logout() {
  Cookies.remove('sso_user')
  window.location.href = '/'
}