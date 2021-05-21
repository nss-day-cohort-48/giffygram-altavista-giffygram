const applicationElement = document.querySelector(".giffygram");

const applicationState = {
  currentUser: {},
  feed: {
    displayFavorites: false,
    displayMessages: false,
    displayByUser: false,
    chosenUser: null,
    displayByYear: false,
    chosenYear: null,
  },
  users: [],
  likes: [],
  posts: [],
  messages: [],
};

// SETTERS ================================================================>>
export const toggleDisplayFavorites = () => {
  applicationState.feed.displayFavorites =
    !applicationState.feed.displayFavorites;
};

// to turn off, call without a null or invalid year
export const setDisplayByYear = (year) => {
  const foundYear = applicationState.posts.find(
    (p) => new Date(p.timestamp).getFullYear() === year
  );
  if (foundYear) {
    applicationState.feed.setDisplayByYear = true;
  } else {
    applicationState.feed.setDisplayByYear = false;
  }
  applicationState.feed.chosenYear = foundYear;
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

// GETTERS ================================================================>>
export const feedState = () => ({...applicationState.feed});
export const rawUsers = () => applicationState.users.map((user) => ({...user}));
export const rawPosts = () => applicationState.posts.map((post) => ({...post}));
export const rawLikes = () => applicationState.likes.map((like) => ({...like}));
export const rawMessages = () => applicationState.messages.map((m) => ({...m}));

// fetch stuff
const apiURL = "http://localhost:8081";

// fetch GET ==============================================================>>
export const fetchAll = () =>
  fetchUsers().then(fetchPosts).then(fetchLikes).then(fetchMessages);

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

// since we don't have a like provider, we build the object here
// TODO: validate that the post exists
export const newLike = (userId, postId) => {
  if (userId && postId) {
    return postLike({userId: userId, postId: postId});
  }
  return "like incomplete";
};

// since we don't have a follow provider, we build the object here
// TODO: validate that someone isn't trying to follow themselves
export const newFollow = (userId, followingId) => {
  if (userId && followingId) {
    postFollow({userId: userId, followingId: followingId});
  }
  return "follow incomplete";
};

// fetch POST ==============================================================>>
// helper function for creating POSTable JSON objects
const jsonPOST = (obj) => ({
  headers: {"Content-Type": "application/json"},
  method: "POST",
  body: JSON.stringify(obj),
});

export const postUser = (userObj) => {
  return fetch(`${apiURL}/users`, jsonPOST(userObj));
};

export const postMessage = (messageObj) => {
  return fetch(`${apiURL}/messages`, jsonPOST(messageObj));
};

export const postPost = (postObj) => {
  return fetch(`${apiURL}/posts`, jsonPOST(postObj));
};

const postLike = (likeObj) => {
  return fetch(`${apiURL}/likes`, jsonPOST(likeObj));
};

const postFollow = (followObj) => {
  return fetch(`${apiURL}/follows`, jsonPOST(followObj));
};
