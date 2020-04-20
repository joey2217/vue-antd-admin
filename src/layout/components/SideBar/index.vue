<template>
  <a-layout-sider
    :trigger="null"
    collapsible
    v-model="collapsed"
    class="sidebar"
    style="height:100%;"
  >
    <Logo />
    <a-menu theme="dark" mode="inline" :defaultSelectedKeys="[currentRoute]" @click="onMenuClick">
      <a-menu-item key="/dashboard">
        <a-icon type="home" />
        <span>首页</span>
      </a-menu-item>
      <template v-for="item in menus">
        <a-menu-item v-if="!item.children" :key="item.path">
          <a-icon v-if="item.icon" :type="item.icon" />
          <span>{{ item.title }}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.path" />
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Logo from './Logo.vue';
import SubMenu from './SubMenu.vue';

export default {
  name: 'SideBar',
  components: { Logo, SubMenu },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      collapsed: state => state.app.collapsed,
      menus: state => state.user.permissionMenus
    }),
    currentRoute() {
      return this.$route.path;
    }
  },
  watch: {},
  methods: {
    ...mapMutations({
      toggleCollapsed: 'app/TOGGLE_COLLAPSED'
    }),
    onMenuClick({ keyPath }) {
      const path = keyPath.reverse().join('/');
      if (path === this.$route.path) {
        return;
      }
      this.$router.push(path);
    }
  },
  mounted() {}
};
</script>

<style lang="less">
</style>
