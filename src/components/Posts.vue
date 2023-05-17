<script setup>
import { posts } from "../api";

</script>

<template>
    <div class="posts mt-12 mx-auto">
      <v-row>
        <v-col v-for="post in posts" :key="post">
          <router-link :to="{name: 'page', params: { 'id': post.id, 'title': post.title, 'content': post.content }}">
            <v-card min-width="220" max-width="300" class="mx-auto" elevation="6">
              <v-img class="align-end text-white" height="200" :src="'/images/' + post.id + '.jpg'" cover>
                <v-card-title>{{ post.title }}</v-card-title>
              </v-img>

              <v-card-subtitle class="pt-4 mb-3">
                <v-icon style="font-size: 140%">mdi-eye</v-icon> {{ post.views }}
              </v-card-subtitle>
            </v-card>
          </router-link>
        </v-col>

      </v-row>
    </div>
</template>

<style>

</style>