<template>
  <a-breadcrumb class="breadcrumb">
    <a-breadcrumb-item>
      <a href>Application Center</a>
    </a-breadcrumb-item>
    <a-breadcrumb-item>An Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Breadcrumb',
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions([])
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>
