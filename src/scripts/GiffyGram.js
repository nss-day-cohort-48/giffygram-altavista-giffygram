<<<<<<< HEAD
import {DirectMessage} from "./Message/MessageForm.js";
import {NavBar} from "./nav/NavBar.js";
=======
import {setDisplayDM} from "./data/dataAccess.js";
import {Inbox} from "./message/inbox.js";
>>>>>>> 436de1fdda4caeee32ceb041ba6053fae842f97b
import {Feed} from "./Post/Feed.js";

export const GiffyGram = () => {
  // Show main main UI
  const showInbox = false;
  setDisplayDM(false);
  return `
<<<<<<< HEAD
    
  <nav>${NavBar()}</nav>
    <article class="miniMode">
    ${DirectMessage()}
    </article>
    <article class="post__feed">
    ${Feed()}
    </article>
   
=======
    <h1>Giffygram</h1>
    ${showInbox ? Inbox() : Feed()}
>>>>>>> 436de1fdda4caeee32ceb041ba6053fae842f97b
    `;
};
