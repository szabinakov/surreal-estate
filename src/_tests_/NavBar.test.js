import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../components/NavBar';

describe('Navbar', () => {
    it('renders correctly', () => {
        const {asFragment} = render(<NavBar/>)

        expect(asFragment).toMatchSnapshot()
    })
})