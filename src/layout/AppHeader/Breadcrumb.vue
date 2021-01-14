<template>
  <a-breadcrumb id="breadcrumb">
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item>An Application</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const route = useRoute();
    watch(
      () => route.path,
      (path) => {
        console.log(path);
      },
      { immediate: true },
    );
    return {};
  },
});
</script>

<style lang="scss" scoped>
#breadcrumb {
  margin-left: 16px;
}
</style>
