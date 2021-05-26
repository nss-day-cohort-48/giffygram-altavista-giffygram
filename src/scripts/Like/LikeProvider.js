import {rawPosts, postLike, deleteLike, rawLikes} from "../data/dataAccess.js";
import {getUsers} from "../User/UserProvider.js";

// ??? where is getLikes()?
//      likes are only ever pulled by other providers
//      and then accessed via other tables (either users or posts)

export const toggleLike = (postId) => {
  if (!rawPosts().find((p) => p.id === postId)) {
    return "There is no post with id of " + postId;
  }

  const userId = parseInt(localStorage.getItem("gg_user"));
  const foundUser = getUsers().find((u) => u.id === userId);
  const foundLike = foundUser.likes
    ? foundUser.likes.find((l) => l.postId === postId)
    : undefined;
  if (foundLike) {
    return deleteLike(foundLike.id);
  }
  return postLike({userId: userId, postId: postId});
};
