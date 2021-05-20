import {postPost, rawPosts, rawUsers, rawLikes} from "../data/dataAccess.js";

// TODO more validation
export const newPost = (userId, title, imageURL, description) => {
  if (userId && title && imageURL && description) {
    return postPost({
      userId: userId,
      title: title,
      imageURL: imageURL,
      description: description,
      timestamp: Date.now(),
    });
  }
  return "post incomplete";
};

// we aren't using it yet but if we want to add logic
//      to getting the Posts data we can do it here
export const getPosts = () => {
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
