import {deletePost} from "../data/dataAccess.js";
import {toggleLike} from "../Like/LikeProvider.js";
import {getFeedPosts} from "./PostProvider.js";
import {getContainer} from "../GiffyGram.js";

const giffygram = getContainer();

giffygram.addEventListener("click", (e) => {
  if (e.target.id.startsWith("post__favorite")) {
    let [, postId] = e.target.id.split("--");
    postId = parseInt(postId);
    const result = toggleLike(postId);
    // toggleLike returns a string if validation fails
    typeof result === "string"
      ? window.alert(result)
      : result.then(giffygram.dispatchEvent(new CustomEvent("stateChanged")));
  }
});

giffygram.addEventListener("click", (click) => {
  if (click.target.id.startsWith("post__delete--")) {
    const [, postId] = click.target.id.split("--");
    deletePost(parseInt(postId)).then(
      giffygram.dispatchEvent(new CustomEvent("stateChanged"))
    );
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
    return /*html*/ `
    <div class="post">
      <h3 class="post__description">${p.title}</h3>
      <img class="post__image" src= "${p.imageURL}" style="width: 100%"/>
      <div class="post__description">${p.description}</div>
      <div class="user__tagline">Posted by ${ p.userName } at ${
        postDate.toLocaleString()
      }.</div>
      <div class="post__actions"> 
        <div>
          <img id="post__favorite--${p.id}" class="actionIcon" src="${
          isLiked ? filledStar : blankStar
          }"/>
        </div>
        <div>
        ${trashCanFor(p)}
        </div>
        </div>
        </div>`;
  });

  htmlString += postsHTML.join("");
  return (htmlString += `</article>`);
};
const trashCanFor = (p) => {
  const trashcan = "/images/trash__icon.png";
  return parseInt(localStorage.getItem("gg_user")) === p.userId
    ? `<img id="post__delete--${p.id}" class="actionIcon" src="${trashcan}"/>`
    : "";
};
