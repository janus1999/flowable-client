import Cookies from 'js-cookie'

export const TokenKey = 'x-token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  Cookies.set(TokenKey, token)
}

export function removeToken () {
  Cookies.remove(TokenKey)
}
