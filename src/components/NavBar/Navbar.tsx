import React, { FC, ReactNode } from 'react'
import styled, { css } from 'styled-components'

const NavBarWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    padding-top: ${theme.spacings.xs};
    padding-bottom: ${theme.spacings.xs};

    background-color: ${theme.navbar.background};
  `}
`

const NavBarContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
    max-width: ${theme.breakpoints.widescreen};
    padding-right: ${theme.spacings.md};
    padding-left: ${theme.spacings.md};
  `}
`

interface NavbarProps {
    children: ReactNode
}

interface NavbarType extends FC<NavbarProps> {
    Navigation: FC,
    Logo: FC,
    NavigationItem: FC<{ active: boolean}>
}

const NavBar: NavbarType = ({ children }: NavbarProps) => {
  return <NavBarWrapper>
        <NavBarContent>
            {children}
        </NavBarContent>
    </NavBarWrapper>
}

NavBar.Logo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

NavBar.Navigation = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

NavBar.NavigationItem = styled.div<{ active: boolean}>`
  ${({ theme, active }) => css`
    a {
      display: flex;
      flex-flow: row nowrap;
      padding: ${theme.spacings.md};

      border-bottom-width: ${theme.spacings.xxs};
      border-bottom-style: solid;
      border-bottom-color: ${active
              ? theme.navbar.navigation.item.active.border
              : theme.navbar.navigation.item.regular.border};

      color: ${active
              ? theme.navbar.navigation.item.active.color
              : theme.navbar.navigation.item.regular.color};
      text-decoration: none;
    }
    &:hover {
      border-color: ${theme.navbar.navigation.item.hover.border};

      background-color: ${theme.navbar.navigation.item.hover.background}
    }
    
    &:active {
      border-color: ${theme.navbar.navigation.item.active.border};

      background-color: ${theme.navbar.navigation.item.active.background};
    }
  `}
`

export default NavBar
