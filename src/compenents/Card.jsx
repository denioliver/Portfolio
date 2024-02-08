import Projetos from '../list/projetos.js'
import style from '../styles/Card.module.css'

function Card() {

  return (
    <ul className={ style.ulContainer } >
      {Projetos.map((projeto) => (
        <li
          className={ style.liCard }
          key={ projeto.name }
        >
          <img
            style={ { width:'320px' } }
            src={ projeto.image }
            alt="primeiro Portifolio"
            />
          <h3>{ projeto.name }</h3>
          <a
            href={ projeto.url }
            target="blank"
          >
            Acessar
          </a>
        </li>
      ))}
    </ul>
  )
};

export default Card