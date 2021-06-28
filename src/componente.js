import PropTypes from 'prop-types';
import React,{useState} from 'react';
const Componente = ({valor}) =>{
    //Handle
        const [principal, setPrincipal] = useState(0);
       

        const handleSuma = (e) =>{
            setPrincipal(principal +1);
        }
        const handleResta = (e) =>{
            setPrincipal(principal - 1);
        }
        const handleReset = (e) =>{
            setPrincipal(valor);
        }
   

    return (<>
                <h1>App Contador</h1>
                <p>{principal}</p>
                <button onClick = {(e) => handleSuma(e)}>+1</button>
                <button onClick = {(e) => handleResta(e)}>-1</button>
                <button onClick = {(e) => handleReset(e)}>Reset</button>
            </>)
}

Componente.propTypes = {
    valor: PropTypes.number.isRequired

}

export default Componente;