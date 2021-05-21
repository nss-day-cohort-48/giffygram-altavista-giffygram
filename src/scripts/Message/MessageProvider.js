import {postMessage, rawMessages, rawUsers} from "../data/dataAccess.js";

// TODO more validation
//      - does that userId exist?
//      - does that recipientId match a valid userId?
//      - is the text... good?
export const newMessage = (userId, recipientId, text) => {
  if (userId && recipientId && text) {
    return postMessage({
      userId: userId,
      recipientId: recipientId,
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
