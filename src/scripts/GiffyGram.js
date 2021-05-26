import {NavBar} from "./nav/NavBar.js";
import {Inbox} from "./Message/inbox.js";
import {Feed} from "./Post/Feed.js";
import {getFeedState} from "./data/dataAccess.js";
import {Footer} from "./nav/Footer.js";

export const GiffyGram = () => {
  return `
  <nav>${NavBar()}</nav>
    ${getFeedState().displayMessages ? Inbox() : Feed()}
    <footer>${Footer()}</footer>
    `;
};
