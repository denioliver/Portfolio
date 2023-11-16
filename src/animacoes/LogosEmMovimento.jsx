import './LogosEmMovimento.css'
import React from "react"
import logoHTML5 from '../img/logo-html5.17a29567fb8d7aaf67b6.png'
import logoCSS from '../img/logo-css3.6c8e2f6c9df1aa8c548a.png'
import logoJavaScript from '../img/logo-javascript.8aeb306794f238ce651b.png'
import logoReact from '../img/logo_react.616306ac5e060868cafc.png'
import logoCorelDRAW from '../img/logo-coreldraw.aaaf4f990bba2517be57.png'
import logoPhotoshop from '../img/logo-photoshopcs3.309cc5f7bbc54aba2f0f.png'


function LogosEmMovimento(){

    return (
        <div className="logosEmMovimento">
            <div className="logos">
                <img src={logoHTML5} alt="Logo HTML5" className='logosMaiores' />
                <img src={logoCSS} alt="Logo CSS" className='logosMaiores' />
                <img src={logoJavaScript} alt="Logo JavaScript" className='logosMenores' />
                <img src={logoReact} alt="Logo React" className='logosMenores' />
                <img src={logoCorelDRAW} alt="Logo CorelDraw" className='logosMenores' />
                <img src={logoPhotoshop} alt="Logo PhotodhopCs3" className='logosMenores' />
            </div>
            
        </div>
        
    )
}

export default LogosEmMovimento