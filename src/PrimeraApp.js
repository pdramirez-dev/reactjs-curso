// FC 
import React from 'react';
import PropTypes from "prop-types";
// uso de destructuracion de las props 

const PrimeraApp = ({ saludo, subtitulo }) => {



    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    );
}
// PropTypes
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}
// DefaultProps
PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}
export default PrimeraApp;

