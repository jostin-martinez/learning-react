
describe('Pruebas en el archivo demo.test.js', () => {
    test( ' test description ', () => {
    
        //1. Inicialización
        const message = 'Hello World';
    
        //2. Estimulo
        const message2 = "Hello World";
    
        //3. Observar el comportamiento
       expect(message).toBe(message2);
    
    });
});
