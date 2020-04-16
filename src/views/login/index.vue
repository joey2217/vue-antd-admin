<template>
  <a-row type="flex" justify="center" align="middle" class="login-container">
    <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">
      <a-card title="登录">
        <a-form id="login" :form="form" class="login-form" @submit="handleSubmit">
          <a-form-item>
            <a-input
              allowClear
              placeholder="Username"
              v-decorator="[ 'userName',{ rules: [{ required: true,min:6,}] },]"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input-password
              allowClear
              placeholder="Password"
              v-decorator="['password',{ rules: [{ required: true, min:6,}] },]"
              @pressEnter="handleSubmit"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input-password>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" class="login-button">Log in</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import { login } from '@/api/user';

export default {
  name: 'Login',
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'login' });
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        try {
          if (!err) {
            console.log('Received values of form: ', values);
            const { message } = await login(values);
            this.$message.success(message);
            this.$router.push('/');
          }
        } catch (error) {
          console.error(error);
        }
      });
    }
    // userNameValidator (rule, value, callback) {
    //   const userName = value.trim();
    //   if (!userName) {
    //     callback(new Error('Please input your username!'));
    //   } else if (userName.length < 6) {
    //     callback(new Error('Please input at least 6 characters!'));
    //   } else {
    //     callback();
    //   }
    // },
    // passwordValidator (rule, value, callback) {
    //   const password = value.trim();
    //   if (!password) {
    //     callback(new Error('Please input your password!'));
    //   } else if (password.length < 6) {
    //     callback(new Error('Please input at least 6 characters!'));
    //   } else {
    //     callback();
    //   }
    // }
  }
};
</script>

<style lang="less" scoped>
.login-container {
  height: 90vh;
  .login-button {
    width: 100%;
  }
}
</style>
