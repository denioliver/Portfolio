import { Link } from 'react-router-dom'
import '../styles/Menu.css' 

function Menu() {
    return (
        <div className="menu">
            <div className='head'>
                <h1>Denivan Oliveira dos Santos</h1>
                <p>Desenvolvedor Web FrontEnd</p>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Projetos">Projetos</Link>
                <Link to="/Contatos">Contatos</Link>
            </nav>
        </div>
    )
}

export default Menu