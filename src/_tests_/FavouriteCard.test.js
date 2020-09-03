import React from 'react'
import { render } from '@testing-library/react';
import FavouriteCard from '../components/FavouriteCard';


describe('FavouriteCard', () => {
    const mockData = {
        title: '1 bedroom Flat',
        bedrooms: 1,
        bathrooms: 1,
        city: 'Manchester',
        email: 'email@email.com',
        price: 1200
    }

    it('matches the snapshot', () => { 
        const {asFragment} = render (
        <FavouriteCard
            title={mockData.title}
            bedrooms={mockData.bedrooms}
            bathrooms={mockData.bathrooms}
            city={mockData.city}
            email={mockData.email}
            price={mockData.price}/>)

        expect(asFragment()).toMatchSnapshot()
})

    it('renders the correct props', () => {
        const {getByTestId} = render (
            <FavouriteCard
            title={mockData.title}
            bedrooms={mockData.bedrooms}
            bathrooms={mockData.bathrooms}
            city={mockData.city}
            email={mockData.email}
            price={mockData.price}/>)

        expect(getByTestId('favTitleId')).toHaveClass('titleFav')
        expect(getByTestId('favTypeId')).toHaveClass('typeFav')
        expect(getByTestId('favBedroomsId')).toHaveClass('bedroomsFav')
        expect(getByTestId('favBathroomsId')).toHaveClass('bathroomsFav')
        expect(getByTestId('favPriceId')).toHaveClass('priceFav')
        expect(getByTestId('favCityId')).toHaveClass('cityFav')
        expect(getByTestId('favEmailId')).toHaveClass('emailFav')
    })
})