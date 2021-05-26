import {
  toggleDisplayFavorites,
  setDisplayByUser,
  setDisplayByYear,
  getFeedState,
} from "../data/dataAccess.js";
import {postYear, getPosts} from "../Post/PostProvider.js";
import {getUsers} from "../User/UserProvider.js";

const container = document.querySelector(".giffygram");

container.addEventListener("change", (event) => {
  if (event.target.id === "yearSelection") {
    setDisplayByYear(event.target.id);
    container.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

container.addEventListener("change", (event) => {
  if (event.target.id === "userSelection") {
    setDisplayByUser(event.target.id);
    container.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

container.addEventListener("change", (event) => {
  if (event.target.id === "showOnlyFavorites") {
    toggleDisplayFavorites();
    container.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

export const Footer = () => {
  const users = getUsers();
  const posts = getPosts();
  const feedState = getFeedState();
  return `
    <footer class="footer">
    <div class="footer__item">Posts Since
    <select id="yearSelection">
    ${posts
      .map((postObj) => {
        return `
      <option value="post--${postObj.id}">
      ${postYear(postObj)}</option>
      `;
      })
      .join("")}
    </select>
    </div>
    <div class="footer__item">Posts By User
    <select id="userSelection">
    ${users
      .map((userObj) => {
        return `
    <option value="user--${userObj.id}">
    ${userObj.name}</option>
    `;
      })
      .join("")}
    
    </select>
    </div>
    <div class="footer__item">Show Only Favorites
    <input id="showOnlyFavorites" type="checkbox" ${
      feedState.displayFavorites ? "checked" : ""
    }/>
    </div>
    </footer>
    `;
};
