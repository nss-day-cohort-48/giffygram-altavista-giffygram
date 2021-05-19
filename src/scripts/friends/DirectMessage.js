

export const DirectMessage = () => {
    let html = `
        <div>
            <label class="send__user" for="userSend">Send to</label>
                <select name="userSend" id="userSend">
                    <option value=""></option>
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
            
        }
    }
)


