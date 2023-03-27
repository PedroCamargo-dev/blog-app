import { getCookie, deleteCookie, setCookie, hasCookie } from 'cookies-next'

export const isAuthenticated = () => {
  return hasCookie('accessToken')
}

export const getToken = () => {
  return getCookie('accessToken')?.toString()
}

export const login = (token: string) => {
  setCookie('accessToken', token)
}

export const logout = () => {
  return deleteCookie('accessToken')
}
