import UserProfile from "./sidebar/UserProfile";
import Suggestions from "./sidebar/Suggestions";

const data = [
    {
        username: "catanacomics",
        name: "Catana",
        profilePhoto: "assets/img/catanacomics.svg"
    }
];

export default function Sidebar(){
    return(
        <div class="sidebar">
            <UserProfile 
                username={data[0].username}
                name={data[0].name}
                profilePhoto={data[0].profilePhoto}
            />
            <Suggestions />

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
    );
}