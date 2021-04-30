export default function Header(props) {
    return(
        <div class="topo">
            <div class="usuario">
                <img src={`assets/img/${props.username}.svg`} alt="Profile"/>
                {props.username}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    );
}