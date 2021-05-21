import {Footer} from "./nav/Footer.js";
import {postFeed} from "./feed/PostList.js";

export const GiffyGram = () => {
  // Show main main UI
  return `<h1>Giffygram</h1>
    <article class="post__feed">
    ${postFeed()}
    </article>
    <footer>${Footer()}</footer>
    `;
};
