import Header from "./Header";
import Footer from "./Footer";

export default function Post(props) {
    return(
        <div class="post">
            <Header username={props.username}/>

            <div class="conteudo">
                <img src={props.content} />
            </div>

            <Footer 
                likesHighlight={props.likesHighlight} 
                likesNumber={props.likesNumber}
            />
        </div>
    );
}