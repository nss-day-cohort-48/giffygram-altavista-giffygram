import {setDisplayPostForm} from "../data/dataAccess.js";
import {newPost} from "./PostProvider.js";

export const PostForm = () => {
  let html = `
    <div>
        <label class="post__title" for="postTitle">Enter Title Here</label>
        <input type="text" name="postTitle"/>
    </div>
    <div>
        <label class="post__img" for="postImg">Enter URL here</label>
        <input type="text" name="postImg"/>
    </div>
    <div>
        <label class="post__description" for="postDescription">Enter Description here</label>
        <input type="text" name="postDescription"/>
    </div>
    <div>
        <button id="submit__button">Submit</button> 
    </div>
    <div>
        <button id="cancel__button">Cancel</button>
    </div>
        `;
  return html;
};

// CREATING HTML FOR .miniMode
export const MiniMode = () => {
  let html = `
  <div class="miniMode" id="miniMode">Have a gif to post?</div>
  `;
  return html;
};

// LINK TO CONTAINER
const mainContainer = document.querySelector(".giffygram");

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "miniMode") {
    setDisplayPostForm(true);
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  } else {
    setDisplayPostForm(false);
  }
});

// Setter(dataAccess)SEND, conditional logic(FEED)READ

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submit__button") {
    const userId = parseInt(localStorage.getItem("gg_user"));
    const title = document.querySelector("input[name='postTitle']").value;
    const imageURL = document.querySelector("input[name='postImg']").value;
    const description = document.querySelector(
      "input[name='postDescription']"
    ).value;

    newPost(userId, title, imageURL, description).then(() => {
      mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
    });
  }
});

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "cancel__button") {
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  }
});
