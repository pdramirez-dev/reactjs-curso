
import React from 'react'
import PropTypes from 'prop-types'

// Funcional Componet
const CounterApp = ({ value }) => {

    return (<>
        <h1>CounterApp </h1>
        <h2>{value}</h2>
    </>);
}

// PropType Validation 
CounterApp.prototype = {
    value: PropTypes.number.isRequired
}

export default CounterApp;