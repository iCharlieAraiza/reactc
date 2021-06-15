import {getImagen} from '../../base-pruebas/11-async-await'

describe('Async await test container', ()=>{
    test("async and await", async()=>{
        const json = await getImagen();
        console.log( json );
        expect(1).toBe(json.userId);
    })
})