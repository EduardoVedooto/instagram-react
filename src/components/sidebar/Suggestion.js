export default function Suggestion(props) {
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={`assets/img/${props.username}.svg`} alt="Profile picture"/>
                <div class="texto">
                    <div class="nome">{props.username}</div>
                    <div class="razao">{props.info}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}