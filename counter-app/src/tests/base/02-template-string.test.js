import { getGreeting } from '../../base-pruebas/02-template-string'
import '@testing-library/jest-dom';


describe('Testing 02-template', ()=>{


    test('Should be equal', ()=>{
        const greeting  = getGreeting();

        expect( 'Hola' ).toBe( greeting )
    });

    test('Should get the name', ()=>{
        const greeting  = getGreeting('Carlos');
        expect( 'Hola Carlos' ).toBe( greeting )
    });


} );
