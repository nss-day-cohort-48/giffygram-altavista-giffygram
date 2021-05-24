const container = document.querySelector(".giffygram");

container.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitOrder") {
  }
});

container.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitOrder") {
  }
});

container.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "submitOrder") {
  }
});

export const NavBar = () => {
  return `<nav class="navigation">
    <div class="navigation__item navigation__icon">
    <img src="/images/pb.png" alt="Giffygram icon" id="logo">
    </div>
    <div class="navigation__item navigation__name"> Giffygram</div>
    <div class="navigation__item navigation__search"></div>
    <div class="navigation__item navigation__message">
    <img id="directMessageIcon" src="/images/fountain-pen.svg" alt="Direct message">
    <div class="notification__count"></div>
    </div>
    <div class="navigation__item navigation__logout"></div>
    </nav>`;
};
