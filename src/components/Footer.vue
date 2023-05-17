<script setup>
import { ref } from "vue";

const medias = ref([
  { icon: "mdi-youtube", link: "https://www.youtube.com/@wrenchworld692/" },
  { icon: "mdi-instagram", link: "https://www.instagram.com/wrenchworld999/" },
  { icon: "mdi-github", link: "https://github.com/AmirHK999/" },
  {
    icon: "mdi-linkedin",
    link: "https://www.linkedin.com/in/amir-hk-01193b215/",
  },
]);
</script>

<template>
  <footer
    id="footer"
    class="footer bg-dark text-center text-white position-relative mt-auto"
  >
    <div class="footer mt-15">
      <v-footer class="bg-grey-darken-4 text-center d-flex flex-column">
        <div>
          <a
            v-for="media in medias"
            :key="media.icon"
            :href="media.link"
            class="text-white"
          >
            <v-btn class="mx-4" :icon="media.icon" variant="text"></v-btn>
          </a>
        </div>

        <div class="pt-0">
          <br />
        </div>

        <v-divider></v-divider>

        <div>
          {{ new Date().getFullYear() }} — <strong>My Website</strong>
        </div>
      </v-footer>
    </div>
  </footer>
</template>

<style>
.footer {
  width: 100%;
}
</style>
