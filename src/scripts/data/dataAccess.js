// app state ==================================================================================>>
const applicationState = {
  currentUser: {},
  feed: {
    // THIS IS CLEARLY WAY MORE THAN THE FEED STATE oops
    registering: false,
    displayFavorites: false,
    displayMessages: false,
    displayByUser: false,
    chosenUser: null,
    displayByYear: false,
    chosenYear: null,
    displayPostForm: false,
    displayDM: false,
  },
  users: [],
  likes: [],
  posts: [],
  messages: [],
};

const initialFeedState = applicationState.feed;

// helpers ====================================================================================>>
const apiURL = "http://localhost:8081";
const jsonPOST = (obj) => ({
  headers: {"Content-Type": "application/json"},
  method: "POST",
  body: JSON.stringify(obj),
});
const jsonPATCH = (obj) => ({
  headers: {"Content-Type": "application/json"},
  method: "PATCH",
  body: JSON.stringify(obj),
});

// SETTERS ====================================================================================>>
export const setRegistering = (bool) => {
  applicationState.feed.registering = bool;
};
export const clearFilters = () => {
  applicationState.feed = initialFeedState;
};

export const toggleDisplayFavorites = () => {
  applicationState.feed.displayFavorites = !applicationState.feed.displayFavorites;
};
export const setDisplayDM = (bool) => {
  applicationState.feed.displayDM = bool;
};

// to turn off, call without a null or invalid year
export const setDisplayByYear = (year) => {
  year = parseInt(year);
  const foundPost = applicationState.posts.find(
    (p) => new Date(p.timestamp).getFullYear() === year
  );
  const foundYear = foundPost ? new Date(foundPost.timestamp).getFullYear() : null;
  if (foundYear) {
    applicationState.feed.chosenYear = foundYear;
    applicationState.feed.displayByYear = true;
  } else {
    applicationState.feed.displayByYear = false;
    applicationState.feed.chosenYear = null;
  }
};

// to turn off, call without a null or invalid id
export const setDisplayByUser = (id) => {
  let foundId;
  const foundUser = applicationState.users.find((u) => u.id === id);
  if (foundUser) {
    foundId = foundUser.id;
  }
  if (foundId) {
    applicationState.feed.displayByUser = true;
  } else {
    applicationState.feed.displayByUser = false;
  }
  applicationState.feed.chosenUser = foundId;
};

export const setDisplayMessage = (bool) => {
  applicationState.feed.displayMessages = bool;
};

export const setDisplayPostForm = (bool) => {
  applicationState.feed.displayPostForm = bool;
};

// GETTERS ====================================================================================>>
export const getFeedState = () => ({...applicationState.feed});
export const rawUsers = () => applicationState.users.map((user) => ({...user}));
export const rawPosts = () => applicationState.posts.map((post) => ({...post}));
export const rawLikes = () => applicationState.likes.map((like) => ({...like}));
export const rawMessages = () => applicationState.messages.map((message) => ({...message}));

// FETCHES ==================================================================================>>
// prettier-ignore
export const fetchAll = () => 
  fetchUsers()
    .then(fetchPosts)
    .then(fetchLikes)
    .then(fetchMessages);

// prettier-ignore
const fetchPosts = () => 
  fetch(`${apiURL}/posts`)
    .then((response) => response.json())
    .then((data) => (applicationState.posts = data));

// prettier-ignore
const fetchLikes = () => 
  fetch(`${apiURL}/likes`)
    .then((response) => response.json())
    .then((data) => (applicationState.likes = data));

// prettier-ignore
const fetchUsers = () =>
  fetch(`${apiURL}/users`)
    .then((response) => response.json())
    .then((data) => (applicationState.users = data));

// prettier-ignore
const fetchMessages = () => 
  fetch(`${apiURL}/messages`)
    .then((response) => response.json())
    .then((data) => (applicationState.messages = data));

export const deleteLike = (id) => fetch(`${apiURL}/likes/${id}`, {method: "DELETE"});
export const deletePost = (id) => fetch(`${apiURL}/posts/${id}`, {method: "DELETE"});

export const postUser = (userObj) => fetch(`${apiURL}/users`, jsonPOST(userObj));
export const postPost = (postObj) => fetch(`${apiURL}/posts`, jsonPOST(postObj));
export const postLike = (likeObj) => fetch(`${apiURL}/likes`, jsonPOST(likeObj));
export const postMessage = (messageObj) => fetch(`${apiURL}/messages`, jsonPOST(messageObj));
export const postFollow = (followObj) => fetch(`${apiURL}/follows`, jsonPOST(followObj));

// PATCH requires only the keys that you want to update
export const patchMessage = (id, changes) => fetch(`${apiURL}/messages/${id}`, jsonPATCH(changes));
