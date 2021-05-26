import {setDisplayPostForm} from "../data/dataAccess.js";
import {getContainer} from "../GiffyGram.js";
import {newPost} from "./PostProvider.js";

export const PostForm = () => {
  return /*html*/ `
    <div class="newPost">
      <div>
        <input type="text" placeholder="Title:" id="postTitle"/>
      </div>
      <div>
        <input type="text" placeholder="GIF URL:" id="postImg"/>
      </div>
      <textarea placeholder="Description:" id="postDescription"></textarea>
      <div>
        <button id="submit__button">Submit</button> 
        <button id="cancel__button">Cancel</button>
      </div>
    </div>`;
};

export const MiniMode = () => {
  let html = `
  <div class="miniMode" id="miniMode">Have a gif to post?</div>
  `;
  return html;
};

const giffygram = document.querySelector("#giffygram")

giffygram.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "miniMode") {
    setDisplayPostForm(true);
    giffygram.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

giffygram.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submit__button") {
    const userId = parseInt(localStorage.getItem("gg_user"));
    const title = document.querySelector("#postTitle").value;
    const imageURL = document.querySelector("#postImg").value;
    const description = document.querySelector("#postDescription").value;

    const result = newPost(userId, title, imageURL, description);
    // newPost returns a string if validation fails
    typeof result === "string"
      ? window.alert(result)
      : result.then(() => {
          giffygram.dispatchEvent(new CustomEvent("stateChanged"));
        });
  }
});

giffygram.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "cancel__button") {
    setDisplayPostForm(false);
    giffygram.dispatchEvent(new CustomEvent("stateChanged"));
  }
});
