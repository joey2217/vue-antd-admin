<template>
  <a-layout id="layout">
    <Sider />
    <a-layout>
      <AppHeader />
      <AppMain />
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppMain from './AppMain.vue';
import Sider from './Sider/index.vue';
import AppHeader from './AppHeader/index.vue';

export default defineComponent({
  name: 'Layout',
  components: {
    Sider,
    AppMain,
    AppHeader,
  },
  setup() {
    return {
    };
  },
});
</script>

<style lang="scss">
</style>
