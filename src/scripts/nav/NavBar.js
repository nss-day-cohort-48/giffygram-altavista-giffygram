import {
  clearFilters,
  setDisplayDM,
  setDisplayMessage,
} from "../data/dataAccess.js";
import { getContainer } from "../GiffyGram.js";
import {getUserMessages, howManyUnread} from "../Message/MessageProvider.js";

const giffygram = getContainer()

giffygram.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "logout") {
    localStorage.setItem("gg_user", "");
    clearFilters();
    giffygram.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

giffygram.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "directMessageIcon") {
    setDisplayDM(true);
    setDisplayMessage(true);
    giffygram.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

giffygram.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "notification__count") {
    setDisplayMessage(true);
    giffygram.dispatchEvent(new CustomEvent("stateChanged"));
  }
});

giffygram.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "logo") {
    setDisplayMessage(false);
    setDisplayDM(false);
    giffygram.dispatchEvent(new CustomEvent("stateChanged"));
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
