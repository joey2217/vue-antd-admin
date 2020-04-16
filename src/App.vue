<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <router-view />
    </a-config-provider>
  </div>
</template>
<script>

import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState({
      locale: state => state.app.locale
    })
  }
};
</script>

<style lang="less">
#app {
  min-height: 100%;
}
</style>
