<template>
  <div class="exception">
    <div class="center">
      <img :src="currentException.img" :alt="'exceptions'+currentException.code" />
    </div>
    <div class="center code">{{currentException.code}}</div>
    <div class="center tip">{{currentException.tip}}</div>
    <div class="center extra">
      <router-link to="/">
        <a-button type="primary">返回首页</a-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exception',
  components: {},
  data() {
    return {
      code: Number(this.$route.params.code) || 404,
      exceptions: [
        {
          code: 403,
          tip: "Sorry, you don't have access to this page.",
          img: 'https://via.placeholder.com/150/FFFFFF/0000FF/?text=403'
        },
        {
          code: 500,
          tip: 'Sorry, the server is reporting an error.',
          img: 'https://via.placeholder.com/150/FFFFFF/FF0000/?text=500'
        }
      ]
    };
  },
  computed: {
    currentException() {
      const exception = this.exceptions.find(item => item.code === this.code);
      if (exception) {
        return exception;
      }
      return {
        code: 404,
        tip: 'Sorry, the page you visited does not exist.',
        img: 'https://via.placeholder.com/150/FFFFFF/000000/?text=404'
      };
    }
  }
};
</script>

<style lang="less" scoped>
.exception {
  padding: 48px 32px;
  .center {
    margin: 0 auto;
    text-align: center;
  }
  .code {
    color: rgba(0, 0, 0, 0.85);
    font-size: 24px;
    line-height: 1.8;
  }
  .tip {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 1.6;
  }
  .extra {
    margin-top: 32px;
  }
}
</style>
