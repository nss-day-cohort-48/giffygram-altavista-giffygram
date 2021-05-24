import {LoginForm} from "./auth/Login.js";
import {fetchAll} from "./data/dataAccess.js";
import {GiffyGram} from "./GiffyGram.js";
import {getMessages} from "./Message/MessageProvider.js";
import {getUsers} from "./User/UserProvider.js";
import {getFeedPosts, getPosts} from "./Post/PostProvider.js";
import {makeTesters} from "./testers.js";

const applicationElement = document.querySelector(".giffygram");

export const renderApp = () => {
  const user = parseInt(localStorage.getItem("gg_user"));
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
  console.log("All posts:");
  console.log(getPosts());
  console.log("Filtered posts for the feed:");
  console.log(getFeedPosts());
};

const fetchAndRender = () => fetchAll().then(renderApp);

fetchAndRender();

applicationElement.addEventListener("stateChanged", fetchAndRender);

makeTesters();
