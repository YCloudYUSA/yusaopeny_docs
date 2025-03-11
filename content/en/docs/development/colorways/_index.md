---
title: Colorways
description: What goes into making the selectable colorways in Layout Builder.
---

## CSS Variables

### Base Variables

We start by defining a base set of colors based on the "Y Color Wheel and Neighbored Color Zones" from the "Websites & Platforms Style Guide", available in the [YMCA Brand Resource Center](https://theybrand.org/). These colors are used to create the color palettes available in the Layout Builder.

![A color wheel with labels corresponding to the official YMCA colors.](colorways--colorwheel.png)

> **Note:** RGB variable values are not complete color definitions and must be wrapped in `rgb{a}()`, like `background-color: rgb(var(--ylb-color-rgb-red-dark), 0.5);`. This allows you to control the opacity of the color.

```scss
:root {
    --ylb-color-red-dark: {{< color "#a92b31" >}};
    --ylb-color-rgb-red-dark: {{< color 169 43 49 >}};
    --ylb-color-red: {{< color "#ed1c24" >}};
    --ylb-color-rgb-red: {{< color 237 28 36 >}};
    --ylb-color-red-light: {{< color "#f15922" >}};
    --ylb-color-rgb-red-light: {{< color 241 89 34 >}};
    --ylb-color-orange-dark: {{< color "#dd5828" >}};
    --ylb-color-rgb-orange-dark: {{< color 221 88 40 >}};
    --ylb-color-orange: {{< color "#f47920" >}};
    --ylb-color-rgb-orange: {{< color 244 121 32 >}};
    --ylb-color-orange-light: {{< color "#fcaf17" >}};
    --ylb-color-rgb-orange-light: {{< color 252 175 23 >}};
    --ylb-color-green-dark: {{< color "#006b6b" >}};
    --ylb-color-rgb-green-dark: {{< color 0 107 107 >}};
    --ylb-color-green: {{< color "#01a490" >}};
    --ylb-color-rgb-green: {{< color 1 164 144 >}};
    --ylb-color-green-light: {{< color "#20bdbe" >}};
    --ylb-color-rgb-green-light: {{< color 32 189 190 >}};
    --ylb-color-blue-dark: {{< color "#0060af" >}};
    --ylb-color-rgb-blue-dark: {{< color 0 96 175 >}};
    --ylb-color-blue: {{< color "#0089d0" >}};
    --ylb-color-rgb-blue: {{< color 0 137 208 >}};
    --ylb-color-blue-light: {{< color "#00aeef" >}};
    --ylb-color-rgb-blue-light: {{< color 0 174 239 >}};
    --ylb-color-purple-dark: {{< color "#5c2e91" >}};
    --ylb-color-rgb-purple-dark: {{< color 92 46 145 >}};
    --ylb-color-purple: {{< color "#92278f" >}};
    --ylb-color-rgb-purple: {{< color 146 39 143 >}};
    --ylb-color-purple-light: {{< color "#c6168d" >}};
    --ylb-color-rgb-purple-light: {{< color 198 22 141 >}};
    --ylb-color-white: {{< color "#FFFFFF" >}};
    --ylb-color-rgb-white: {{< color 255 255 255 >}};
    --ylb-color-light-grey-1: {{< color "#f2f2f2" >}};
    --ylb-color-rgb-light-grey-1: {{< color 242 242 242 >}};
    --ylb-color-light-grey-2: {{< color "#e7e7e7" >}};
    --ylb-color-rgb-light-grey-2: {{< color 231 231 231 >}};
    --ylb-color-light-grey-3: {{< color "#cccccc" >}};
    --ylb-color-rgb-light-grey-3: {{< color 204 204 204 >}};
    --ylb-color-grey-1: {{< color "#636466" >}};
    --ylb-color-rgb-grey-1: {{< color 99 100 102 >}};
    --ylb-color-grey-2: {{< color "#4F4F4F" >}};
    --ylb-color-rgb-grey-2: {{< color 79 79 79 >}};
    --ylb-color-grey-3: {{< color "#3F4042" >}};
    --ylb-color-rgb-grey-3: {{< color 63 64 66 >}};
    --ylb-color-dark-grey-1: {{< color "#2F2F2F" >}};
    --ylb-color-rgb-dark-grey-1: {{< color 47 47 47 >}};
    --ylb-color-dark-grey-2: {{< color "#231F20" >}};
    --ylb-color-rgb-dark-grey-2: {{< color 35 31 32 >}};
    --ylb-color-black: {{< color "#000000" >}};
    --ylb-color-rgb-black: {{< color 0 0 0 >}};
}
```

### Colorway Variables

Each colorway is built upon four core colors derived from the base color palette:

- `PrimaryColor`: The main color for the colorway.
- `SecondaryColor`: A complementary color to the primary.
- `TertiaryColor`: Another complementary color, providing additional visual interest.
- `PartnerColor`:  A contrasting color, often used for buttons and calls to action.

These four colors are used to style the majority of page elements. Each variable is prefixed with `ws` to denote "Website Services". RGB versions of these colors are also provided for use with `rgba()` styles.

In addition to the main colors, five more variables are used to define the YMCA logo gradients:

- `LogoChevronDark`
- `LogoChevronMid`
- `LogoChevronLight`
- `LogoTriangleDark`
- `LogoTriangleLight`

> **Important:** These `Logo` variables should **only** be used for styling the YMCA logo.  They are not intended for use in other page components. The Canadian Y logo does not change colors, and therefore these extra colors are not needed for Canadian colorways.

Here's a complete list of the colorway variables:

```css
--wsPrimaryColor
--wsPrimaryColorRGB
--wsSecondaryColor
--wsSecondaryColorRGB
--wsTertiaryColor
--wsTertiaryColorRGB
--wsPartnerColor
--wsPartnerColorRGB
--wsLogoChevronDark
--wsLogoChevronMid
--wsLogoChevronLight
--wsLogoTriangleDark
--wsLogoTriangleLight
```

These variables are typically defined by referencing the base color variables.  Here's an example of a complete colorway definition:

```scss
:root {
  --wsPrimaryColor: var(--ylb-color-blue-dark);
  --wsPrimaryColorRGB: var(--ylb-color-rgb-blue-dark);
  --wsSecondaryColor: var(--ylb-color-blue);
  --wsSecondaryColorRGB: var(--ylb-color-rgb-blue);
  --wsTertiaryColor: var(--ylb-color-blue-light);
  --wsTertiaryColorRGB: var(--ylb-color-rgb-blue-light);
  --wsPartnerColor: var(--ylb-color-purple-dark);
  --wsPartnerColorRGB: var(--ylb-color-rgb-purple-dark);
  --wsLogoChevronDark: var(--ylb-color-blue-dark);
  --wsLogoChevronMid: var(--ylb-color-blue);
  --wsLogoChevronLight: var(--ylb-color-blue-light);
  --wsLogoTriangleDark: var(--ylb-color-purple-dark);
  --wsLogoTriangleLight: var(--ylb-color-purple-light);
}
```

## Logo Colors

To ensure consistency and minimize code duplication, the YMCA logo is divided into six distinct sections, each styled individually:

- `the`
- `chevron`
- `ymca`
- `triangle`
- `registeredtm`
- `areas-of-impact`

The `chevron` and `triangle` sections use `radialGradient` elements, taking advantage of the `wsLogo` variables mentioned above. The other sections are styled using the standard colorway variables. Each section is a `path` element with a unique `id` and a color defined using the `fill` property.

![The YMCA logo with labels corresponding to the colors used in each component as described in text below.](colorways--logo-breakdown.png)

- `#logo-the` uses `--wsSecondaryColor`
- `#logo-chevron` uses a gradient composed of (from top to bottom) `--wsLogoChevronLight`, `--wsLogoChevronMid`, and `--wsLogoChevronDark`
- `#logo-ymca` uses `--wsPartnerColor`
- `#logo-triangle` uses a gradient composed of (from left to right) `--wsLogoTriangleLight` and `--wsLogoTriangleDark`
- `#logo-registeredtm` uses `--wsPartnerColor`
- `#logo-areas-of-interest` uses `--wsSecondaryColor`

## Y Styles

Each "Y Styles" option activates a specific CSS library, as defined in [`y_lb.ws_style_option.yml`](https://github.com/YCloudYUSA/y_lb/blob/main/y_lb.ws_style_option.yml). These libraries can be overridden by a custom theme, allowing for further customization (see the [Drupal documentation on Overriding Theme Functions](https://www.drupal.org/node/2497313) for details).
