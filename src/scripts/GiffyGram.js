import {setDisplayDM} from "./data/dataAccess.js";
import {Inbox} from "./message/inbox.js";
import {Feed} from "./Post/Feed.js";

setDisplayDM(false); // FOR TESTING

export const GiffyGram = () => {
  // Show main main UI
  const showInbox = false; // FOR TESTING
  return `
    <h1>Giffygram</h1>
    ${showInbox ? Inbox() : Feed()}
    `;
};
