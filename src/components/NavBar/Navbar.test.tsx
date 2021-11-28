import React from 'react'
import renderWithTheme from '../../utils/testing/renderWithTheme'
import { describe } from 'jest-circus'
import { NavBar } from '../../index'

describe('Navbar', () => {
  it('renders properly', () => {
    const { getByText } = renderWithTheme(<NavBar>
      <NavBar.Navigation>
        <NavBar.NavigationItem active={false}>
          <a href="#">Nav Item</a>
        </NavBar.NavigationItem>
      </NavBar.Navigation>
    </NavBar>)

    expect(getByText('Nav Item')).toBeTruthy()
  })
})
