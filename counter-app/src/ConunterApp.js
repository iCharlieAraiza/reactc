import React from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({value})=>{
    return(
        <>
            <h1>Counter App</h1>
            <p>{ value }</p>
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number
}


export default CounterApp;