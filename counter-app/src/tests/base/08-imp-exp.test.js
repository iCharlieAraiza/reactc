import heroes from '../../data/heroes'
import {getHeroeById} from '../../base-pruebas/08-imp-exp'
import '@testing-library/jest-dom'

describe('data test', ()=>{
    test('check if it is working', ()=>{
        console.log(heroes);
    });

    test('Get hero by id', ()=>{ 
        const hero = heroes.heroes.find( (h) => h.id === 1 );
        const heroById = getHeroeById(1);
        expect( hero ).toEqual( heroById );
    });

    test('is undefined', ()=>{ 
        const heroById = getHeroeById(21);
        expect( undefined ).toBe( heroById );
    });

    test('Get hero by owner', ()=>{ 
        const hero = heroes.heroes.find( (h) => h.owner === 'DC' );
        expect( {id:1, name: 'Batman', owner: 'DC'} ).toEqual( hero );
    });

});