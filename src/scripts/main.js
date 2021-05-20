import {LoginForm} from "./auth/Login.js";
import {fetchAll} from "./data/dataAccess.js";
import {GiffyGram} from "./GiffyGram.js";
import {getPosts} from "./Post/PostProvider.js";
import {getUsers} from "./User/UserProvider.js";
import {getMessages} from "./Message/MessageProvider.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  const user = parseInt(localStorage.getItem("gg_user"));

  if (user) {
    applicationElement.innerHTML = GiffyGram();
  } else {
    applicationElement.innerHTML = LoginForm();
  }

  console.log(getMessages());
};

const fetchAndRender = () => fetchAll().then(renderApp);

fetchAndRender();

applicationElement.addEventListener("stateChanged", fetchAndRender);
