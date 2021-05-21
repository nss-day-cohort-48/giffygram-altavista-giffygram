import {
  toggleDisplayFavorites,
  setDisplayByUser,
  rawUsers,
} from "../data/dataAccess.js";

const container = document.querySelector(".giffygram");

container.addEventListener("change", (event) => {
  if (event.target.id === "yearSelection") {
    //add the set export to this | setExample(parseInt(event.target.value))
  }
});

container.addEventListener("change", (event) => {
  if (event.target.id === "userSelection") {
    setDisplayByUser(parseInt(event.target.value));
    container.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

container.addEventListener("change", (event) => {
  if (event.target.id === "showOnlyFavorites") {
    toggleDisplayFavorites(parseInt(event.target.value));
    container.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

export const Footer = () => {
  const users = rawUsers();

  return `
    <footer class="footer">
    <div class="footer__item">Posts Since
    <select id="yearSelection">
    <option>2020</option>
    <option>2019</option>
    <option>2018</option>
    <option>2017</option>
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
    <input id="showOnlyFavorites" type="checkbox" />
    </div>
    </footer>
    `;
};
