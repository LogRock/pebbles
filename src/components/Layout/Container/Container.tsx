import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { up } from 'styled-breakpoints'

const Section = styled.section`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  
  ${({ theme }) => css`
      ${up('mobile')} { max-width: ${theme.breakpoints.mobile}; }
      ${up('tablet')} { max-width: ${theme.breakpoints.tablet}; }
      ${up('desktop')} { max-width: ${theme.breakpoints.desktop}; }
      ${up('widescreen')} { max-width: ${theme.breakpoints.widescreen}; }
      ${up('fullhd')} { max-width: ${theme.breakpoints.fullhd}; }
  `}
`

const Container: FC = ({ children }) => {
  return <Section>
        {children}
    </Section>
}

export default Container
