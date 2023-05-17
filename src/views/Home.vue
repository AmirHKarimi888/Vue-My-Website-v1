<script setup>
import Posts from '../components/Posts.vue';
</script>

<template>
  <div class="home">
    <v-parallax src="/images/parallex-1.jpg">
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h4 font-weight-thin mb-4">
          My Website
        </h1>
        <h3 class="subheading">
          My Official Website
        </h3>
      </div>
    </v-parallax>

    <v-row dense>
      <v-col cols="12">
        <v-card color="white">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div class="d-grid align-self-center text-left ms-4">
              <v-card-title class="text-h5">
                Blog
              </v-card-title>

              <v-card-subtitle>Read My Latest Posts</v-card-subtitle>

              <v-card-actions>
                <v-btn class="ms-2" variant="outlined" size="small">
                  <router-link to="blog" class="text-decoration-none text-black">Go To Blog</router-link>
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="40%" rounded="0">
              <v-img src="/images/pic1.png"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <v-card color="grey-darken-4">
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-3" size="40%" rounded="0">
              <v-img src="/images/pic4.png"></v-img>
            </v-avatar>

            <div class="d-grid align-self-center text-right me-4">
              <v-card-title class="text-h5">
                YouTube
              </v-card-title>

              <v-card-subtitle>Visit My YouTube Channel</v-card-subtitle>

              <v-card-actions>
                <v-btn class="ms-13" variant="outlined" size="small">
                  <a href="https://www.youtube.com/@wrenchworld692" class="text-decoration-none text-white">Visit YouTube</a>
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <v-card color="white">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div class="d-grid align-self-center text-left ms-4">
              <v-card-title class="text-h5">
                Github
              </v-card-title>

              <v-card-subtitle>Visit My Github</v-card-subtitle>

              <v-card-actions>
                <v-btn class="ms-2" variant="outlined" size="small">
                  <a href="https://github.com/AmirHK999/" class="text-decoration-none text-black">Visit Github</a>
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="40%" rounded="0">
              <v-img src="/images/pic3.png"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row dense>
      <v-col cols="12">
        <v-card color="grey-darken-4">
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar class="ma-3" size="40%" rounded="0">
              <v-img src="/images/pic2.png"></v-img>
            </v-avatar>

            <div class="d-grid align-self-center text-right me-4">
              <v-card-title class="text-h5">
                Linkedin
              </v-card-title>

              <v-card-subtitle>Visit My Linkedin</v-card-subtitle>

              <v-card-actions>
                <v-btn class="ms-13" variant="outlined" size="small">
                  <a href="https://www.linkedin.com/in/amir-hk-01193b215/" class="text-decoration-none text-white">Visit Linkedin</a>
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <h2 class="mt-12">Recent Posts</h2>
    <Posts></Posts>
  </div>
</template>


<style>
.home {
  margin-top: 64px;
}
</style>


