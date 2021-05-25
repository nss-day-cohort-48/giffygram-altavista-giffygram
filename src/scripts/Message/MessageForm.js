import {newMessage} from "./MessageProvider.js";
import {getUsers} from "../User/UserProvider.js";
import {setDisplayDM} from "../data/dataAccess.js";

export const DirectMessage = () => {
  return /*html*/ `
    <div class="directMessage">
    <div>
    <select name="dmUser" id="dmUser" class="input">
      <option value="user__select">Send to...</option>
      ${selectUsers()}
    </select>
    </div>
    <div>
      <textarea name="dmText" placeholder="Message:" id="dmText"></textarea>
    </div>
    <div>
      <button id="dm__save" class="input">Save</button>
      <button id="dm__cancel" class="input">Cancel</button>
    </div>
    </div>
        `;
};

const selectUsers = () =>
  getUsers()
    .map((m) => {
      // dont let them send a message to themselves
      return m.id === parseInt(localStorage.getItem("gg_user"))
        ? ""
        : `<option value="${m.id}">${m.name}</option>`;
    })
    .join("");

const mainContainer = document.querySelector(".giffygram");

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "dm__save") {
    const userSender = parseInt(localStorage.getItem("gg_user"));
    const sendToUser = document.querySelector("#dmUser").value;
    const sendMessage = document.querySelector("#dmText").value;

    const result = newMessage(userSender, sendToUser, sendMessage);
    typeof result === "string"
      ? window.alert(result)
      : result.then(() => {
          setDisplayDM(false);
          mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
        });
  }
});

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "dm__cancel") {
    setDisplayDM(false);
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  }
});
