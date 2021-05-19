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

// just here to test User data provider
export const fetchUsers = () => {
  return fetch(`${apiURL}/users`)
    .then((response) => response.json())
    .then((data) => (applicationState.users = data));
};
