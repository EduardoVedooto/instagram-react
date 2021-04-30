export default function Story(props) {
    return(
        <div class="story">
            <div class="imagem">
                <img src={`assets/img/${props.username}.svg`} alt="Profile"/>
            </div>
            <div class="usuario">{props.username}</div>
        </div>
    );
}