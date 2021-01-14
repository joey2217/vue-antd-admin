<template>
  <a-layout-content id="content">
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </a-layout-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AppMain',
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
#content {
  margin: 24px 16px;
  padding: 24px;
  background-color: #fff;
  height: calc(100vh - 164px);
  overflow: auto;
}
</style>
