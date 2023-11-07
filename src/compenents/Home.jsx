import '../styles/Home.css'
import Rotacao3d from '../animacoes/Rotacao3d'

function Home(){

    return (
        <div className="home" >
            <div className='3d' >
                        <Rotacao3d />
            </div>
            <div className='h1'>
                <h1>
                    Olá mundo!
                </h1>
            </div>
        </div>
    )
}

export default Home