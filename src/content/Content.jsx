import './Content.css'

import { Route, Routes } from "react-router-dom"
import Home from "../compenents/Home"
import Projetos from "../compenents/Projetos"
import Contatos from "../compenents/Contatos"
import Sobre from "../compenents/Sobre"

function Content(){
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/Sobre"  element={ <Sobre />} />
                <Route path="/Projetos"  element={ <Projetos />} />
                <Route path="/Contatos"  element={ <Contatos />} />
            </Routes>
        </div>
    )
}

export default Content