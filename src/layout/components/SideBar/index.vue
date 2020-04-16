<template>
  <a-layout-sider
    :trigger="null"
    collapsible
    v-model="collapsed"
    class="sidebar"
    style="height:100%;"
  >
    <Logo />
    <a-menu theme="dark" mode="inline" @click="onMenuClick">
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
  data () {
    return {
      menus: [
        {
          path: '/home',
          icon: 'user',
          title: 'user',
          children: [
            {
              path: 'option',
              icon: 'right',
              title: 'option'
            }
          ]
        },
        {
          path: '/option',
          icon: 'up',
          title: 'option'
        }
      ]
    };
  },
  computed: {
    ...mapState({
      collapsed: state => state.app.collapsed
    })
  },
  methods: {
    ...mapMutations({
      toggleCollapsed: 'app/TOGGLE_COLLAPSED'
    }),
    onMenuClick ({ key }) {
      console.log(key);
    }
  },
  mounted () {}
};
</script>

<style lang="less">
</style>
