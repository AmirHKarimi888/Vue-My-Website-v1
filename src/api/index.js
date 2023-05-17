import { ref } from "vue";
import { Action } from "../httpService";
import { authedUser } from "../auth";
import { router } from "../router";

const url = "https://6442c82f33997d3ef9197ae3.mockapi.io";
//https://api.npoint.io/7f27be607f821ee51378
//https://6442c82f33997d3ef9197ae3.mockapi.io
//"http://localhost:3000"

const posts = ref([]);
Action.get(url + "/posts", (response) => posts.value = response.data);

const USER = ref({});
Action.get(url + "/users/" + authedUser.value, (response) => USER.value = response.data)

router.beforeEach((to, from, next) => { 
    if (to.matched.some(record => record.meta.conditionalRoute)) { 
        // this route requires condition to be accessed
        // if not, redirect to home page. 
        if (!USER.value.isAdmin) { 
            //check codition is false
            next({ path: '/'}) 
        } else { 
            //check codition is true
            next() 
        } 
    } else { 
        next() // make sure to always call next()! 
    } 
  }) 

// const links = ref([]);
// Action.get(url + "/navbar", (response) => links.value = response.data);


export { url, posts, USER, router }