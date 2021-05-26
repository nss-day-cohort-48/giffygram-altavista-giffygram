import {NavBar} from "./nav/NavBar.js";
import {Inbox} from "./Message/inbox.js";
import {Feed} from "./Post/Feed.js";
import {getFeedState} from "./data/dataAccess.js";

export const GiffyGram = () => {
  return `
  <nav>${NavBar()}</nav>
    ${getFeedState().displayMessages ? Inbox() : Feed()}
    `;
};
