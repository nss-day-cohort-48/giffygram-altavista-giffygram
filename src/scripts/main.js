import {LoginForm} from "./auth/Login.js";
import {fetchAll} from "./data/provider.js";
import {GiffyGram} from "./GiffyGram.js";
import { getPosts } from "./Post/PostProvider.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  const user = parseInt(localStorage.getItem("gg_user"));
    console.log(getPosts())
  if (user) {
    applicationElement.innerHTML = GiffyGram();
  } else {
    applicationElement.innerHTML = LoginForm();
  }
};

const fetchAndRender = () => fetchAll().then(renderApp);

fetchAndRender();

applicationElement.addEventListener("stateChanged", fetchAndRender);
