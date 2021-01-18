<template>
  <a-layout-header id="header">
    <MenuUnfoldOutlined
      :class="{ collapsed, trigger: true }"
      @click="toggleCollapse"
    />
    <div class="right">
      <Avatar />
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { useStore } from 'vuex';
import { RootState } from '@/store';
import Avatar from './Avatar.vue';

export default defineComponent({
  name: 'AppHeader',
  components: {
    MenuUnfoldOutlined,
    Avatar,
  },
  setup() {
    const store = useStore<RootState>();
    const collapsed = computed(() => store.state.app.collapsed);
    const toggleCollapse = () => {
      store.commit('TOGGLE_COLLAPSE');
    };
    return {
      toggleCollapse,
      collapsed,
    };
  },
});
</script>

<style lang="scss" scoped>
#header {
  background-color: #fff;
  padding: 0 16px;
  display: flex;
  align-items: center;
  .trigger {
    font-size: 18px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .collapsed {
    transform: rotate(180deg);
  }
  .right{
    margin-left: auto;
    height: 100%;
    display: flex;
    .item{
        &:hover{
          background: rgba(0,0,0,.025);
        }
    }
  }
}
</style>
