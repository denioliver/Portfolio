import { HashRouter} from 'react-router-dom'
import './App.css'
import Menu from './compenents/Menu'
import Content from './content/Content'
import Rodape from './compenents/Rodape'

function App() {

  return (
    <div className='app'>
      <HashRouter >
        <Menu />
        <Content />
        <Rodape />
      </HashRouter>
    </div>
  )
}

export default App
