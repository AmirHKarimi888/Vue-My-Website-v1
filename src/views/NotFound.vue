<script setup>

</script>

<template>
  <div class="notFound">
    <v-sheet elevation="12" max-width="63%" rounded="lg" width="100%" class="pa-4 text-center mx-auto mt-12">

      <div class="pageHeader">
        <h1 style="font-size: 270%;">Error 404</h1>
      </div>

      <v-divider class="mb-4"></v-divider>

      <div class="pageBody mt-9">
        <v-img src="images/404-error.svg"></v-img>
        <h1 class="mt-9">Page Not Found</h1>
        <v-btn class="bg-pink mt-5">
            <router-link class="text-decoration-none text-white" to="/">Home</router-link>
        </v-btn>
      </div>
  </v-sheet>
  </div>
</template>

