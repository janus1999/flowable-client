<template>
  <scroll-bar>
    <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
      <sidebar-item :routes="routers" />
    </el-menu>
  </scroll-bar>
</template>

<script>
  import { mapGetters } from 'vuex'
  import SidebarItem from './SidebarItem'
  import ScrollBar from '@/components/ScrollBar'
  import { constantRouterMap } from '@/router'

  export default {
    components: { SidebarItem, ScrollBar },
    computed: {
      ...mapGetters([
        'sidebar'
      ]),
      isCollapse () {
        return !this.sidebar.opened
      }
    },
    data () {
      return {
        routers: constantRouterMap
      }
    }
  }
</script>
