
describe( "Pruebas en el archivo hello.test.js", ()=>{
    test('deben ser iguales los strings ', () => {

        const isActive = true;
    
        const mensage = 'Hola mundo';
    
        const mensage2 = "Hola mundo";
    
        expect(mensage).toBe(mensage2);
    
    })
    
});

