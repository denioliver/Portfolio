import style from '../styles/Sobre.module.css'
import gifProgramador from '../img/me.gif'
import gifSkatista from '../img/Skating.gif'


function Sobre() {

    const titulo = '< Conheçam um pouco sobre mim />'

    return (
        <div className={style.sobre} >
            <article>
                <h1><code>{titulo}</code></h1>
                <p>Meu nome é Denivan Oliveira dos Santos, nasci em 1992 e sou um Desenvolvedor Web FrontEnd, <img className={ style.dev } src={gifProgramador} alt="GifProgramador" />  atualmente aluno da turma 38 da escola Trybe, onde aprimoro minhas hardSkills em busca do conhecimento em desenvolvimento web FullStack. Tenho como meta a especialização em desenvolvimento web mobile para criação de aplicativos. Além do desenvolvimento web, possuo habilidades nas ferramentas CorelDraw e Photoshop,<img src={gifSkatista} alt="GifSkatista" 
                className={ style.imgSkatista }/> <br /> e compartilho meu entusiasmo por arte, esportes e tecnologia. <br />
                <br />
                Como programador, almejo contribuir para grandes projetos, buscando aquela gratificação de ver o resultado final e saber que meu esforço foi fundamental. Essa é a essência de quem sou: um apaixonado por desafios tecnológicos e pela realização que a programação proporciona.
                </p>
            </article>
        </div>
    )
}

export default Sobre