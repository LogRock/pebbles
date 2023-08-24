# @LogRock/Pebbles

[![Coverage Status](https://coveralls.io/repos/github/LogRock/pebbles/badge.svg?branch=main)](https://coveralls.io/github/LogRock/pebbles?branch=main)

Welcome to our Component Library! This is an implementation of our Asphalt Design System.

Here are some useful links:

[Documentation/Storybook](https://logrock-pebbles.netlify.app/)

[NPMJS registry](https://www.npmjs.com/package/@logrock/pebbles)

About us: https://logrock.com

## Using this library:

This library is meant to be used in React projects. To use it, you will have to setup your prefered React environment and add a few other dependencies first:

```bash
# styled components
yarn add styled-components
yarn add styled-breakpoints
yarn add react-select
yarn add react-spring-bottom-sheet

# fonts
yarn add @fontsource/archivo

# icons
yarn add react-icons
```

Make the Archivo font available in your project by importing it

```js
import "@fontsource/archivo/400.css";
import "@fontsource/archivo/500.css";
import "@fontsource/archivo/600.css";
import "@fontsource/archivo/700.css";
import "@fontsource/archivo/800.css";
```

You can, alternatively, make it available as a Variable font if you want. The only requirement is having all weights from 400 to 800 available for the default theme to work best.

If you customize the theme by changing any of the fontFamily properties, make sure that the font you want to use is also made available, by exposing it in any ways you like (fontsource is the best!)

If you intend on using the Bottom sheet component, you will also need to import the styles for it:

```js
import "react-spring-bottom-sheet/dist/style.css";
```

Install this lib:

```bash
yarn add @logrock/pebbles
```

Now, wrap your app (or whatever components you plan on using this library at) with a styled-components' `ThemeProvider`, passing along a theme.

Also, this is a google place for the global icon configuration, using react-select's `IconContext.Provider` you can specify the global settings for the icons. This is optional but recommended.

```js
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@logrock/pebbles";

const MyApp = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <IconContext.Provider
        value={{
          style: {
            fontSize: lightTheme.icons.size,
            color: lightTheme.icons.color,
          },
        }}
      >
        <MyAppContent />
      </IconContext.Provider>
    </ThemeProvider>
  );
};
```

For your convenience, we currently provide a light and a dark theme that you can use and override as you see fit. Check out all it's options at [theme.ts](https://github.com/LogRock/pebbles/blob/main/lib/theme/light/theme.ts)

We also expose a `Theme` type if you use Typescript, autocomplete at will!

```ts
import { Theme } from "@logrock/pebbles";
```

And you are all set! From now on, just import and use any components you want. You can also access the theme variables using styled-components' own ThemeContext anywhere (and also as a theme prop in your custom styled components)

## Contributing

Thank you for your interest, check out [CONTRIBUTING.md](CONTRIBUTING.md) for more info.
