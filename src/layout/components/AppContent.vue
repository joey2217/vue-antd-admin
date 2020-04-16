<template>
  <a-layout-content
    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
  >Content</a-layout-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AppContent',
  components: {},
  data () {
    return {};
  },
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions([])
  },
  mounted () {}
};
</script>

<style   scoped>
</style>
