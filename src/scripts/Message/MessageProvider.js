import {
  postMessage,
  rawMessages,
  rawUsers,
  patchMessage,
} from "../data/dataAccess.js";

// TODO more validation
//      - does that userId exist?
//      - does that recipientId match a valid userId?
//      - is the text... good?
export const newMessage = (userId, recipientId, text) => {
  if (userId && recipientId && text) {
    return postMessage({
      userId: parseInt(userId),
      recipientId: parseInt(recipientId),
      text: text,
      read: false,
      timestamp: Date.now(),
    });
  }
  return "message incomplete";
};

export const getMessages = () => {
  let messages = rawMessages();
  messages = addUserNames(messages, rawUsers());
  return messages;
};

// get messages beloinging to current user
export const getUserMessages = () =>
  getMessages()
    .filter((m) => m.recipientId === parseInt(localStorage.getItem("gg_user")))
    .sort(byTimestamp);

export const readMessage = (id) => patchMessage(id, {read: true});

// use reduce to count unread messages starting from 0
export const howManyUnread = (messagesArray) =>
  messagesArray.reduce(countUnreads, 0);

const countUnreads = (numberUnread, oneMessage) =>
  oneMessage.read ? numberUnread : numberUnread + 1;

const addUserNames = (messages, users) => {
  messages.map((m) => {
    if (m.userId) {
      m.userName = users.find((u) => u.id === m.userId).name;
    }
    if (m.recipientId) {
      m.recipientName = users.find((u) => u.id === m.recipientId).name;
    }
    return m;
  });
  return messages;
};

// a sorting function that could be refactored with the one in PostProvider
const byTimestamp = (objA, objB) => (objA.timestamp < objB.timestamp ? 1 : -1);
