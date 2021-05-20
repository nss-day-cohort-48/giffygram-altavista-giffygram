import {newMessage} from "./Message/MessageProvider.js";
import {newPost} from "./Post/PostProvider.js";

export const makeTesters = () => {
  window.sendMessage = (userId, recvId, text) => {
    newMessage(
      userId || 1,
      recvId || 6,
      text || `a message from the past! ->> ${new Date().toLocaleString()}`
    ).then(responseOkay);
  };

  window.makePost = (userId, title, imageURL, desc) => {
    newPost(
      userId || 1,
      title || "post malone",
      imageURL ||
        "https://media0.giphy.com/media/ZBJq9YnKoRimnTEaa0/giphy.gif?cid=ecf05e47xmew6rztl0ne9hcw0culqk1vi8gnwmbwnqdjd4sr&rid=giphy.gif&ct=g",
      desc || `-->> ${new Date().toLocaleString()}`
    ).then(responseOkay);
  };

  window.stateChanged = () =>
    document
      .querySelector(".giffygram")
      .dispatchEvent(new CustomEvent("stateChanged"));
};

const responseOkay = (response) => {
  let result;
  if (response.status === 201) {
    result = "success";
  } else {
    result = "failure :(";
  }
  console.log(result);
};
