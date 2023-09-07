<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { Action } from "../httpService";
import { url } from "../api";

const id = useRoute().params.id;

const post = ref({});


const content = ref("");
const type = ref("");
const link = ref("");
const types = ref(["h1", "h2", "h3", "h4", "h5", "h6", "div", "p", "a", "br", "img", "audio", "video", "iframe"]);


Action.get(url + "/posts/" + id, (response) => post.value = response.data);

const addContent = () => {
    post.value.updated = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`;
    post.value.content = [...post.value.content, {
        "content": content.value,
        "type": type.value,
        "link": link.value,
        "id": post.value.content.length + 1,
        "editCon": false
    }]

    post.value = { ...post.value, "content": post.value.content, "updated": post.value.updated, }

    Action.put(url + "/posts/" + id, post.value);
}



const startEditContent = (Id) => {
    post.value.content[Id - 1] = { ...post.value.content[Id - 1], "editCon": true };
    type.value = post.value.content[Id - 1].type;
    content.value = post.value.content[Id - 1].content;
    link.value = post.value.content[Id - 1].link;
}
const editContent = (Id) => {
    post.value.updated = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`;
    post.value.content[Id - 1] = { ...post.value.content[Id - 1], "type": type.value, "content": content.value, "link": link.value, "editCon": false };

    Action.put(url + "/posts/" + id, { ...post.value, "updated": post.value.updated, "content": post.value.content })
        .then(() => {
            type.value = "";
            content.value = "";
            link.value = "";
        })

}



