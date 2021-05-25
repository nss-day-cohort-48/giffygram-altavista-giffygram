import {setDisplayDM} from "./data/dataAccess.js";
import {Inbox} from "./Message/inbox.js";
import {Feed} from "./Post/Feed.js";

setDisplayDM(true); // FOR TESTING

export const GiffyGram = () => {
  // Show main main UI
  const showInbox = true; // FOR TESTING
  return `
    <h1>Giffygram</h1>
    ${showInbox ? Inbox() : Feed()}
    `;
};
