<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="toggleCollapsed"
    />
  </a-layout-header>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Navbar',
  components: {},
  data () {
    return {};
  },
  computed: {
    ...mapState({
      collapsed: state => state.app.collapsed
    })
  },
  methods: {
    ...mapMutations({
      toggleCollapsed: 'app/TOGGLE_COLLAPSED'
    })
  },
  mounted () {}
};
</script>

<style lang="less">
</style>
