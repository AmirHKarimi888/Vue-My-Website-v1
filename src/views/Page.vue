<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { Action } from "../httpService";
import { url, posts } from "../api";

const id = useRoute().params.id;

const post = ref({});

Action.get(url + "/posts/" + id, (response) => post.value = response.data)
  .then(() => {
    post.value = { ...post.value, "views": parseInt(post.value.views) + 1 }
    Action.delete(url + "/posts/" + id)
    .then(() => {
      Action.post(url + "/posts/", { ...post.value, "id": id});
    })
  })

</script>

<template>
  <div class="page">
    <v-sheet elevation="12" max-width="63%" rounded="lg" width="100%" class="pa-4 text-center mx-auto mt-12">
      <!-- <v-icon class="mb-5" color="success" icon="mdi-check-circle" size="112"></v-icon> -->

      <div class="pageHeader">
        <h2 class="text-h5 mt-6 mb-6">{{ post.title }}</h2>
        <p class="mb-4 text-medium-emphasis text-body-2">
            Created On {{ post.date }} <br>
            Updated On {{ post.updated }} <br>
            <v-icon icon="mdi-eye"></v-icon> {{ post.views }}
        </p>
      </div>

      <v-divider class="mb-4"></v-divider>

      <!-- <v-img :src="'images/' + post.id + '.jpg'"></v-img> -->

      <div class="pageBody">
        <ul style="list-style-type: none;">
            <li v-for="section in post.content" :key="section">
                <h1 v-if="section.type === 'h1' ? true : false">
                    {{ section.content }}
                </h1>
                <h2 v-if="section.type === 'h2' ? true : false">{{ section.content }}
                </h2>
                <h3 v-if="section.type === 'h3' ? true : false">{{ section.content }}
                </h3>
                <h4 v-if="section.type === 'h4' ? true : false">{{ section.content }}
                </h4>
                <h5 v-if="section.type === 'h5' ? true : false">{{ section.content }}
                </h5>
                <h6 v-if="section.type === 'h6' ? true : false">{{ section.content }}
                </h6>
                <div v-if="section.type === 'div' ? true : false">{{ section.content }}
                </div>
                <p v-if="section.type === 'p' ? true : false" class="mb-4 text-medium-emphasis text-body-2">{{ section.content }}
                </p>
                <nav v-if="section.type === 'br' ? true : false">
                    <br>
                </nav>
                <v-img v-if="section.type === 'img' ? true : false" :src="'../images/' + section.content">
                </v-img>
                <nav v-if="section.type === 'audio' ? true : false">
                    <audio style="width: 90%;" controls>
                        <source :src="'../musics/' + section.content" type="audio/mpeg">
                    </audio>
                </nav>
                <nav v-if="section.type === 'video' ? true : false">
                    <audio controls>
                        <source :src="'../videos/' + section.content" type="video/mp4">
                    </audio>
                </nav>

                <nav v-if="section.type === 'iframe' ? true : false">
                    <iframe width="420" height="315"
                    :src="section.content">
                    </iframe>
                </nav> 
            </li>
        </ul>
      </div>

      <v-divider class="mb-4"></v-divider>


      <!-- <div class="pagination">
        <v-btn elevation="9" icon="mdi-menu-left" size="small" rounded :disabled="parseInt(post.id) - 1 === 0 ? true : false">
          <a :href="`page${ parseInt(post.id) - 1 }`">{{ parseInt(post.id) - 1 }}</a>
        </v-btn>
        <v-btn elevation="9" icon="mdi-menu-left" size="small" style="margin-left: 6px; margin-right: 6px;" rounded>
          <a>{{ post.id }}</a>
        </v-btn>

        <v-btn elevation="9" icon="mdi-menu-left" size="small" rounded :disabled="parseInt(post.id) + 1 === posts.length + 1 ? true : false">
          <a :href="`page${ parseInt(post.id) + 1 }`">{{ parseInt(post.id) + 1 }}</a>
        </v-btn>
      </div> -->

  </v-sheet>
  </div>
</template>

