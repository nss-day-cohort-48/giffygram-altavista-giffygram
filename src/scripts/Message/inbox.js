import { getFeedState } from "../data/dataAccess.js"
import { DirectMessage } from "./MessageForm.js"
import { MessageList } from "./MessageList.js"


export const Inbox = () => {
    return `
    <article class="inbox">
    ${getFeedState().displayDM ? DirectMessage() : ""}
    ${MessageList()}
    </article>
    `
}