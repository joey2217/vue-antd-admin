<template>
  <div class="logo">Logo</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Logo',
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  text-align: center;
}
</style>
