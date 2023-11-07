import { Route, Routes, HashRouter } from "react-router-dom"
import Home from "../compenents/Home"
import Projetos from "../compenents/Projetos"
import Contatos from "../compenents/Contatos"
import Sobre from "../compenents/Sobre"

function Content(){
    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route path="/portfolio" element={ <Home /> } />
                    <Route path="/portfolio/Sobre"  element={ <Sobre />} />
                    <Route path="/portfolio/Projetos"  element={ <Projetos />} />
                    <Route path="/portfolio/Contatos"  element={ <Contatos />} />
                </Routes>
            </HashRouter>
        </div>
    )
}

export default Content