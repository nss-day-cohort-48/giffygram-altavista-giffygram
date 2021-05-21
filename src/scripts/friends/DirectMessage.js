import { getUsers } from "../User/UserProvider.js"



export const DirectMessage = () => {
    const users = getUsers()
    
    // GETTING THE SENDER USER ID
    
    
    let html = 

    `
        <div>
            <label class="send__user" for="userSend">Send to</label>
                <select name="userSend" id="userSend" class="input">
                    <option value="user__select">Choose</option>
                    ${users.map(
                        (m) => {
                            return `<option value="${m.id}">${m.name}</option>`
                        }
                    ).join("")}
                </select>
        </div>
        <div>
            <label class="message__user" for="sendText">Enter message here</label>
            <input type="text" name="sendText" class="input" />
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
            const loggedInUser = users.map(
                (u) => {
                    return u.id
                }
            )
            
            // NEED TO CREATE:
            // userSender data collector
            // Boolean data collector
            // message id
            const userSender = document.querySelector(loggedInUser).value
            const sendToUser = document.querySelector("input[name='userSend']").value
            const sendMessage = document.querySelector("input[name='sendText']").value
            const isRead = document.querySelector().value
            const messageId = document.querySelector().value
        
            const sendToSendAPI = {
                userId: userSender,
                recipientId: sendToUser,
                text: sendMessage,
                read: isRead,
                id: messageId
            }
        
        }

    }
)


