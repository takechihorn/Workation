<template>
  <v-layout column justify-center align-center>
    <v-card v-if="users">
      <v-card-title>
        ユーザー一覧
        <v-spacer />
        <v-text-field v-model="search" append-icon="mdi-magnify" label="検索" sigle-line />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="5"
        :search="search"
        sort-by="id"
        :sort-desc="true"
        class="elevation-1"
      ></v-data-table>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "ID", value: "id" },
        { text: "メールアドレス", value: "email" },
        { text: "名前", value: "name" },
        { text: "メモ", value: "memo" }
      ]
    };
  },
  computed: {
    users() {
      return this.$store.getters["getUsers"];
    }
  }
};
</script>

<style>
</style>
