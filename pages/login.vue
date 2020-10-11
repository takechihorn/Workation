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

    <v-btn type="submit" :disabled="!valid" color="success" class="mr-4" @click="validate">Login</v-btn>

    <v-btn color="warning" class="mr-4" @click="reset">Test login</v-btn>
  </v-form>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import { mapActions } from "vuex";

export default {
  data: () => ({
    email: "",
    password: "",
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
  }),

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
      login: "user/login"
    }),
    async pressed() {
      console.log("login");
      await this.login({ email: this.email, password: this.password });
      this.$router.replace({ name: "room" });
    }
  }
};
</script>

<style>
</style>
