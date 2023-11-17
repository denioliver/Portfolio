import '../styles/App.css'
import Menu from './Menu'
import Content from '../content/Content'
import Rodape from './Rodape'


function App(){

    return (
        <div className="App" >
            <div id='left' >
                
            </div>
            <div id='centro' ></div>
            <Menu />
            <div> <Content /> </div>
            <Rodape />
        </div>
    )
}

export default App