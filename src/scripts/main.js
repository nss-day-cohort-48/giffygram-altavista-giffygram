import {LoginForm} from "./auth/Login.js";
import {fetchUsers} from "./data/provider.js";
import {GiffyGram} from "./GiffyGram.js";
import {GetUsers} from "./User/UserProvider.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  const user = parseInt(localStorage.getItem("gg_user"));

  if (user) {
    applicationElement.innerHTML = GiffyGram();
  } else {
    applicationElement.innerHTML = LoginForm();
  }
};

renderApp();

fetchUsers().then(() => console.log(GetUsers()));
