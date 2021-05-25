import {NavBar} from "./nav/NavBar.js";
//import {setDisplayDM, setDisplayMessage} from "./data/dataAccess.js";
import {Inbox} from "./Message/inbox.js";
import {Feed} from "./Post/Feed.js";
import {getFeedState} from "./data/dataAccess.js";

//setDisplayDM(true); // FOR TESTING

export const GiffyGram = () => {
  // Show main main UI
  //const showInbox = false; // FOR TESTING
  return `
  <nav>${NavBar()}</nav>
    ${getFeedState().displayMessages ? Inbox() : Feed()}
    `;
};
