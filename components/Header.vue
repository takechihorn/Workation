<template>
  <v-app id="inspire">
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="dark" dark>
      <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->

      <v-toolbar-title style="width: 350px">
        <a href="/" class="white--text" style="text-decoration: none">
          <v-icon>mdi-owl</v-icon>&nbsp;Workation
        </a>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down pl-10 ml-4"
      />
      <v-spacer />
      <v-btn href="/personal" icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <!-- <v-btn v-on="on" icon>
        <v-badge content="2" value="2" color="green" overlap>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>-->
      <v-btn href="/cart" icon>
        <v-badge content="2" value="2" color="primary" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-bottom-navigation :value="activeBtn" color="primary" horizontal>
        <a href="/" class="v-btn">
          <span>Home</span>
        </a>
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on">
              <span>Room</span>
            </v-btn>
          </template>
          <v-card class="mx-auto" max-width="344" outlined>
            <v-list-item v-for="(item, index) in items" :key="index" href="/room">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-card>
        </v-menu>
        <v-btn href="/register">
          <span>Register</span>
        </v-btn>
        <v-btn href="/login">
          <span>Login</span>
        </v-btn>
      </v-bottom-navigation>
      <v-spacer></v-spacer>
      <nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: "Tokyo" },
        { title: "New York" },
        { title: "London" },
        { title: "Berlin" },
        { title: "Beijing" }
      ],
      activeBtn: 1
    };
  }
};
</script>
