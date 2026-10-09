# go-web-starter-design-kit

Basic HTML element stories styled by [variables.css](variables.css) and
[elements.css](elements.css), with icons from [sprite.svg](sprite.svg).

## Storybook

Requires Node.js 20.19+ or 22.12+ and npm.

```sh
npm install
npm run storybook
```

Open http://localhost:6006 and select **Elements / Button**.

The Controls panel changes the label, solid/text/outline/icon variant, pinned
interaction state, native disabled state, and sprite icon. The icon-only variant
uses the label as its accessible name and tooltip, and defaults to the menu icon
when no icon is selected. Clicks are recorded in Storybook's Actions panel.

Use the theme toolbar to choose System, Light, or Dark. Hover, press, or tab to the
button to try native interactions, or select a pinned state in Controls. The
pseudo-state toolbar can also force CSS states. The pinned focus-visible example
supplies the browser's automatic outline style because the pseudo-state addon
only simulates authored CSS, not browser default styles.

The stories render real HTML buttons and apply the existing `data-text`,
`data-outline`, and `data-icon` attributes. Neither source stylesheet is changed.

To generate a static Storybook site:

```sh
npm run build-storybook
```

The generated site is written to `storybook-static/` (ignored by Git).
