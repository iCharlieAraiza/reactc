import {getHeroeById} from '../../base-pruebas/08-imp-exp';
import {getHeroeByIdAsync} from '../../base-pruebas/09-promesas'
import '@testing-library/jest-dom'


describe( 'Test with primises', () => {
    test( 'Return a hero', ( done )=>{
        const hero = getHeroeByIdAsync(1);
        hero.then((e) =>{  
            expect({ id: 1, name: 'Batman', owner: 'DC' }).toEqual(e);
            done();
        });
    })
})
