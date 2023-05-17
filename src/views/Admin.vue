<script setup>
import { onMounted, ref } from "vue";
import { Action } from "../httpService";
import { url, posts } from "../api";


//Add Posts
const title = ref("");

onMounted(() => {
  Action.get(url + "/posts", (response) => posts.value = response.data);
})


const addPost = () => {

  const newPost = {
    "id": parseInt(posts.value.length + 1),
    "title": title.value,
    "date": `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`,
    "updated": "",
    "views": 0,
    "content": [],
    "editCon": false,
  };

  posts.value = [...posts.value, newPost];

  Action.post(url + "/posts", newPost)

  title.value = "";
}







const startEditingPost = (Id, Title) => {
  title.value = Title;

  posts.value = posts.value.map((post) => {
    if (parseInt(post.id) === Id) {
      return { ...post, "editCon": true }
    } else {
      return post;
    }
  })
}

const editPost = (id) => {
  Action.delete(url + "/posts/" + id);

  posts.value = posts.value.map((post) => {
    if (parseInt(post.id) === id) {
      return { ...post, "title": title.value, "editCon": false, "updated": `${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}` }
    } else {
      return post;
    }
  })

  title.value = "";
}

const deletePost = (id) => {
  Action.delete(url + "/posts/" + id);

  posts.value = posts.value.filter((post) => {
    if (parseInt(post.id) !== id) {
      return post;
    }
  })
}

</script>

<template>
  <div class="admin">
    <h3 class="mt-15">Add Posts</h3>
    <v-sheet width="300" class="mx-auto mt-12">
      <v-form fast-fail @submit.prevent>
        <v-text-field v-model="title" label="Title"></v-text-field>

        <!-- <v-text-field v-model="content" label="Content"></v-text-field> -->

        <v-btn color="success" @click="addPost" type="submit" block class="mt-2">Add Post</v-btn>
      </v-form>
    </v-sheet>

    <div class="posts mt-12 mx-auto">
      <v-row>
        <v-col v-for="post in posts" :key="post">
          <v-card min-width="220" max-width="300" class="mx-auto" elevation="6">
            <v-img class="align-end text-white" height="200" :src="'/images/' + parseInt(post.id) + '.jpg'"
              cover>
              <router-link :to="{ name: 'pageAdmin', params: { 'id': parseInt(post.id) }}">
                <v-card-title>{{ post.title }}</v-card-title>
              </router-link>
            </v-img>
          
            <v-card-subtitle class="pt-4">
              Number {{ parseInt(post.id) }}
            </v-card-subtitle>
          
          
            <v-card-actions>
              <v-btn color="red" @click="deletePost(parseInt(post.id))">
                Delete Post
              </v-btn>
          
              <v-btn v-if="!post.editCon" color="orange" @click="startEditingPost(parseInt(post.id)), post.title">
                Start Editing Post
              </v-btn>
              <v-btn v-if="post.editCon" color="success" @click="editPost(parseInt(post.id))">
                Edit Post
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style>
</style>