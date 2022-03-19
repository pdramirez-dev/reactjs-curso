
describe('Pruebas en el archivo demo.test.js', () => {
    test('Deve ser Iguales los mensajes', () => {
        // 1. inicializacion
        const mensaje = "Hola Mundo";
        // 2. estimulo
        const mensaje2 = `Hola Mundo`;
        //  3 assert
        expect(mensaje).toBe(mensaje2);
    });
});
