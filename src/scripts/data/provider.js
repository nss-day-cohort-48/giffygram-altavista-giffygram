const applicationElement = document.querySelector(".giffygram");

const applicationState = {
  currentUser: {},
  feed: {
    chosenUser: null,
    displayFavorites: false,
    displayMessages: false,
  },
  users: [],
  likes: [],
  posts: [],
  messages: [],
};

export const rawUsers = () => applicationState.users.map((user) => ({...user}));
export const rawPosts = () => applicationState.posts.map((post) => ({...post}));
export const rawLikes = () => applicationState.likes.map((like) => ({...like}));

export const fetchAll = () =>
  fetchUsers().then(fetchPosts).then(fetchLikes).then(fetchMessages);

const apiURL = "http://localhost:8081";
const fetchPosts = () => {
  return fetch(`${apiURL}/posts`)
    .then((response) => response.json())
    .then((data) => (applicationState.posts = data));
};

const fetchLikes = () => {
  return fetch(`${apiURL}/likes`)
    .then((response) => response.json())
    .then((data) => (applicationState.likes = data));
};

const fetchUsers = () => {
  return fetch(`${apiURL}/users`)
    .then((response) => response.json())
    .then((data) => (applicationState.users = data));
};

const fetchMessages = () => {
  return fetch(`${apiURL}/messages`)
    .then((response) => response.json())
    .then((data) => (applicationState.messages = data));
};
