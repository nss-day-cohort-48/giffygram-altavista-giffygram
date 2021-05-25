import {NavBar} from "./nav/NavBar.js";
import {setDisplayDM} from "./data/dataAccess.js";
import {Inbox} from "./Message/inbox.js";
import {Feed} from "./Post/Feed.js";

//setDisplayDM(true); // FOR TESTING

export const GiffyGram = () => {
  // Show main main UI
  const showInbox = false; // FOR TESTING
  return `
  <nav>${NavBar()}</nav>
    ${showInbox ? Inbox() : Feed()}
    `;
};
