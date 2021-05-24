import {toggleLike} from "../Like/LikeProvider.js";
import {getFeedPosts} from "./PostProvider.js";

const ggContainer = document.querySelector(".giffygram");
ggContainer.addEventListener("click", (e) => {
  if (e.target.id.startsWith("post__favorite")) {
    let [, postId] = e.target.id.split("--");
    postId = parseInt(postId);
    debugger;
    const result = toggleLike(postId);
    if (typeof result === "string") {
      window.alert(result);
    } else {
      result.then(ggContainer.dispatchEvent(new CustomEvent("stateChanged")));
    }
  }
});

export const postFeed = () => {
  const posts = getFeedPosts();
  const currentUserId = parseInt(localStorage.getItem("gg_user"));
  const filledStar = "/images/favorite-star-yellow.svg";
  const blankStar = "/images/favorite-star-blank.svg";
  //    MAP METHOD AND JOIN METHOD
  let htmlString = `<article class="post__feed">`;

  const postsHTML = posts.map((p) => {
    const postDate = new Date(p.timestamp);
    const isLiked = p.likes.find((l) => l.userId === currentUserId);

    // prettier-ignore
    return /*html*/ `<div class="post">
        <div class="post__description">${p.title}</div>
        <img class="post__image" src= "${p.imageURL}" style="width: 100%"/>
        <div class="post__description">${p.description}</div>
        <div class="user__tagline">Posted by ${
          p.userName
        } at ${postDate.toLocaleString()}.</div>
        <div class="post__actions"> 
          <div>
            <img id="post__favorite--${p.id}" class="actionIcon" src="${
              isLiked ? filledStar : blankStar
            }"/>
          </div>
        </div>
    </div>`;
  });

  const listOfPosts = postsHTML.join("");
  htmlString += listOfPosts;
  return (htmlString += `</article>`);
};
