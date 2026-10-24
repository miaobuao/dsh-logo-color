# Logo Color

Recolors the DeepSeek logo in the DeepSeek Harness Web UI. The plugin's page in
the Web Plugin Center (**Settings → Plugins → Logo Color**) offers a set of
high-contrast presets plus a custom color picker. One color applies to:

- the sidebar brand mark (expanded row and collapsed rail),
- the mark before the blank-session headline,
- the browser tab icon (both the light and dark favicon links).

`Theme default` keeps the shipped mark: black in the light theme, white in the
dark theme. Any other choice paints the fish path with that exact color in both
themes; the tab icon uses the same color for both `prefers-color-scheme`
variants.

## Install

Install the published bundle into the profile that should show it:

```
plugin_manager  action: install_bundle  target: dsh-logo-color
```

or, in the Web Plugin Center, add it by package name. The picker lives on the
plugin's own page under Settings → Plugins.

## How it works

- `index.js` declares a single volatile Config field (`color`: `auto` or
  `#RRGGBB`) and exposes it to the settings document with
  `settings.configure({ auto: false })`, so this plugin can own its page while
  the value persists through the profile's user-settings layer.
- `client.js` reads and writes that namespace through `ctx.configForms`. When
  the value is not `auto` it shadow-registers the two brand-mark slots
  (`sidebar.brand.mark` at priority `-1`, `conversation.hero.brand.mark`) with a
  static copy of the shipped fish path painted in the chosen color, and swaps
  the tab icon `href` to a data-URL SVG. Restoring `auto` disposes both, which
  returns the shipped mark and its hover animation unchanged.

The fish geometry (`viewBox 0 0 23.16 17.04`) matches the shipped
`FishLogo` primitive, so the mark keeps its size and alignment.

## Notes

The fish glyph path is the DeepSeek Harness brand mark shipped in the
MIT-licensed `@deepseek-ai/dsh-client-ui-primitives` package and is reused here
only so the mark can be repainted. The DeepSeek name and logo are trademarks of
DeepSeek; this community plugin is not affiliated with DeepSeek.
