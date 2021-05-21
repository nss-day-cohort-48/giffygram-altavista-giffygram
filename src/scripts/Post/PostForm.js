

export const PostForm = () => {

    let html =  
    `
    <div>
        <label class="post__title" for="postTitle">Enter Title Here</label>
        <input type="text" name="postTitle"/>
    </div>
    <div>
        <label class="post__img" for="postImg">Enter URL here</label>
        <input type="text" name="postImg"/>
    </div>
    <div>
        <label class="post__description" for="postDescription">Enter Description here</label>
        <input type="text" name="postDescription"/>
    </div>
    <div>
        <button id="submit__button">Submit</button> 
    </div>
    <div>
        <button id="cancel__button">Cancel</button>
    </div>
        `
        return html
    }
    
// NEED TO CHANGE THIS MONDAY FINISH CLICKEVENTS
    // LINK TO CONTAINER
    // const mainContainer = document.querySelector(".giffygram")

    
    // mainContainer.addEventListener(
    //     "click",
    //     clickEvent => {
    //         if (clickEvent.target.id === "save__button") {
                
    //             // WILL NEED userSender, recipientId, text
    //             const userSender = parseInt(localStorage.getItem("gg_user"));
                
    //             const sendToUser = document.querySelector("#dmUser").value
    //             const sendMessage = document.querySelector("input[name='dmText']").value
                
                
    //             newMessage(userSender, sendToUser, sendMessage).then(
    //               () => {
    //                 mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    //               }
    //             ) 
                
    //         }
            
    //     }
    //     )
        
    //     mainContainer.addEventListener(
    //         "click",
    //         clickEvent => {
    //             if (clickEvent.target.id === "cancel__button") {
    //                 mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    //             }
    //         }
    //         )