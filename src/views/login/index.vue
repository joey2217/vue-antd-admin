<template>
  <div id="login-container">
    <a-card title="Login" id="login-card">
      <!-- <template #extra> </template> -->
      <a-form :wrapper-col="{ span: 24 }">
        <a-form-item v-bind="validateInfos.username">
          <a-input
            v-model:value="loginForm.username"
            placeholder="Username(any)"
          >
            <template #prefix><UserOutlined type="user" /></template>
          </a-input>
        </a-form-item>
        <a-form-item v-bind="validateInfos.password">
          <a-input-password
            v-model:value="loginForm.password"
            placeholder="Password(any)"
          >
            <template #prefix><LockOutlined /></template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button :loading="loading" type="primary" block @click="onSubmit"> Login </a-button>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRaw } from 'vue';
import { useForm } from '@ant-design-vue/use';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { LoginData } from '@/api/login';

export default defineComponent({
  name: 'Login',
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const loading = ref(false);
    const loginForm = reactive<LoginData>({
      username: '',
      password: '',
    });
    const rulesRef = reactive({
      username: [
        { required: true, message: 'Please input username' },
        {
          pattern: /^[a-zA-Z0-9_-]{4,16}$/,
          message: 'Please input correct username',
        },
      ],
      password: [
        { required: true, message: 'Please input password' },
        {
          pattern: /^[a-zA-Z0-9_-]{4,16}$/,
          message: 'Please input correct password',
        },
      ],
    });
    const { resetFields, validate, validateInfos } = useForm(
      loginForm,
      rulesRef,
    );
    const onSubmit = async () => {
      loading.value = true;
      await validate();
      const data = { ...toRaw(loginForm) };
      await store.dispatch('login', data);
      router.push('/');
    };
    return {
      resetFields,
      validateInfos,
      loginForm,
      onSubmit,
      loading,
    };
  },
});
</script>

<style lang="scss" scoped>
#login-container {
  height: 100vh;
  overflow: hidden;
  background: url(../../assets/img/background.png) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20vh;
}
#login-card {
  width: 100%;
  max-width: 500px;
}
</style>
