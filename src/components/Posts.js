import Post from "./post/Post.js";

const data = [
    {
        username: "meowed",
        content: "assets/img/gato-telefone.svg",
        likesHighlight: "respondeai",
        likesNumber: 101.523
    },
    {
        username: "barked",
        content: "assets/img/dog.svg",
        likesHighlight: "adorable_animals",
        likesNumber: 99.159
    }
];

export default function Posts() {
    return(
        <>
            {data.map(post => (
                <Post 
                    username = {post.username}
                    content = {post.content}
                    likesHighlight = {post.likesHighlight}
                    likesNumber = {post.likesNumber}
                />
            ))}
        </>
    );
}