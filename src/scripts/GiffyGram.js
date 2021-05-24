import {DirectMessage} from "./Message/MessageForm.js";
import { PostForm } from "./Post/PostForm.js";
import { postFeed } from "./Post/PostList.js";

export const GiffyGram = () => {
  // Show main main UI
  return `
    <h1>Giffygram</h1>
    <article class="direct__message">
    ${DirectMessage()}
    </article>
    <article class="post__form">
    ${PostForm()}
    </article>
    <article class="post__feed">
    ${postFeed()}
    </article>
   
    `;
};
