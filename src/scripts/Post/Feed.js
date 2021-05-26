import {getFeedState} from "../data/dataAccess.js";
import {MiniMode, PostForm} from "./PostForm.js";
import {postFeed} from "./PostList.js";

export const Feed = () => {
  return `
    <article class="post__feed">
    
    ${getFeedState().displayPostForm ? PostForm() : MiniMode()}
    ${postFeed()}
    
    </article>
`;
};
