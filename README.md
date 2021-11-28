# LogRock Pebbles

> Small UI building blocks

## Usage

Pre requisites:

1. install [styled-components](https://styled-components.com/docs/basics#installation).
2. install [styled-breakpoints](https://www.npmjs.com/package/styled-breakpoints)

Install from NPM

```console
# With Yarn
yarn add @logrock/pebbles

# With the other bad one
npm install @logrock/pebbles
```

Import components from it

```javascript
import { NavBar } from "@logrock/pebbles";
```

## Theming

This lib requires styled-components theming to work properly. Just pass a Theme object and you are good to go.

A `Theme` type is also exposed to guide you, you can also see its source code [here](https://github.com/LogRock/pebbles/blob/main/src/types/theme.ts)

```javascript
import { ThemeProvider } from 'styled-components'
import { Theme } from '@logrock/pebbles'

const myTheme: Theme = {
    navbar: {
        background: #ff0000
    }
}

const MyNavbar = () => (
    <ThemeProvider theme={myTheme}>
        <NavBar />
    </ThemeProvider>
)
```
