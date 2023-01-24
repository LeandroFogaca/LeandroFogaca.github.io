import Bio from "./Bio"
import Name from "./Name"
import Picture from "./Picture"

function CardProfile() {
    return (
        <div className="card">
            < Picture />
            < Name name="Leandro Fogaça" />
            < Bio text="Está página está em construção, 
            o objetivo é aprender um pouco sobre CSS e futuramente
            será organizado e demostrado os diversos projetos em que atuo,
            Comecei minha carreira como eletricista, depois me especializei em
            manutenção industrial, sempre me interessei por automação e
            desenvolvimento de hardwares e softwares. Atualmente estudo JavaScript,
            um pouco de Python e Lua." />
        </div>
    )
}

export default CardProfile