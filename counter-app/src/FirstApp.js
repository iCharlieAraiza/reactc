import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({greeting, name, mockHandler})=>{
    
    const numbers = [1,2,3,4,5,6,7];
 
    const user = {
        name: "Carlos",
        lastName: "Surname",
        age: 27
    }

    const clickHandle = ()=>{
        console.log("hola");
        mockHandler();
    }

    return(
        <>
            <h1> { greeting } </h1>
            <p>Este es un ejemplo de prueba para hacer un componente con</p>
            <ul>
                <li> { numbers } </li>
            </ul>
            <pre>
                <p>Nombre: { name }</p>
                <p>Apellido: { user.lastName }</p>
                <p>Edad: { user.age } </p>
            </pre>
            <button onClick={clickHandle}>prueba de click</button>

        </>
        )
}

FirstApp.propTypes = {
    name: PropTypes.string
};

FirstApp.defaultProps = {
    name: 'Sin nombre especificado',
    greeting: '¡Hola!'
}

export default FirstApp;