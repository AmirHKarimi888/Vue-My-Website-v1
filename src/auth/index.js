import { ref } from "vue";

const authedUser = ref(localStorage.getItem("authedUser"));


const logout = () => {
  localStorage.setItem("authedUser", 0);

  setTimeout(() => {
    window.location.reload();
  }, 1000)
}

export { authedUser, logout }