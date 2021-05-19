import {GetLikes, rawPosts, rawUsers} from "../data/provider.js";

// we aren't using it yet but if we want to add logic
//      to getting the Users data we can do it here
export const GetUsers = () => {
  let users = rawUsers();
  const likes = GetLikes();
  const posts = rawPosts();
  users = addLikes(users, GetLikes());
  users = addPosts(users, rawPosts());
  return users;
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
