import request from '@/utils/request'

export function loginByUsername (userCode, password) {
  const data = {
    userCode,
    password
  }
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getUserInfo (userCode) {
  return request({
    url: '/user/' + userCode,
    method: 'get'
  })
}

export function getUserRoles (userCode) {
  return request({
    url: '/user/' + userCode + '/roles',
    method: 'get'
  })
}

export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
