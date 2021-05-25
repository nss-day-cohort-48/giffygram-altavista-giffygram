import {setDisplayDM, setDisplayMessage} from "../data/dataAccess.js";
import {getUserMessages, howManyUnread} from "../Message/MessageProvider.js";

const container = document.querySelector(".giffygram");

container.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "logout") {
    container.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

container.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "directMessageIcon") {
    setDisplayDM(true);
    container.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

container.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "notification__count") {
    setDisplayMessage(true);
    container.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

container.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "logo") {
    setDisplayMessage(false);
    container.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

export const NavBar = () => {
  const messages = getUserMessages();
  const unreadCount = howManyUnread(messages);
  return `<nav class="navigation">
    <div class="navigation__item navigation__icon">
    <img src="/images/pb.png" alt="Giffygram icon" id="logo">
    </div>
    <div class="navigation__item navigation__name"> Giffygram</div>
    <div class="navigation__item navigation__search"></div>
    <div class="navigation__item navigation__message">
    <img id="directMessageIcon" src="/images/fountain-pen.svg" alt="Direct message">
    <div id="notification__count">${unreadCount}</div>
    </div>
    <div class="navigation__item navigation__logout">
    <button id="logout" class="fakeLink">Logout</button>
    </div>
    </nav>`;
};
