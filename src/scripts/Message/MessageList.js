import {getUserMessages} from "./MessageProvider.js";

export const MessageList = () => /*html*/ `
    <div class="messageList">
        ${getUserMessages().map(oneMessageHTML)}
    </div>`;

const oneMessageHTML = (m) => /*html*/ `
    <div id="message--${m.id}" class="message">
        <div class="message__author">From ${m.userName}</div>
        <div class="message__text">${m.text}</div>
    </div>`;
