
const TokenKey = 'vue_admin_template_token'
const userIDKey = 'userid'
const usernameKey = 'username'

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.remove(TokenKey)
}

export function removeCookie() {
  return sessionStorage.remove()
}

export function getUserID() {
  return sessionStorage.getItem(userIDKey)
}

export function setUserID(userID) {
  return sessionStorage.setItem(userIDKey, userID)
}

export function removeUserID() {
  return sessionStorage.remove(userIDKey)
}

export function getUserName() {
  return sessionStorage.getItem(usernameKey)
}

export function setUserName(username) {
  return sessionStorage.setItem(usernameKey, username)
}

export function removeUserName() {
  return sessionStorage.remove(usernameKey)
}
