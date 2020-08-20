import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';
import { BrowserRouter } from 'react-router-dom'

describe('App', () => {
  it('renders correctly', ()=> {
    const {asFragment} = render (
      <BrowserRouter>
      <App/>
      </BrowserRouter>
      )

    expect(asFragment).toMatchSnapshot()
  })})
