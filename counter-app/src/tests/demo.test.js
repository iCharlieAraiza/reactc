//Test Wrapper
describe('Test of all', ()=>{

    //Test
    test('the stringgs should be equals', ()=>{
    
        // 1. Arrange: Init element
        const message = 'Hello World';
    
        //2. Act
        const message2 = `Hello World`;
    
        //3. Assert
        expect( message ).toBe( message2 );
    
    });

})