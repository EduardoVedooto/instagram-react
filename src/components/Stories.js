import Story from "./Story";

const profiles = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet"
];

export default function Stories() {
    return(
        <div class="stories">
            {profiles.map(profile => <Story username={profile} />)}
            
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}