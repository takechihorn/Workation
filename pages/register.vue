<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="pressed">
    <v-text-field
      v-model="email"
      prepend-icon="mdi-vuetify"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      v-bind:type="isChecked ? 'text' : 'password'"
      prepend-icon="mdi-lock"
      v-bind:append-icon="isChecked ? 'mdi-eye' : 'mdi-eye-off'"
      label="password"
      @click:append="isChecked = !isChecked"
    ></v-text-field>

    <v-btn type="submit" :disabled="!valid" color="success" class="mr-4" @click="validate">Register</v-btn>

    <v-btn color="warning" class="mr-4" @click="reset">cancel</v-btn>
    <v-btn color="#3b5998" class="mr-4 white--text" @click="loginFB">Facebook</v-btn>
    <v-btn color="#1DA1F2" class="mr-4 white--text" @click="reset">Twitter</v-btn>
    <v-btn color="#DD5144" class="mr-4 white--text" @click="loginG">Google</v-btn>
  </v-form>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
      valid: true,
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length <= 10) || "Password must be less than 10 characters"
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      isChecked: false
    };
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    ...mapActions({
      register: "user/createUser",
      loginFacebook: "user/loginFacebook",
      loginGoogle: "user/loginGoogle"
    }),
    async pressed() {
      console.log("register");
      await this.register({ email: this.email, password: this.password });
      this.$router.replace({ name: "room" });
    },
    async loginFB() {
      await this.loginFacebook();
      this.$router.replace({ name: "room" });
      console.log("Facebook Login 成功");
    },
    async loginG() {
      await this.loginGoogle();
      this.$router.replace({ name: "room" });
      console.log("Google Login 成功");
    }
  }
};
</script>

<style>
</style>
