const container = document.querySelector(".giffygram");

container.addEventListener("change", (event) => {
  if (event.target.id === "") {
    //add the set export to this | setExample(parseInt(event.target.value))
  }
});

container.addEventListener("change", (event) => {
  if (event.target.id === "") {
    //add the set export to this | setExample(parseInt(event.target.value))
  }
});

container.addEventListener("change", (event) => {
  if (event.target.id === "") {
    //add the set export to this | setExample(parseInt(event.target.value))
  }
});

export const Footer = () => {
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
    <option value="user--1">Ray Medrano</option>
    <option value="user--2">Meg Ducharme</option>
    <option value="user--3">Mark Ellis</option>
    <option value="user--4">Daniella Agnoletti</option>
    <option value="user--5">Kimmy Bird</option>
    <option value="user--6">Emily Lemmon</option>
    </select>
    </div>
    <div class="footer__item">Show Only Favorites
    <input id="showOnlyFavorites" type="checkbox">
    </div>
    </footer>
    `;
};
