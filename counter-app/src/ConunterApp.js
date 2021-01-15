import React, {useState} from 'react';
import PropTypes from 'prop-types';



const CounterApp = ({value})=>{

    const [count, setCount] = useState(value);

    const handleAdd = ()=>{
        setCount((cont)=>cont+1);
    }

    const handleSubstract = ()=>{
        if(count >0) setCount((cont)=>cont-1);
    }

    const handleReset= () =>{
        setCount(0);
    }

    return(
        <>
            <h1>Counter App</h1>
            <p>{ count }</p>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ handleReset }>Reset</button>
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp;