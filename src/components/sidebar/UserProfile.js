export default function UserProfile(props) {
    return(
        <div class="usuario">
            <img src={props.profilePhoto} alt="Profile"/>
            <div class="texto">
                <strong>{props.username}</strong>
                {props.name}
            </div>
        </div>
    );
}