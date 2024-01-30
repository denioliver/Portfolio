import style from '../styles/Contatos.module.css'
import logoZap from '../img/whats.png'
import logoEmail from '../img/E-mail.png'
import logoLin from '../img/in.png'
import logoGithub from '../img/00.png'
import LogosEmMovimento from '../animacoes/LogosEmMovimento'

function Contatos(){
    return (
        <div className={ style.containerContatos }>
            <div className={style.containerUl}>
                <ul>
                    <li>
                        <a href="https://wa.me/5575991489231" target="blank">
                            <img src={logoZap} alt="" />
                            <p>(75)9.91489231</p>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:denyoliver777@gmail.com">
                            <img src={logoEmail} alt="" />
                            <p>denyoliver777@gmail.com</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/denivan-oliveira-237a66249" target='blank'>
                            <img src={logoLin} alt="" />
                            <p>https://www.linkedin.com/in/denivan-oliveira-237a66249</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/denioliver" target="blank" >
                            <img src={logoGithub} alt="" />
                            <p>https://github.com/denioliver</p>
                        </a>
                    </li>
                </ul>
            </div>
                <LogosEmMovimento/>
        </div>
    )
}

export default Contatos