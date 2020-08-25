import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';
import { BrowserRouter } from 'react-router-dom'

describe('App', () => {
  const {asFragment} = render (
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    )
  it('renders correctly', ()=> {
    expect(asFragment()).toMatchSnapshot()
  })})
