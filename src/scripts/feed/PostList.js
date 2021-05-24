import {getPosts} from "../Post/PostProvider.js";

export const postFeed = () => {
  const posts = getPosts();
  //    MAP METHOD AND JOIN METHOD
  let htmlString = ``;

  const postsHTML = posts.map((p) => {
    const postDate = new Date(p.timestamp);

    return `
        <div class="user__title">${p.title}</div>
        <img src= "${p.imageURL}"/>
        <div class="user__description">${p.description}</div>
        <div class="user__post">Posted by ${
          p.userName
        } at ${postDate.toLocaleString()}.</div>
        `;
  });

  const listOfPosts = postsHTML.join("");
  htmlString += listOfPosts;
  return htmlString;
};
