<template>
  <router-link to="/" tag="div" class="logo">
    <img
      class="img"
      src="https://ae01.alicdn.com/kf/H5333aacd962a47c09b9827d3613efe2ch.png"
      alt="logo"
    />
    <span class="title">Antd-Admin</span>
  </router-link>
</template>

<script>
export default {
  name: 'Logo',
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  overflow: hidden;
  cursor: pointer;
  .img {
    width: 30px;
    height: 30px;
    margin: 0 9px;
  }
  .title {
    font-size: 18px;
    color: #eee;
    font-weight: 300;
    vertical-align: middle;
  }
}
</style>
