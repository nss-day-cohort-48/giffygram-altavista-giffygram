import {DirectMessage} from "./Message/MessageForm.js";
import {Feed} from "./Post/Feed.js";

export const GiffyGram = () => {
  // Show main main UI
  return `
    <h1>Giffygram</h1>
    <article class="direct__message">
    ${DirectMessage()}
    </article>
    <article class="post__feed">
    ${Feed()}
    </article>
   
    `;
};
