import React from 'react'
import { render } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom'
import NavBar from '../components/NavBar';


describe('Navbar component', () => {
    it('matches the snapshot', () => {
        const mockDetails = {
            userID: '12345'
        }
        const mockLog = jest.fn()
    

        const {asFragment} = render (
        <MemoryRouter>
            <NavBar
            {...mockDetails.userID}
            onLogin={mockLog}
            onLogout={mockLog}/>
        </MemoryRouter>
        )

        expect(asFragment).toMatchSnapshot()
    })
})