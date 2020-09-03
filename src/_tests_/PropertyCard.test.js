import React from 'react'
import { render } from '@testing-library/react';
import PropertyCard from '../components/PropertyCard';

describe('PropertyCard', () => {
    const mockData = [{
        title: '1 Bed Flat',
        type: 'Flat',
        bedrooms: 1,
        bathrooms: 1,
        price: 12000,
        city: 'Manchester',
        email: 'this.email@thisemail.com',
    }]
    it('matches the snapshot', () => { 
        const {asFragment} = render (<PropertyCard details={mockData}/>)

        expect(asFragment()).toMatchSnapshot()
    })
    it('renders the correct props', () => {
        const { getByTestId } = render (<PropertyCard details={mockData}/>)

        expect(getByTestId('titleId')).toHaveClass('titleDiv')
        expect(getByTestId('typeId')).toHaveClass('typeDiv')
        expect(getByTestId('bedroomsId')).toHaveClass('bedroomsDiv')
        expect(getByTestId('bathroomsId')).toHaveClass('bathroomsDiv')
        expect(getByTestId('priceId')).toHaveClass('priceDiv')
        expect(getByTestId('cityId')).toHaveClass('cityDiv')
        expect(getByTestId('emailId')).toHaveClass('emailDiv')
    })
})