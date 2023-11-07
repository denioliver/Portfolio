import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Menu from './compenents/Menu'
import Content from './content/Content'
import Rodape from './compenents/Rodape'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Menu />
        <Content />
        <Rodape />
      </BrowserRouter>
    </div>
  )
}

export default App
