import {LoginForm} from "./auth/Login.js";
import {fetchAll} from "./data/provider.js";
import {GiffyGram} from "./GiffyGram.js";
import {getPosts} from "./Post/PostProvider.js";
import {getUsers} from "./User/UserProvider.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  const user = parseInt(localStorage.getItem("gg_user"));

  if (user) {
    applicationElement.innerHTML = GiffyGram();
  } else {
    applicationElement.innerHTML = LoginForm();
  }
};

fetchAll().then(() => {
  renderApp();
  console.log(getUsers());
  console.log(getPosts());
});
