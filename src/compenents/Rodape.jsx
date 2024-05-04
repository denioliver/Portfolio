import { useEffect } from 'react';
import style from '../styles/Rodape.module.css'
import { useState } from 'react';

const Rodape = () => {
  const [ano, setAno] = useState('')
  useEffect(() => {
      function getAnoAtual() {
          const dataAtual = new Date();
          setAno(dataAtual.getFullYear().toString())
      }
      getAnoAtual()
  },[])
  return <>
      <footer>
      <div className={ style.rodape }>

          <p>&copy; { `${ano}  -  Denivan Oliveira dos Santos  -  Recife-PE` }</p>
      </div>
      </footer>
  </>

};

export default Rodape