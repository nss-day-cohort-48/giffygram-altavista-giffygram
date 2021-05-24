import {postFeed} from "./feed/PostList.js";
import {DirectMessage} from "./Message/MessageForm.js";
import {NavBar} from "./nav/NavBar.js";

export const GiffyGram = () => {
  // Show main main UI
  return `
    
  <nav>${NavBar()}</nav>
    <article class="miniMode">
    ${DirectMessage()}
    </article>
    <article class="post__feed">
    ${postFeed()}
    </article>
   
    `;
};
