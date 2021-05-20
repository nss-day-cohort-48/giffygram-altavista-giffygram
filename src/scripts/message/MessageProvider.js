import {rawMessages, rawUsers} from "../data/dataAccess.js";

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
