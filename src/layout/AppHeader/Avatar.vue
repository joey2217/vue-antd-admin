<template>
  <a-dropdown>
    <div class="avatar item">
      <a-avatar>
        <template #icon><UserOutlined /></template>
      </a-avatar>
      <DownOutlined />
    </div>
    <template #overlay>
      <a-menu>
        <router-link to="/">
          <a-menu-item>
            <HomeOutlined />
            Home
          </a-menu-item>
        </router-link>
        <a-menu-item @click="logout">
          <LogoutOutlined />
          Logout
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  UserOutlined,
  DownOutlined,
  HomeOutlined,
  LogoutOutlined,
} from '@ant-design/icons-vue';

export default defineComponent({
  name: 'Avatar',
  components: {
    UserOutlined,
    DownOutlined,
    HomeOutlined,
    LogoutOutlined,
  },
  setup() {
    const logout = () => {
      // TODO
      console.log('logout');
    };
    return {
      logout,
    };
  },
});
</script>

<style lang="scss" scoped>
.avatar {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 80px;
  padding: 0 10px;
  justify-content: space-around;
}
</style>
