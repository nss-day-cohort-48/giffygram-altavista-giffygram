import {DirectMessage} from "./Message/MessageForm.js";
import {NavBar} from "./nav/NavBar.js";
import {PostForm} from "./Post/PostForm.js";
import {postFeed} from "./Post/PostList.js";

export const GiffyGram = () => {
  // Show main main UI
  return `
    
  <nav>${NavBar()}</nav>
    <article class="miniMode">
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
