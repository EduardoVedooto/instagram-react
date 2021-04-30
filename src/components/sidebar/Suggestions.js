import Suggestion from "./Suggestion";

const data = [
    {
        username: "bad.vibes.memes",
        info: "Segue você"
    },
    {
        username: "chibirdart",
        info: "Segue você"
    },
    {
        username: "razoesparaacreditar",
        info: "Novo no Instagram"
    },
    {
        username: "adorable_animals",
        info: "Segue você"
    },
    {
        username: "smallcutecats",
        info: "Segue você"
    },
];

export default function Suggestions() {
    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {data.map(suggestion => (
                <Suggestion 
                    username={suggestion.username}
                    info={suggestion.info}
                />
            ))}

        </div>
    );
}