import React from 'react'
import { render } from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom'
import SideBar from '../components/SideBar';

describe('SideBar', () => {

    it('matches the snapshot', () => {
        const {asFragment} = render (
        <MemoryRouter>
        <SideBar/>
        </MemoryRouter>)

        expect(asFragment()).toMatchSnapshot()
    })
})