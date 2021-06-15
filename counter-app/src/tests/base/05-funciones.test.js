import {getUser, getUsuarioActivo} from '../../base-pruebas/05-funciones'
import '@testing-library/jest-dom'

describe('Prueba del archivo 5', ()=>{
    
    test('Check is getUser works', ()=>{
        const data = getUser();
        expect('ABC123').toBe(data.uid);
    })

    test('Check if bouth objets are equal', ()=>{
        const user = getUsuarioActivo('Juan');
        const userBase = {
            username: 'Juan',
            uid: 'ABC567'
        }
        expect(user).toEqual(userBase);
    })
})


