<template>
  <a-layout id="layout">
    <SideBar />
    <a-layout>
      <Navbar />
      <AppContent />
    </a-layout>
  </a-layout>
</template>

<script>
import SideBar from './components/SideBar/index.vue';
import Navbar from './components/Navbar/index.vue';
import AppContent from './components/AppContent.vue';

export default {
  name: 'Layout',
  components: {
    SideBar,
    Navbar,
    AppContent
  },
  data () {
    return {
      collapsed: false
    };
  }
};
</script>

<style lang="less">
#layout {
  min-height: 100%;
  height: 100vh;
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
}
</style>
