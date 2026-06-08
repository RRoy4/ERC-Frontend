import Cookies from 'js-cookie'

export interface SSOUser {
  name: string;
  roll: string;
  department: string;
  degree: string;
  passing_year: number;
}

export function useAuth(): { user: SSOUser | null; isLoggedIn: boolean } {
  const userCookie = Cookies.get('sso_user')
  
  if (userCookie) {
    try {
      const parsedUser = JSON.parse(userCookie) as SSOUser
      return { 
        user: parsedUser, 
        isLoggedIn: true 
      }
    } catch (error) {
      console.error("Failed to parse SSO cookie data:", error)
      return { user: null, isLoggedIn: false }
    }
  }

  return { 
    user: null, 
    isLoggedIn: false 
  }
}

export function logout() {
  Cookies.remove('sso_user')
  window.location.href = '/'
}