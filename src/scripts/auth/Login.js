import {setRegistering} from "../data/dataAccess.js";
import {getUsers} from "../User/UserProvider.js";

document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "loginButton") {
    let foundUser = null;
    const userState = getUsers();

    const email = document.querySelector("input[name='email']").value;
    const password = document.querySelector("input[name='password']").value;

    for (const user of userState) {
      if (user.email === email && user.password === password) {
        foundUser = user;
      }
    }

    if (foundUser !== null) {
      localStorage.setItem("gg_user", foundUser.id);
      document
        .querySelector(".giffygram")
        .dispatchEvent(new CustomEvent("stateChanged"));
    } else if (email && password) {
      window.alert("User not found :(");
    }
  }
});

document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "registerButton") {
    setRegistering(true);
    document
      .querySelector(".giffygram")
      .dispatchEvent(new CustomEvent("stateChanged"));
  }
});

export const LoginForm = () => {
  return `
        <div class="loginForm">
            <h1>Giffy Gram</h1>
            <form>
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
              <button id="loginButton">Login</button>
              <button id="registerButton">Register</button>
            </div>
        </div>
    `;
};
