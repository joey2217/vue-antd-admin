<template>
  <a-layout-header class="navbar"  style="background: #fff; padding: 0">
    <section class="navbar-left">
      <Trigger />
      <Breadcrumb />
    </section>
    <section class="navbar-right">
      <Account />
    </section>
  </a-layout-header>
</template>

<script>
import Trigger from './Trigger.vue';
import Breadcrumb from './Breadcrumb.vue';
import Account from './Account.vue';

export default {
  name: 'Navbar',
  components: { Trigger, Breadcrumb, Account },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>

<style lang="less">
</style>