const deleteContent = (Id) => {
    post.value.updated = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`;
    post.value.content = post.value.content.filter((innerContent) => {
        if (innerContent.id !== Id) {
            return innerContent;
        }
    })

    Action.delete(url + "/posts/" + id)
        .then(() => {
            Action.post(url + "/posts", { ...post.value, "updated": post.value.updated, "content": post.value.content })
        })
}


</script>

<template>
    <div class="pageAdmin">
        <v-sheet elevation="12" max-width="63%" rounded="lg" width="100%" class="pa-4 text-center mx-auto mt-12">
            <!-- <v-icon class="mb-5" color="success" icon="mdi-check-circle" size="112"></v-icon> -->

            <div class="pageHeader">
                <h2 class="text-h5 mt-6 mb-6">{{ post.title }}</h2>
                <p class="mb-4 text-medium-emphasis text-body-2">
                    Created On {{ post.date }} <br>
                    Updated On {{ post.updated }}
                </p>
            </div>

            <v-divider class="mb-4"></v-divider>

            <!-- <v-img :src="'../images/' + post.id + '.jpg'"></v-img> -->

            <div class="pageBody">
                <ul style="list-style-type: none;">
                    <li v-for="section in post.content" :key="section">
                        <h1 v-if="section.type === 'h1' ? true : false">
                            {{ section.content }}
                            <v-icon v-if="!section.editCon" icon="mdi-pen" size="20" color="grey-darken-1"
                                @click="startEditContent(section.id)"></v-icon>
                            <v-icon v-if="section.editCon" icon="mdi-pen" size="20" color="success"
                                @click="editContent(section.id)"></v-icon>
                            <v-icon icon="mdi-delete" size="20" color="grey-darken-1"
                                @click="deleteContent(section.id)"></v-icon>
                        </h1>
                        <h2 v-if="section.type === 'h2' ? true : false">{{ section.content }}
                            <v-icon v-if="!section.editCon" icon="mdi-pen" size="20" color="grey-darken-1"
                                @click="startEditContent(section.id)"></v-icon>
                            <v-icon v-if="section.editCon" icon="mdi-pen" size="20" color="success"
                                @click="editContent(section.id)"></v-icon>
                            <v-icon icon="mdi-delete" size="20" color="grey-darken-1"
                                @click="deleteContent(section.id)"></v-icon>
                        </h2>
                        <h3 v-if="section.type === 'h3' ? true : false">{{ section.content }}
                            <v-icon v-if="!section.editCon" icon="mdi-pen" size="20" color="grey-darken-1"
                                @click="startEditContent(section.id)"></v-icon>
                            <v-icon v-if="section.editCon" icon="mdi-pen" size="20" color="success"
                                @click="editContent(section.id)"></v-icon>
                            <v-icon icon="mdi-delete" size="20" color="grey-darken-1"
                                @click="deleteContent(section.id)"></v-icon>
                        </h3>
                        <h4 v-if="section.type === 'h4' ? true : false">{{ section.content }}
                            <v-icon v-if="!section.editCon" icon="mdi-pen" size="20" color="grey-darken-1"
                                @click="startEditContent(section.id)"></v-icon>
                            <v-icon v-if="section.editCon" icon="mdi-pen" size="20" color="success"
                                @click="editContent(section.id)"></v-icon>
                            <v-icon icon="mdi-delete" size="20" color="grey-darken-1"
                                @click="deleteContent(section.id)"></v-icon>
                        </h4>
                        <h5 v-if="section.type === 'h5' ? true : false">{{ section.content }}
                            <v-icon v-if="!section.editCon" icon="mdi-pen" size="20" color="grey-darken-1"
                                @click="startEditContent(section.id)"></v-icon>
                            <v-icon v-if="section.editCon" icon="mdi-pen" size="20" color="success"
                                @click="editContent(section.id)"></v-icon>
                            <v-icon icon="mdi-delete" size="20" color="grey-darken-1"
                                @click="deleteContent(section.id)"></v-icon>
                        </h5>
                        <h6 v-if="section.type === 'h6' ? true : false">{{ section.content }}
                            <v-icon v-if="!section.editCon" icon="mdi-pen" size="20" color="grey-darken-1"
                                @click="startEditContent(section.id)"></v-icon>
                            <v-icon v-if="section.editCon" icon="mdi-pen" size="20" color="success"
                                @click="editContent(section.id)"></v-icon>
                            <v-icon icon="mdi-delete" size="20" color="grey-darken-1"
                                @click="deleteContent(section.id)"></v-icon>
                        </h6>
                        <div v-if="section.type === 'div' ? true : false">{{ section.content }}
                            <v-icon v-if="!section.editCon" icon="mdi-pen" size="20" color="grey-darken-1"
                                @click="startEditContent(section.id)"></v-icon>
                            <v-icon v-if="section.editCon" icon="mdi-pen" size="20" color="success"
                                @click="editContent(section.id)"></v-icon>
                            <v-icon icon="mdi-delete" size="20" color="grey-darken-1"
                                @click="deleteContent(section.id)"></v-icon>
                        </div>
                        <p v-if="section.type === 'p' ? true : false" class="mb-4 text-medium-emphasis text-body-2">{{
                            section.content }}
                            <v-icon v-if="!section.editCon" icon="mdi-pen" size="20" color="grey-darken-1"
                                @click="startEditContent(section.id)"></v-icon>
                            <v-icon v-if="section.editCon" icon="mdi-pen" size="20" color="success"
                                @click="editContent(section.id)"></v-icon>
                            <v-icon icon="mdi-delete" size="20" color="grey-darken-1"
                                @click="deleteContent(section.id)"></v-icon>
                        </p>
                        <nav v-if="section.type === 'a' ? true : false">
                            <v-icon v-if="!section.editCon" icon="mdi-pen" size="20" color="grey-darken-1"
                                @click="startEditContent(section.id)"></v-icon>
                            <v-icon v-if="section.editCon" icon="mdi-pen" size="20" color="success"
                                @click="editContent(section.id)"></v-icon>
                            <v-icon icon="mdi-delete" size="20" color="grey-darken-1"
                                @click="deleteContent(section.id)"></v-icon>
                            <a class="mb-4 text-decoration-none" :href="section.link">{{ section.content }}
                            </a>
                        </nav>
                        <nav v-if="section.type === 'br' ? true : false" @click="deleteContent(section.id)">
                            <br>
                        </nav>
                        <v-img v-if="section.type === 'img' ? true : false" :src="'../images/' + section.content">
                            <v-icon v-if="!section.editCon" icon="mdi-pen" size="20" color="grey-darken-1"
                                @click="startEditContent(section.id)"></v-icon>
                            <v-icon v-if="section.editCon" icon="mdi-pen" size="20" color="success"
                                @click="editContent(section.id)"></v-icon>
                            <v-icon icon="mdi-delete" size="20" color="grey-darken-1"
                                @click="deleteContent(section.id)"></v-icon>
                        </v-img>
                        <nav v-if="section.type === 'audio' ? true : false">
                            <audio style="width: 90%;" controls>
                                <source :src="'../musics/' + section.content" type="audio/mpeg">
                            </audio>
                            <v-icon v-if="!section.editCon" icon="mdi-pen" size="20" color="grey-darken-1"
                                @click="startEditContent(section.id)"></v-icon>
                            <v-icon v-if="section.editCon" icon="mdi-pen" size="20" color="success"
                                @click="editContent(section.id)"></v-icon>
                            <v-icon icon="mdi-delete" size="20" color="grey-darken-1"
                                @click="deleteContent(section.id)"></v-icon>
                        </nav>
                        <nav v-if="section.type === 'video' ? true : false">
                            <audio controls>
                                <source :src="'../videos/' + section.content" type="video/mp4">
                            </audio>
                            <v-icon v-if="!section.editCon" icon="mdi-pen" size="20" color="grey-darken-1"
                                @click="startEditContent(section.id)"></v-icon>
                            <v-icon v-if="section.editCon" icon="mdi-pen" size="20" color="success"
                                @click="editContent(section.id)"></v-icon>
                            <v-icon icon="mdi-delete" size="20" color="grey-darken-1"
                                @click="deleteContent(section.id)"></v-icon>
                        </nav>

                        <nav v-if="section.type === 'iframe' ? true : false">
                            <iframe width="420" height="315" :src="section.content">
                            </iframe>
                            <v-icon v-if="!section.editCon" icon="mdi-pen" size="20" color="grey-darken-1"
                                @click="startEditContent(section.id)"></v-icon>
                        <v-icon v-if="section.editCon" icon="mdi-pen" size="20" color="success"
                            @click="editContent(section.id)"></v-icon>
                        <v-icon icon="mdi-delete" size="20" color="grey-darken-1"
                            @click="deleteContent(section.id)"></v-icon>
                    </nav>
                </li>
            </ul>
        </div>


        <v-textarea v-model="content" label="Content"></v-textarea>
        <v-text-field v-model="link" label="Link"></v-text-field>
        <v-select label="Type" name="types" v-model="type" :items="types"></v-select>


        <v-btn @click="addContent" class="text-none" color="success" rounded variant="flat">Add To Body</v-btn>


        <v-divider class="mb-4"></v-divider>


        <!-- <div class="pagination">
            <a :href="`page${ parseInt(post.id) - 1 }`" aria-disabled>
                <v-btn elevation="9" icon="mdi-menu-left" size="small"></v-btn>
            </a>
            <a :href="`page${ parseInt(post.id) }`">
                <v-btn elevation="9" icon="mdi-menu-left" size="small" style="margin-left: 6px; margin-right: 6px;" rounded>{{ post.id }}</v-btn>
            </a>
            <a :href="`page${ parseInt(post.id) + 1 }`">
                <v-btn elevation="9" icon="mdi-menu-right" size="small"></v-btn>
            </a>
          </div> -->

    </v-sheet>
</div></template>

