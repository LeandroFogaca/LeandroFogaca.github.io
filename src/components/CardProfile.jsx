import Bio from "./Bio"
import Name from "./Name"
import Picture from "./Picture"

function CardProfile() {
    return (
        <div className="card">
            < Picture />
            < Name name="Leandro Fogaça" />
            < Bio text="Essa é uma página para apresentar meus projetos e os primeiros passos de CSS" />
        </div>
    )
}

export default CardProfile