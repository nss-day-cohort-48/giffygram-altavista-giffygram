import {
  postPost,
  rawPosts,
  rawUsers,
  rawLikes,
  getFeedState,
} from "../data/dataAccess.js";

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

export const getPostYears = () => rawPosts().map((p) => postYear(p));
export const postYear = (post) => new Date(post.timestamp).getFullYear();

// we aren't using it yet but if we want to add logic
//      to getting the Posts data we can do it here
export const getPosts = () => {
  let posts = rawPosts();

  posts = addUserNames(posts, rawUsers());
  posts = addLikes(posts, rawLikes());

  posts.sort(compareTimestamps);

  return posts;
};

export const getFeedPosts = () => {
  let posts = getPosts();
  const fs = getFeedState();
  const currentUserId = localStorage.getItem("gg_user");

  if (fs.displayFavorites) {
    posts = posts.filter((p) =>
      p.likes.find((l) => l.userId === parseInt(currentUserId))
    );
  }

  if (fs.displayByUser) {
    posts = posts.filter((p) => p.userId === fs.chosenUser);
  }

  if (fs.displayByYear) {
    posts = posts.filter(
      (p) => new Date(p.timestamp).getFullYear() === fs.chosenYear
    );
  }

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

const compareTimestamps = (objA, objB) => {
  if (objA.timestamp < objB.timestamp) {
    return 1;
  } else {
    return -1;
  }
};
