import '@testing-library/jest-dom';
import {getSaludo} from '../../base-pruebas/02-template-string';


describe("Rpuebas en template-string ",()=>{
    test( "Test número 1" ,()=>{
        const name = "Fernandiño";

        const saludo = getSaludo( name );
        //console.log( saludo );
        
        expect( saludo ).toBe( "Hola Fernandiño" );
    });
});