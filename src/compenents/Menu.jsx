import '../styles/Menu.css' 

function Menu() {
    return (
        <div className="menu">
            <div className='head'>
                <h1>Denivan Oliveira dos Santos</h1>
                <p>Desenvolvedor Web FrontEnd</p>
            </div>
            <nav>
                <a href="/portfolio">Home</a>
                <a href="/portfolio/Sobre">Sobre</a>
                <a href="/portfolio/Projetos">Projetos</a>
                <a href="/portfolio/Contatos">Contatos</a>
            </nav>
        </div>
    )
}

export default Menu