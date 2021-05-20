import {rawPosts, rawUsers, rawLikes} from "../data/provider.js";

// we aren't using it yet but if we want to add logic
//      to getting the Posts data we can do it here
export const GetPosts = () => {
  let posts = rawPosts();

  posts = addUserNames(posts, rawUsers());
  posts = addLikes(posts, rawLikes());

  return posts;
};

const addLikes = (posts, likes) => {
  posts.map((p) => {
    p.likes = likes.filter((l) => l.postId === p.id);
    return p;
  });
  return posts;
};

const addUserNames = (posts, users) => {
  posts.map((p) => {
    if (p.userId) {
      p.userName = users.find((u) => u.id === p.userId).name;
    }
    return p;
  });
  return posts;
};
