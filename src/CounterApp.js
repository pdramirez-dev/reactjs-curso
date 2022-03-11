
import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Funcional Componet
const CounterApp = ({ value }) => {

    // useState hook(function)
    // destructuracion del state [variable, funcion]
    const [counter, setCounter] = useState(0);


    // handleAdd
    const handleAdd = (e) => {
        // setCounter(counter + 1);
        setCounter((c) => c + 1);
    }

    const handleReset = (e) => {
        setCounter((c) => 0);
    }

    const handleRest = (e) => {
        setCounter((c) => c - 1);
    }


    return (<>
        <h1>CounterApp </h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleRest}>-1</button>
    </>);
}

// PropType Validation 
CounterApp.prototype = {
    value: PropTypes.number.isRequired
}

export default CounterApp;