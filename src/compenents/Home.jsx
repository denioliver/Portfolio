import style from'../styles/Home.module.css'
import Rotacao3d from '../animacoes/Rotacao3d'

function Home() {

    return (
        <div className={ style.home } >
            <div>
                <p className={ style.denivan }>
                    Denivan
                </p>
                <p className={ style.oliveira }>
                    Oliveira
                </p>
                <p className={ style.PDesenvolvedor }>
                    - Desenvolvedor web FrontEnd -
                </p>
            </div>
            <div className={ style.Rotacao3d } >
                        <Rotacao3d />
            </div>
        </div>
    )
}

export default Home