const getters = {
  sidebar: state => state.app.sidebar,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  userCode: state => state.user.userCode,
  roles: state => state.user.roles,
  routers: state => state.user.routers
}
export default getters
