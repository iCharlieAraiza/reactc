import {retornaArreglo} from '../../base-pruebas/07-deses-arr'


describe('Destructure test', ()=>{
    const [letras, numeros] = retornaArreglo();

    test('Destructure state function',()=>{
        expect('ABC').toEqual(letras);
    })

    test('Destructure with coloms',()=>{
        expect("ABC").toEqual(letras);
    })
});