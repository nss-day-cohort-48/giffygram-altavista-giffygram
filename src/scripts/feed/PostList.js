import { getPosts } from "../Post/PostProvider.js";
 

export const postFeed = () => {
    const posts = getPosts()
//    MAP METHOD AND JOIN METHOD
let htmlString = `<h1>POSTS</h1>`;


const postsHTML = posts.map(
    (p) => {
        return `
        <div class="user__id">${p.id}</div>
        <div class="user__title">${p.title}</div>
        <img src={require('../images/' + ${p.imageURL})} />
        <div class="user__description">${p.description}</div>
        <div class="user__timestamp__user">Post by ${p.userId} at ${p.timestamp}</div>
        `
    });
const listOfPosts = postsHTML.join("")
htmlString += listOfPosts
htmlString += testImage
return htmlString

}

// const images = array.map(image => {
//     return <img key={image} src={require(`./icons/${image}.png`)} className="img-responsive" />
// });