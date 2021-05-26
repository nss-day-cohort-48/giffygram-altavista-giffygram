import {LoginForm} from "./auth/Login.js";
import {RegisterForm} from "./auth/Register.js";
import {getFeedState, fetchAll} from "./data/dataAccess.js";
import {getContainer, GiffyGram} from "./GiffyGram.js";
import {getMessages} from "./Message/MessageProvider.js";
import {getUsers} from "./User/UserProvider.js";
import {getFeedPosts, getPosts} from "./Post/PostProvider.js";
import {makeTesters} from "./testers.js";

const giffygram = getContainer();

export const renderApp = () => {
  const user = parseInt(localStorage.getItem("gg_user"));
  const registering = getFeedState().registering;

  if (user) {
    giffygram.innerHTML = GiffyGram();
  } else if (registering) {
    giffygram.innerHTML = RegisterForm();
  } else {
    giffygram.innerHTML = LoginForm();
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

giffygram.addEventListener("stateChanged", fetchAndRender);

makeTesters();
