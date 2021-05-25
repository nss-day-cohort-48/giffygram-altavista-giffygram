import {getUserMessages, readMessage} from "./MessageProvider.js";

export const MessageList = () => /*html*/ `
    <div class="messageList">
        ${getUserMessages().map(oneMessageHTML)}
    </div>`;

// prettier-ignore
const oneMessageHTML = (m) => /*html*/ `
    <div id="message--${m.id}" class="message ${
        m.read ? "read" : justRead(m.id)
    }">
        <div class="message__author">From ${m.userName}</div>
        <div class="message__text">${m.text}</div>
    </div>`;

const justRead = (id) => {
  // NOTE: readMessage returns a promise but we do nothing with it right now
  readMessage(id);
  // message should still be marked "unread" for CSS purposes until next stateChange
  return "unread";
};
