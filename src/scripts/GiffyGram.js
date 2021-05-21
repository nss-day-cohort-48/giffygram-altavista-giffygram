import {postFeed} from "./feed/PostList.js";
import {DirectMessage} from "./Message/MessageForm.js";
import {Footer} from "./nav/Footer.js";

export const GiffyGram = () => {
  // Show main main UI
  return `
    <h1>Giffygram</h1>
    <article class="direct__message">
    ${DirectMessage()}
    </article>
    <article class="post__feed">
    ${postFeed()}
    </article>
   <footer>${Footer()}</footer>
    `;
};
