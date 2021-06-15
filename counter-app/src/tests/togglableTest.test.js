import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Togglable from '../base-pruebas/togglable';
import React from 'react';

describe("Toggable test", ()=>{
    test("Check component render", ()=>{
        const component = render( <Togglable>Hola</Togglable> );
        
        component.getByText("Hola")
    })
});