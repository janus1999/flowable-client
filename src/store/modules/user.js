import { loginByUsername, getUserInfo, getUserRoles, logout } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/utils'

const user = {
  state: {
    userId: '',
    userCode: '',
    userName: '',
    unitId: '',
    unitName: '',
    deptId: '',
    deptName: '',
    companyId: '',
    companyName: '',
    roles: [],
    token: getToken()
  },
  mutations: {
    SET_USERID: (state, userId) => {
      state.userId = userId
    },
    SET_USERCODE: (state, userCode) => {
      state.userCode = userCode
    },
    SET_USERNAME: (state, userName) => {
      state.userName = userName
    },
    SET_UNITID: (state, unitId) => {
      state.unitId = unitId
    },
    SET_UNITNAME: (state, unitName) => {
      state.unitName = unitName
    },
    SET_DEPTID: (state, deptId) => {
      state.deptId = deptId
    },
    SET_DEPTNAME: (state, deptName) => {
      state.deptName = deptName
    },
    SET_COMPANYID: (state, companyId) => {
      state.companyId = companyId
    },
    SET_COMPANYNAME: (state, companyName) => {
      state.companyName = companyName
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    async LoginByUsername ({ commit }, userInfo) {
      const userCode = userInfo.userCode.trim()
      let response = await loginByUsername(userCode, userInfo.password)
      commit('SET_TOKEN', response.headers['x-token'])
      setToken(response.headers['x-token'])
      commit('SET_USERCODE', userCode)
      await this.dispatch('GetUserInfo', userCode)
      await this.dispatch('GetUserRoles', userCode)
    },
    async GetUserInfo ({commit}, userCode) {
      let response = await getUserInfo(userCode)
      let user = response.data
      commit('SET_USERID', user.userId)
      commit('SET_USERCODE', user.userCode)
      commit('SET_USERNAME', user.userName)
      commit('SET_UNITID', user.unitId)
      commit('SET_UNITNAME', user.unitName)
      commit('SET_DEPTID', user.deptId)
      commit('SET_DEPTNAME', user.deptName)
      commit('SET_COMPANYID', user.companyId)
      commit('SET_COMPANYNAME', user.companyName)
    },
    async GetUserRoles ({commit}, userCode) {
      let response = await getUserRoles(userCode)
      commit('SET_ROLES', response.data)
    },
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },
    LogOut ({commit, state}) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
