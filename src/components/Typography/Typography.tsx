import styled, { css } from 'styled-components'
import { TypographyProps } from '../../types/typography'
import React, { AnchorHTMLAttributes, ComponentType, FC } from 'react'

export const Header1 = styled.h1<TypographyProps>`
  ${({ theme, inverted }) => css`
    color: ${theme?.typography?.header1?.[inverted ? 'inverted' : 'regular']?.color};
    font-size: ${theme?.typography?.header1?.[inverted ? 'inverted' : 'regular']?.fontSize};
    font-weight: ${theme?.typography?.header1?.[inverted ? 'inverted' : 'regular']?.fontWeight};
    text-decoration: ${theme?.typography?.header1?.[inverted ? 'inverted' : 'regular']?.textDecoration};
  `}
`

const linkcss = css<TypographyProps>`
  ${({ theme, inverted }) => css`
    color: ${theme?.typography?.link?.[inverted ? 'inverted' : 'regular']?.color};
    font-size: ${theme?.typography?.link?.[inverted ? 'inverted' : 'regular']?.fontSize};
    font-weight: ${theme?.typography?.link?.[inverted ? 'inverted' : 'regular']?.fontWeight};
    text-decoration: ${theme?.typography?.link?.[inverted ? 'inverted' : 'regular']?.textDecoration};
  `}
`

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
  component?: ComponentType
}
export const Link: FC<LinkProps> = ({ component, ...props }) => {
  if (component) {
    const Component = styled(component)`
      ${linkcss}
    `
    return <Component {...props} />
  }
  const Component = styled.a` 
    ${linkcss} 
  `
  return <Component {...props} />
}

export const Paragraph = styled.p<TypographyProps>`
  ${({ theme, inverted }) => css`
    flex-flow: row;

    color: ${theme?.typography?.paragraph?.[inverted ? 'inverted' : 'regular']?.color};
    font-size: ${theme?.typography?.paragraph?.[inverted ? 'inverted' : 'regular']?.fontSize};
    font-weight: ${theme?.typography?.paragraph?.[inverted ? 'inverted' : 'regular']?.fontWeight};
    text-decoration: ${theme?.typography?.paragraph?.[inverted ? 'inverted' : 'regular']?.textDecoration};
  `}
`
