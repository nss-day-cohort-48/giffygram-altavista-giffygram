import { newMessage } from "./MessageProvider.js"
import { getUsers } from "../User/UserProvider.js"


export const DirectMessage = () => {
    const users = getUsers()

    let html =  
    `
    <div>
    <label class="send__user" for="dmUser">Send to</label>
    <select name="dmUser" id="dmUser" class="input">
    <option value="user__select">Choose</option>
    ${users.map(
        (m) => {
            return `<option value="${m.id}">${m.name}</option>`
        }
        ).join("")}
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
        `
        return html
    }
    
    // LINK TO CONTAINER
    const mainContainer = document.querySelector(".giffygram")

    
    mainContainer.addEventListener(
        "click",
        clickEvent => {
            if (clickEvent.target.id === "save__button") {
                
                // WILL NEED userSender, recipientId, text
                const userSender = parseInt(localStorage.getItem("gg_user"));
                
                const sendToUser = document.querySelector("#dmUser").value
                const sendMessage = document.querySelector("input[name='dmText']").value
                
                
                newMessage(userSender, sendToUser, sendMessage).then(
                  () => {
                    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                  }
                ) 
                
            }
            
        }
        )
        
        mainContainer.addEventListener(
            "click",
            clickEvent => {
                if (clickEvent.target.id === "cancel__button") {
                    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
                }
            }
            )