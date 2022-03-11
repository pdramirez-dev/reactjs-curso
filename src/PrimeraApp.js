// FC 
import React from 'react';

const PrimeraApp = () => {

    const saludo = 'Hola Mundo';

    const objeto = {
        nombre: 'Pablo',
        edad: 24
    };
    return (
        <>
            <h1>{saludo}</h1>
            <pre>{JSON.stringify(objeto, null, 3)}</pre>
            <p>Soy un parrafo!!!</p>
        </>
    );
}

export default PrimeraApp;