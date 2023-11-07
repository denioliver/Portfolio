import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Menu from './compenents/Menu';
import Content from './content/Content';
import Rodape from './compenents/Rodape';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Menu />
        <Content />
        <Rodape />
      </BrowserRouter>
  </React.StrictMode>
);

