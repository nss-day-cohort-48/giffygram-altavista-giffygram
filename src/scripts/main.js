import {LoginForm} from "./auth/Login.js";
import {fetchAll} from "./data/dataAccess.js";
import {GiffyGram} from "./GiffyGram.js";
<<<<<<< HEAD
import {getPosts} from "./Post/PostProvider.js";
import {getUsers} from "./User/UserProvider.js";
=======
>>>>>>> 379a0e357496980b3f422fdcaa9a851ade1b549e
import {getMessages} from "./Message/MessageProvider.js";
import {getUsers} from "./User/UserProvider.js";
import {getPosts} from "./Post/PostProvider.js";
import {makeTesters} from "./testers.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  const user = parseInt(localStorage.getItem("gg_user"));
<<<<<<< HEAD
  console.log(getPosts());
=======
>>>>>>> 379a0e357496980b3f422fdcaa9a851ade1b549e
  if (user) {
    applicationElement.innerHTML = GiffyGram();
  } else {
    applicationElement.innerHTML = LoginForm();
  }

  console.log("Just rendered!");
  console.log("Messages:");
  console.log(getMessages());
  console.log("Users:");
  console.log(getUsers());
  console.log("Posts:");
  console.log(getPosts());
};

const fetchAndRender = () => fetchAll().then(renderApp);

fetchAndRender();

applicationElement.addEventListener("stateChanged", fetchAndRender);

makeTesters();
