import {postUser, rawLikes, rawPosts, rawUsers} from "../data/dataAccess.js";

export const getUsers = () => {
  let users = rawUsers();

  users = addLikes(users, rawLikes());
  users = addPosts(users, rawPosts());

  return users;
};

export const newUser = (name, email, password) => {
  if (!name || !email || !password) {
    return postUser({
      name: name,
      email: email,
      password: password,
    });
  }

  return "registration incomplete";
};

const addPosts = (users, posts) =>
  users.map((u) => {
    u.posts = posts.filter((p) => p.userId === u.id);
    return u;
  });

const addLikes = (users, likes) =>
  users.map((u) => {
    u.likes = likes.filter((l) => l.userId === u.id);
    return u;
  });
