import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import FirstApp from '../FirstApp';
import React from 'react'


describe("First component test", ()=>{
    
    test("check content is render", ()=>{
        
        const note = {
            content: 'This is a test',
            important: true
        }

        const component = render(<FirstApp name="Carlos"/>)

        //console.log(component);
        component.getByText('Nombre: Carlos');

    })

    test("test click handle", ()=>{
        const mockHandler = jest.fn(); 
        const component = render(<FirstApp name="Carlos" mockHandler={ mockHandler }/>)

        const button = component.getByText('prueba de click');
        fireEvent.click( button );
        fireEvent.click( button );

        expect(mockHandler).toHaveBeenCalledTimes(1);
        
    })

});