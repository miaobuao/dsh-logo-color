/**
 * Host half of the logo color bundle.
 *
 * The preference lives in this plugin's own Config so the settings service can
 * project it into a durable namespace and the user-settings document, exactly
 * like the locale and theme plugins store their preferences. The Client half
 * reads and writes that namespace through `ctx.configForms`; this half only
 * declares the field and marks it volatile so the settings form may edit it.
 */
import z from '@deepseek-ai/schemastery'

/** Field carrying the selected logo color; `auto` keeps the shipped mark. */
const COLOR_FIELD = 'color'

/** Accepted values: the shipped mark, or one opaque sRGB hex color. */
const COLOR_PATTERN = /^(?:auto|#[0-9A-Fa-f]{6})$/u

/** Durable logo color preference. */
export const Config = z.object({
  [COLOR_FIELD]: z.string().pattern(COLOR_PATTERN).default('auto').volatile(),
})

/**
 * Own the settings namespace for the color field.
 * @param ctx Host plugin context.
 */
export function apply(ctx) {
  ctx.inject(['settings'], (child) => {
    child.effect(() => child.settings.configure({ auto: false }, ctx.fiber))
  })
}
