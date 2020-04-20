<template>
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="toggleCollapsed"
    />
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Trigger',
  components: {},
  data() {
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
  mounted() {}
};
</script>

<style lang="less">
</style>
