import { useEffect, useState } from 'react'
import Projetos from '../list/projetos.js'
import style from '../styles/Card.module.css'

function Card() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  if (!visible) {
    return <span>Carregando...</span>
  }
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
          <p>{projeto.ultilizado}</p>
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