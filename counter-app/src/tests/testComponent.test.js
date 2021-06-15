import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
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

});