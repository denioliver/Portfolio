import '../styles/Sobre.css'
import gifProgramador from '../img/me.gif'
import gifSkatista from '../img/Skating.gif'


function Sobre() {

    const titulo = '< Conheçam um pouco sobre mim />'

    return (
        <div className="sobre" >
            <article>
                <h1><code>{titulo}</code></h1>
                <p>  Me chamo Denivan Oliveira dos Santos, nascido em 1992, sou Desenvolvedor Web FrontEnd.<img src={gifProgramador} alt="GifProgramador" />  Hoje sou aluno da turma 38 da escola Trybe, incrementando mais habilidades à minhas hardSkills para alcançar o conhecimento em desenvolvimento web FullStack, e desenvolvendo a cada dia mais minhas softSkills. Tenho como objetivo futuro me especializar no desenvolvimento web mobile para criação de aplicativos. <br /> Também trabalho com as ferramentas do CorelDraw e Photoshop. <img src={gifSkatista} alt="GifSkatista" 
                id='imgSkatista'/> <br />  Com tudo, sou um apaixonado por arte, esportes e pela tecnologias. <br />
                <br />
                Como programador sonho em fazer parte de grandes projetos, sabe aquela sensação boa, de olhar para algo finalizado e saber que você fez parte, saber que todo o seu esforço não foi em vão, é uma sensação maravilhosa. Esse sou eu, ou melhor um pouco de quem eu sou.
                </p>

            </article>
        </div>
    )
}

export default Sobre