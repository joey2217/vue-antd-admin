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
      v-model:selectedKeys="selectedKeys"
    >
      <a-menu-item key="1">
        <user-outlined />
        <span>nav 1</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import Logo from './Logo.vue';
import { useStore } from 'vuex';
import { RootState } from '@/store';
import useClientWidth from '@/hooks/useClientWidth';

export default defineComponent({
  name: 'Sider',
  components: {
    Logo,
    UserOutlined,
  },
  setup() {
    const store = useStore<RootState>();
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
      selectedKeys: ['1'],
      collapsed,
      collapsedWidth,
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
