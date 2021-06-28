import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Componente from './componente';
const rootdiv = document.querySelector("#root");

ReactDOM.render(<Componente valor={0}/>, rootdiv);
