import '@testing-library/jest-dom';
import {getGreeting} from '../../base-pruebas/02-template-string';


describe("Rpuebas en template-string ",()=>{
    test( "Test número 1" ,()=>{
        const name = "Fernandiño";

        const saludo = getGreeting( name );
        
        expect( saludo ).toBe( "Hola Fernandiño" );

        expect( getGreeting() ).toBe( "Hola Carlos!" );

    });
});