import React from 'react'
import { render } from '@testing-library/react';
import Alert from '../components/Alert';


describe('Alert', () => {

    it('checks there is error message rendered on the site in case of an error', () => {
        const {getByText, asFragment} = render(<Alert message='Error!'/>)
        expect(getByText(/Error/).textContent).toBe('Error!')
        expect(asFragment()).toMatchSnapshot()
    })
    it('checks there is a success message rendered on the site in case of success', () => {
        const {getByText, asFragment} = render (<Alert message='Success!' success/>)
        expect(getByText(/Success/).textContent).toBe('Success!')
        expect(asFragment()).toMatchSnapshot()  

    })
})