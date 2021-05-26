import {
  toggleDisplayFavorites,
  setDisplayByUser,
  setDisplayByYear,
  getFeedState,
} from "../data/dataAccess.js";
import { getContainer } from "../GiffyGram.js";
import {postYear, getPosts} from "../Post/PostProvider.js";
import {getUsers} from "../User/UserProvider.js";

const giffygram = getContainer();

giffygram.addEventListener("change", (event) => {
  if (event.target.id === "yearSelection") {
    setDisplayByYear(parseInt(event.target.value));
    giffygram.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

giffygram.addEventListener("change", (event) => {
  if (event.target.id === "userSelection") {
    const [, userId] = event.target.value.split("--");
    setDisplayByUser(parseInt(userId));
    giffygram.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

giffygram.addEventListener("change", (event) => {
  if (event.target.id === "showOnlyFavorites") {
    toggleDisplayFavorites();
    giffygram.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

export const Footer = () => {
  const users = getUsers();
  const posts = getPosts();
  const feedState = getFeedState();
  // use a set because they don't allow duplicates
  let allYears = new Set();
  posts.forEach((p) => {
    allYears.add(postYear(p));
  });
  // convert our set to an array that is sorted
  allYears = [...allYears].sort();

  return `
    <footer class="footer">
    <div class="footer__item">Posts Since
    <select id="yearSelection">
    <option value="null">Year...</option>
    ${allYears
      .map((year) => {
        return `
      <option value="${year}" ${
          feedState.chosenYear === year ? 'selected="selected"' : ""
        }>
      ${year}</option>
      `;
      })
      .join("")}
    </select>
    </div>
    <div class="footer__item">Posts By User
    <select id="userSelection">
    <option value="null">Select a user...</option>
    ${users
      .map((userObj) => {
        return `
    <option value="user--${userObj.id}" ${
          feedState.chosenUser === userObj.id ? 'selected="selected"' : ""
        }>
    ${userObj.name} </option>
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
