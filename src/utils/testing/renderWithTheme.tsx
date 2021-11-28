import { render, RenderOptions } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './themeMock'

const renderWithTheme = (ui: ReactElement, options?: RenderOptions) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options)
}

export default renderWithTheme
