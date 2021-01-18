<template>
  <a-result status="403" title="403" sub-title="Sorry, you are not authorized to access this page.">
   <template #extra>
      <router-link to="/">
        <a-button type="primary"> Back Home </a-button>
      </router-link>
    </template>
  </a-result>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotAuth',
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
</style>
