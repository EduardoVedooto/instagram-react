import Logo from "./Logo";
import LogoMobile from "./LogoMobile";

const icons = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

export default function Header() {
    return(
        <div class="navbar">
            <div class="container">

                <Logo />
                <LogoMobile />
        
                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>
        
                <div class="icones">
                    {icons.map(icon => <ion-icon name={icon}></ion-icon>)}
                </div>

                <div class="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}