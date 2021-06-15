import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Togglable from '../base-pruebas/togglable';
import React from 'react';

describe("Toggable test", ()=>{

    let component;

    beforeEach(() => {
        component = render( <Togglable>Hola</Togglable> );
    })

    test("Check component render", ()=>{
        component.getByText("Hola")
    })

    test("Check component is not visible", ()=>{
        const button = component.getByText("Da click")
        fireEvent.click( button );
        expect(button.parentNode).toHaveStyle('display: none');
    })

    test("Check component is visible", ()=>{
        const button = component.getByText("Da click")
        fireEvent.click( button );
        fireEvent.click( button );
        expect(button.parentNode).toHaveStyle('display: block');
    })

});