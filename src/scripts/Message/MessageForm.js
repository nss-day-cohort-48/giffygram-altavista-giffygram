import {newMessage} from "./MessageProvider.js";
import {getUsers} from "../User/UserProvider.js";
import {setDisplayDM} from "../data/dataAccess.js";

export const DirectMessage = () => {
  return /*html*/ `
    <div>
    <label class="send__user" for="dmUser">Send to</label>
    <select name="dmUser" id="dmUser" class="input">
      <option value="user__select">Choose</option>
      ${selectUsers()}
    </select>
    </div>
    <div>
    <label class="message__user" for="dmText">Enter message here</label>
    <input type="text" name="dmText" class="input" id="dmText" />
    </div>
    <div>
    <button id="save__button" class="input">Save</button>
    <button id="cancel__button" class="input">Cancel</button>
    </div>
        `;
};

const selectUsers = () =>
  getUsers()
    .map((m) => {
      return m.id === parseInt(localStorage.getItem("gg_user"))
        ? ""
        : `<option value="${m.id}">${m.name}</option>`;
    })
    .join("");

const mainContainer = document.querySelector(".giffygram");

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "save__button") {
    const userSender = parseInt(localStorage.getItem("gg_user"));
    const sendToUser = document.querySelector("#dmUser").value;
    const sendMessage = document.querySelector("input[name='dmText']").value;

    result = newMessage(userSender, sendToUser, sendMessage);
    typeof result === "string"
      ? window.alert(result)
      : result.then(() => {
          setDisplayDM(false);
          mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
        });
  }
});

mainContainer.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "cancel__button") {
    setDisplayDM(false);
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
  }
});
