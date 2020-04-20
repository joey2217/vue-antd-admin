<template>
  <a-dropdown>
    <a class="ant-dropdown-link account-link" @click="e => e.preventDefault()">
      <a-avatar class="avatar" :src="avatar" />
      <span class="name">{{name}}</span>
    </a>
    <a-menu slot="overlay">
      <a-menu-item key="0">
        <a target="_blank" rel="noopener noreferrer" href="/">
          <a-icon type="home" />
          <span>首页</span>
        </a>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item key="3" @click="logout">
        <a-icon type="logout" />
        <span>退出登录</span>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Account',
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      name: state => state.user.name,
      avatar: state => state.user.avatar
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<style lang="less" scoped>
.account-link {
  padding: 0 20px;
  line-height: 64px;
  .name {
    padding: 0 10px;
    color: rgba(0, 0, 0, 0.65);
  }
}
</style>
