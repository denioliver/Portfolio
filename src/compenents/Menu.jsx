import '../styles/Menu.css' 

function Menu() {
    return (
        <div className="menu">
            <div className='head'>
                <h1>Denivan Oliveira dos Santos</h1>
                <p>Desenvolvedor Web FrontEnd</p>
            </div>
            <nav>
                <a href="/">Home</a>
                <a href="Sobre">Sobre</a>
                <a href="Projetos">Projetos</a>
                <a href="Contatos">Contatos</a>
            </nav>
        </div>
    )
}

export default Menu