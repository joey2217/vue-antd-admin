<template>
  <a-layout-sider
    id="sider"
    v-model:collapsed="collapsed"
    breakpoint="xs"
    :trigger="null"
    collapsible
    :collapsedWidth="collapsedWidth"
  >
    <Logo />
    <a-menu
      id="menu"
      class="scroll-container"
      theme="dark"
      mode="inline"
      :default-selected-keys="defaultSelectedKeys"
    >
      <a-menu-item key="/">
        <router-link to="/">
          <HomeOutlined />
          <span>Home</span>
        </router-link>
      </a-menu-item>
      <Menus />
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { HomeOutlined } from '@ant-design/icons-vue';
import { useStore } from 'vuex';
import { RootState } from '@/store';
import { useRoute } from 'vue-router';
import useClientWidth from '@/hooks/useClientWidth';
import Menus from './Menus.vue';
import Logo from './Logo.vue';

export default defineComponent({
  name: 'Sider',
  components: {
    Logo,
    Menus,
    HomeOutlined,
  },
  setup() {
    const store = useStore<RootState>();
    const route = useRoute();
    const path = computed(() => route.path);
    const collapsed = computed(() => store.state.app.collapsed);
    const collapsedWidth = ref(80);
    const { clientWidth } = useClientWidth();
    watch(
      () => clientWidth.value,
      (width) => {
        if (width < 768) {
          store.commit('TOGGLE_COLLAPSE', true);
        }
        if (width < 576) {
          collapsedWidth.value = 0;
        } else {
          collapsedWidth.value = 80;
        }
      },
      {
        immediate: true,
      },
    );
    return {
      collapsed,
      collapsedWidth,
      defaultSelectedKeys: [path],
    };
  },
});
</script>

<style lang="scss" scoped>
#sider {
  height: 100vh;
  overflow: hidden;
}
#menu {
  max-height: calc(100vh - 60px);
  overflow-y: auto;
}
</style>
