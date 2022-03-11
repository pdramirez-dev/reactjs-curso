// FC 
import React from 'react';
import PropTypes from "prop-types";
// uso de destructuracion de las props 

const PrimeraApp = ({ saludo }) => {



    return (
        <>
            <h1>{saludo}</h1>
            <p>Soy un parrafo!!!</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,

}
export default PrimeraApp;

