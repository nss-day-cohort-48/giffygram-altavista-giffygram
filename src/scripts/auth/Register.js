import {setRegistering, postUser} from "../data/dataAccess.js";
import {getUsers} from "../User/UserProvider.js";

document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "cancelButton") {
    setRegistering(false);
    document
      .querySelector(".giffygram")
      .dispatchEvent(new CustomEvent("stateChanged"));
  }
});

document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "registerButton") {
    const userState = getUsers();

    const email = document.querySelector("input[name='email']").value;
    const password = document.querySelector("input[name='password']").value;
    const name = document.querySelector("input[name='name']").value;

    postUser({
      name: name,
      email: email,
      password: password,
    })
      .then((res) => res.json())
      .then((newUser) => {
        localStorage.setItem("gg_user", newUser.id);
        document
          .querySelector(".giffygram")
          .dispatchEvent(new CustomEvent("stateChanged"));
      });
  }
});

export const RegisterForm = () => {
  return `
        <div class="loginForm">
            <h1>Giffy Gram</h1>
            <form>
                <fieldset>
                    <label for="name">Name:</label>
                    <input type="text" name="name" autofocus placeholder="Your name" />
                </fieldset>
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="text" name="email" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password" />
                </fieldset>
            </form>
            <div class="buttons" style="display: flex;">
              <button id="registerButton">Register</button>
              <button id="cancelButton">Cancel</button>
            </div>
        </div>
    `;
};
