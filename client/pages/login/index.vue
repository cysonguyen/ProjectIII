<template>
  <a-row
    type="flex"
    justify="center"
    align="middle"
    style="background: #ececec; height: 100vh; padding-bottom: 150px"
  >
    <a-col :md="6">
      <a-card>
        <h1>{{ "Login" }}</h1>
        <a-form id="form-login" @submit.prevent="handleLogin">
          <a-form-item label="Username" name="username" :required="true">
            <a-input v-model="form.username" />
          </a-form-item>
          <a-form-item label="Password" name="password" :required="true">
            <a-input v-model="form.password" />
          </a-form-item>
          <a-button type="primary" htmlType="submit">Login</a-button>
          <a-row>
            <nuxt-link style="float: right" to="/forgot-password"
              >Forgot password</nuxt-link
            >
          </a-row>
        </a-form>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  layout: "guest",
  //middleware: "login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({
      login: "modules/auth/login",
    }),
    async handleLogin() {
      try {
        let response = await this.login(this.form);
        localStorage.setItem("token", response.data);
        this.$router.push("/");
      } catch (error) {
        this.$notification.error({
          message: "login_failed",
          description: error.response.data.error,
          duration: 2.5,
        });
      }
    },
  },
};
</script>


<style>
#form-login .ant-form-item-label {
  line-height: normal;
}
</style>