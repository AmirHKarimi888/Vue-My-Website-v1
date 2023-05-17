<template>
  <div class="header">
    <v-app-bar color="grey-darken-4">
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-tabs centered color="white">
        <div>
          <v-tab to="/">
            Home
          </v-tab>
          <v-tab v-if="USER.isAdmin" to="/admin">
            Admin
          </v-tab>
          <v-tab to="/blog">
            Blog
          </v-tab>
        </div>
      </v-tabs>

      <v-spacer></v-spacer>

      <v-spacer></v-spacer>

      <v-btn v-if="!USER.isLogin" class="ms-13" variant="outlined">
        <router-link to="/signup" class="text-decoration-none text-white"
          >Signup</router-link
        >
      </v-btn>

      <a class="me-4" style="cursor: pointer">
        <v-avatar
          v-if="USER.isLogin"
          @click.stop="drawer = !drawer"
          :image="USER.avatar"
          size="35"
        ></v-avatar>
      </a>
    </v-app-bar>

    <div class="sidebar">
      <v-navigation-drawer
        location="right"
        class="bg-grey-darken-4"
        v-model="drawer"
        temporary
      >
        <v-list-item
          class="mt-2 mb-2"
          :prepend-avatar="USER.avatar"
          :title="USER.username"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            v-if="USER.isAdmin"
          >
          <router-link class="text-decoration-none text-white" to="/admin">Admin</router-link>
        </v-list-item>
          <!-- <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Home"
            value="home"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="About"
            value="about"
          ></v-list-item> -->
        </v-list>
        <template v-slot:append>
          <div class="pa-2">
            <v-btn @click="logout" class="bg-orange" block> Logout </v-btn>
          </div>
          <!-- <div class="pa-2">
            <v-btn class="bg-red" block> Delete Account </v-btn>
          </div> -->
        </template>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
};
</script>

<script setup>
import { ref } from "vue";
import { logout } from "../auth";
import { USER } from "../api";





const links = ref([
  {
    title: "Home",
    path: "/",
    access: true,
  },
  {
    title: "Admin",
    path: "/admin",
    access: USER.value.isAdmin
  },
  {
    title: "Blog",
    path: "/blog",
    access: true,
  },
]);
</script>
