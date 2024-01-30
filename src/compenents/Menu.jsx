import { Link } from 'react-router-dom'
import style from '../styles/Menu.module.css' 
import imgPerfil from '../img/perfil-denivan-PhotoRoom.png'

function Menu() {
    return (
        <div className={ style.menu }>
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