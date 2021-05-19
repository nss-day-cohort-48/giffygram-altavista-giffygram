const apiURL = "http://localhost:8088";
const applicationElement = document.querySelector(".giffygram");

const applicationState = {
  currentUser: {},
  feed: {
    chosenUser: null,
    displayFavorites: false,
    displayMessages: false,
  },
  users: [],
};

export const rawUsers = () => applicationState.users.map((t) => ({...t}));

const apiURL = "http://localhost:8081";

export const fetchUsers = () => {
  return fetch(`${apiURL}/products`)
    .then((response) => response.json())
    .then((data) => (applicationState.users = data));
};
