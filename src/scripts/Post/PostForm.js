import {setDisplayPostForm} from "../data/dataAccess.js";
import {newPost} from "./PostProvider.js";

export const PostForm = () => {
  return /*html*/ `
    <div class="newPost">
      <div>
        <input type="text" placeholder="Title:" name="postTitle"/>
      </div>
      <div>
        <input type="text" placeholder="GIF URL:" name="postImg"/>
      </div>
      <textarea placeholder="Description:" name="postDescription"></textarea>
      <div>
        <button id="submit__button">Submit</button> 
        <button id="cancel__button">Cancel</button>
      </div>
    </div>`;
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

    const result = newPost(userId, title, imageURL, description);
    // newPost returns a string if validation fails
    typeof result === "string"
      ? window.alert(result)
      : result.then(() => {
          mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
        });
  }
});

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "cancel__button") {
    setDisplayPostForm(false);
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  }
});
