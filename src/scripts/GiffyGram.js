import {setDisplayDM} from "./data/dataAccess.js";
import {Inbox} from "./message/inbox.js";
import {Feed} from "./Post/Feed.js";

export const GiffyGram = () => {
  // Show main main UI
  const showInbox = true;
  setDisplayDM(false);
  return `
    <h1>Giffygram</h1>
    ${showInbox ? Inbox() : Feed()}
    `;
};
