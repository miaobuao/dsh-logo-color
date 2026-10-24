/**
 * Browser half of the logo color bundle.
 *
 * Contributes the color picker to this bundle's own page in the Web Plugin
 * Center and owns the actual recoloring:
 *
 * - The durable value lives in this plugin's Config and is reached through the
 *   settings domain's `ctx.configForms` service (`logo-color` namespace, one
 *   `color` field holding `auto` or `#RRGGBB`).
 * - While the value is not `auto`, the two brand-mark slots are shadow
 *   registered with the shipped fish path painted in that color, and every
 *   `<link rel="icon">` in the document head is pointed at a data-URL SVG of
 *   the same color. Restoring `auto` disposes both, so the shipped mark and its
 *   hero hover animation come back untouched.
 *
 * The fish geometry is the shipped `FishLogo` view box, so a recolored mark
 * keeps the exact size and alignment of the original.
 */
window.__ModuleLoader__.load({
  id: 'dsh-logo-color',
  factory(require) {
    const React = require('react')
    const h = React.createElement

    /** Package name used by the Plugin Center page to identify its own subject. */
    const PACKAGE_NAME = 'dsh-logo-color'
    /** Host plugin entry id, which is also this plugin's settings namespace. */
    const ENTRY_ID = 'logo-color'
    /** Locale namespace owned by this plugin. */
    const NS = 'logoColor'
    /** Config field carrying the selection. */
    const COLOR_FIELD = 'color'
    /** Value that leaves the shipped mark untouched. */
    const AUTO = 'auto'
    /** Shipped fish geometry (the `FishLogo` primitive). */
    const LOGO_WIDTH = 23.16
    const LOGO_HEIGHT = 17.04
    /** Shipped fish path, kept verbatim so a recolored mark has the same shape. */
    const FISH_PATH = 'M22.9168 1.43018C22.6713 1.31018 22.5658 1.53918 22.4223 1.65519C22.3733 1.69269 22.3318 1.74169 22.2903 1.78669C21.9317 2.1697 21.5127 2.42121 20.9657 2.39121C20.1657 2.34621 19.4827 2.59771 18.8787 3.20973C18.7502 2.45521 18.3236 2.0047 17.6746 1.71569C17.3351 1.56568 16.9916 1.41518 16.7536 1.08867C16.5876 0.856163 16.5421 0.597155 16.4591 0.341647C16.4061 0.187643 16.3536 0.0301382 16.1761 0.00363739C15.9836 -0.0263635 15.9081 0.135141 15.8326 0.270145C15.5306 0.822162 15.4136 1.43018 15.4251 2.0462C15.4516 3.43174 16.0366 4.53527 17.1991 5.3203C17.3311 5.4103 17.3651 5.5003 17.3236 5.63181C17.2441 5.90231 17.1501 6.16482 17.0671 6.43533C17.0141 6.60784 16.9351 6.64584 16.7501 6.57033C16.1121 6.30383 15.5611 5.90931 15.074 5.4328C14.2475 4.63328 13.5 3.75075 12.568 3.05973C12.349 2.89822 12.13 2.74822 11.9034 2.60522C10.9524 1.68169 12.028 0.923165 12.277 0.833162C12.5375 0.739159 12.3675 0.41615 11.5259 0.42015C10.6844 0.42365 9.91439 0.705658 8.93286 1.08117C8.78935 1.13767 8.63835 1.17867 8.48384 1.21267C7.59332 1.04367 6.66829 1.00617 5.70226 1.11517C3.88321 1.31768 2.43016 2.1777 1.36213 3.64575C0.0790928 5.4103 -0.222916 7.41536 0.146595 9.50642C0.535106 11.7105 1.66014 13.535 3.38869 14.9616C5.18125 16.4406 7.24581 17.1657 9.60138 17.0266C11.0319 16.9441 12.6245 16.7526 14.421 15.2321C14.874 15.4576 15.3496 15.5476 16.1381 15.6151C16.7456 15.6716 17.3306 15.5851 17.7836 15.4911C18.4931 15.3411 18.4441 14.6841 18.1876 14.5636C16.1081 13.595 16.5646 13.9891 16.1496 13.67C17.2061 12.42 18.8202 10.1979 19.3182 7.17235C19.3672 6.83834 19.4297 6.36783 19.4222 6.09732C19.4182 5.93231 19.4562 5.86831 19.6447 5.84931C20.1657 5.78931 20.6712 5.64681 21.1357 5.3913C22.4833 4.65528 23.0268 3.44624 23.1548 1.9972C23.1738 1.77569 23.1508 1.54668 22.9168 1.43018ZM11.1749 14.4736C9.15936 12.889 8.18184 12.3675 7.77832 12.39C7.40081 12.4125 7.46881 12.8445 7.55182 13.126C7.63882 13.404 7.75182 13.5955 7.91033 13.8396C8.01983 14.0011 8.09533 14.2411 7.80083 14.4216C7.15181 14.8231 6.02327 14.2866 5.97027 14.2601C4.65673 13.4865 3.5587 12.4655 2.78467 11.069C2.03715 9.72493 1.60314 8.28289 1.53164 6.74384C1.51264 6.37233 1.62214 6.24082 1.99215 6.17332C2.47916 6.08332 2.98118 6.06432 3.46769 6.13582C5.52476 6.43633 7.27581 7.35586 8.74385 8.8129C9.58188 9.64243 10.2159 10.634 10.8689 11.6025C11.5634 12.631 12.3105 13.611 13.262 14.4146C13.598 14.6961 13.866 14.9101 14.1225 15.0681C13.349 15.1546 12.058 15.1731 11.1749 14.4746L11.1749 14.4736ZM12.141 8.25988C12.141 8.09488 12.273 7.96338 12.439 7.96338C12.4765 7.96338 12.5105 7.97088 12.541 7.98188C12.5825 7.99688 12.6205 8.01938 12.6505 8.05338C12.7035 8.10588 12.7335 8.18088 12.7335 8.25988C12.7335 8.42489 12.6015 8.55639 12.4355 8.55639C12.2695 8.55639 12.141 8.42489 12.141 8.25988ZM15.1415 9.79893C14.949 9.87793 14.7565 9.94544 14.5715 9.95294C14.2845 9.96794 13.9715 9.85143 13.8015 9.70893C13.5375 9.48742 13.3485 9.36342 13.2695 8.97691C13.2355 8.8119 13.2545 8.55639 13.2845 8.40989C13.3525 8.09438 13.277 7.89187 13.0545 7.70787C12.8735 7.55786 12.643 7.51636 12.39 7.51636C12.2955 7.51636 12.209 7.47486 12.1445 7.44136C12.039 7.38886 11.9519 7.25735 12.035 7.09585C12.0615 7.04335 12.19 6.91584 12.22 6.89334C12.5635 6.69784 12.9595 6.76184 13.326 6.90834C13.6655 7.04735 13.9225 7.30236 14.292 7.66287C14.6695 8.09838 14.7375 8.21838 14.9525 8.54539C15.1225 8.8009 15.277 9.06341 15.3831 9.36392C15.4471 9.55142 15.3641 9.70493 15.1415 9.79893Z'
    /** Shipped 50x50 favicon path. */
    const FAVICON_PATH = 'M48.8354 10.0479C48.3232 9.79199 48.1025 10.2798 47.8032 10.5278C47.7007 10.6079 47.6143 10.7119 47.5273 10.8076C46.7793 11.624 45.9048 12.1597 44.7622 12.0957C43.0923 12 41.666 12.5356 40.4058 13.8398C40.1377 12.2319 39.2476 11.272 37.8926 10.6558C37.1836 10.3359 36.4668 10.0156 35.9702 9.31982C35.6235 8.82373 35.5293 8.27197 35.356 7.72754C35.2456 7.3999 35.1353 7.06396 34.7651 7.00781C34.3633 6.94385 34.2056 7.2876 34.0479 7.57568C33.418 8.75195 33.1733 10.0479 33.1973 11.3599C33.2524 14.312 34.4736 16.6641 36.8999 18.3359C37.1758 18.5278 37.2466 18.7197 37.1597 19C36.9946 19.5757 36.7974 20.1357 36.624 20.7119C36.5137 21.0801 36.3486 21.1597 35.9624 21C34.6309 20.4321 33.481 19.5918 32.4644 18.5757C30.7393 16.8721 29.1792 14.9917 27.2334 13.52C26.7764 13.1758 26.3193 12.856 25.8467 12.5518C23.8618 10.584 26.1069 8.96777 26.627 8.77588C27.1704 8.57568 26.8159 7.8877 25.0591 7.896C23.3022 7.90381 21.6953 8.50391 19.647 9.30371C19.3477 9.42383 19.0322 9.51172 18.7095 9.58398C16.8501 9.22363 14.9199 9.14355 12.9033 9.37598C9.10596 9.80762 6.07275 11.6396 3.84326 14.7681C1.16455 18.5278 0.53418 22.7998 1.30664 27.2559C2.11768 31.9521 4.46582 35.8398 8.07373 38.8799C11.8159 42.0322 16.1255 43.5762 21.041 43.2803C24.0269 43.104 27.3516 42.6963 31.1016 39.4561C32.0469 39.936 33.0396 40.1279 34.686 40.272C35.9546 40.3921 37.1758 40.208 38.1211 40.0078C39.6021 39.688 39.4995 38.2881 38.9639 38.0322C34.623 35.9678 35.5762 36.8081 34.71 36.1279C36.9155 33.4639 40.2402 30.6958 41.54 21.728C41.6426 21.0161 41.5557 20.5679 41.54 19.9917C41.5322 19.6396 41.6108 19.5039 42.0049 19.4639C43.0923 19.3359 44.1479 19.0317 45.1167 18.4878C47.9292 16.9199 49.064 14.3438 49.3315 11.2559C49.3711 10.7837 49.3237 10.2959 48.8354 10.0479ZM24.3262 37.8398C20.1196 34.4639 18.0791 33.3521 17.2358 33.3999C16.4482 33.4482 16.5898 34.3682 16.7632 34.9678C16.9443 35.5601 17.1812 35.9683 17.5117 36.4878C17.7402 36.832 17.8979 37.3442 17.2832 37.728C15.9282 38.584 13.5728 37.4399 13.4624 37.3838C10.7207 35.7358 8.42822 33.5601 6.81348 30.584C5.25342 27.7197 4.34766 24.6479 4.19775 21.3677C4.1582 20.5757 4.38672 20.2959 5.15869 20.1519C6.17529 19.96 7.22314 19.9199 8.23926 20.0718C12.5327 20.7119 16.1885 22.6719 19.2529 25.7759C21.002 27.5439 22.3252 29.6558 23.6885 31.7202C25.1377 33.9121 26.6978 36 28.6831 37.7119C29.3843 38.312 29.9434 38.7681 30.479 39.104C28.8643 39.2881 26.1699 39.3281 24.3262 37.8398ZM26.3433 24.6001C26.3433 24.248 26.6191 23.9678 26.9658 23.9678C27.0444 23.9678 27.1152 23.9839 27.1782 24.0078C27.2651 24.04 27.3438 24.0879 27.4067 24.1602C27.5171 24.272 27.5801 24.4321 27.5801 24.6001C27.5801 24.9521 27.3042 25.2319 26.9575 25.2319C26.6108 25.2319 26.3433 24.9521 26.3433 24.6001ZM32.6064 27.8799C32.2046 28.0479 31.8027 28.1919 31.4165 28.208C30.8179 28.2397 30.1641 27.9922 29.8096 27.688C29.2583 27.2158 28.8643 26.9521 28.6987 26.1279C28.6279 25.7759 28.6675 25.2319 28.7305 24.9199C28.8721 24.248 28.7144 23.8159 28.2495 23.4238C27.8716 23.104 27.3911 23.0161 26.8633 23.0161C26.666 23.0161 26.4849 22.9277 26.3511 22.856C26.1304 22.7441 25.9492 22.4639 26.1226 22.1201C26.1777 22.0078 26.4458 21.7358 26.5088 21.688C27.2256 21.272 28.0527 21.4077 28.8169 21.7197C29.5259 22.0161 30.0615 22.5601 30.834 23.3281C31.6216 24.2559 31.7632 24.5117 32.2124 25.208C32.5669 25.752 32.8901 26.312 33.1104 26.9521C33.2446 27.3521 33.0713 27.6802 32.6064 27.8799Z'
    /** One opaque sRGB hex color. */
    const HEX_PATTERN = /^#[0-9A-Fa-f]{6}$/u

    /**
     * Preset colors chosen for high hue separation on both themes. `AUTO` stays
     * absent: the first chip renders it separately as "theme default".
     */
    const PRESETS = [
      { hex: '#4D6BFE', nameKey: 'presetBlue' },
      { hex: '#00B8D9', nameKey: 'presetCyan' },
      { hex: '#14B8A6', nameKey: 'presetTeal' },
      { hex: '#2E9E5B', nameKey: 'presetGreen' },
      { hex: '#E6A700', nameKey: 'presetAmber' },
      { hex: '#F04438', nameKey: 'presetCoral' },
      { hex: '#D6336C', nameKey: 'presetRose' },
      { hex: '#7C3AED', nameKey: 'presetViolet' },
      { hex: '#FFFFFF', nameKey: 'presetWhite' },
      { hex: '#111111', nameKey: 'presetBlack' }
    ]

    /** Simplified Chinese copy. */
    const zh = {
      sectionTitle: '图标颜色',
      sectionDescription: '把 Web 界面的 DeepSeek 图标换成你选的颜色：侧边栏品牌图标、新会话标题旁的图标和浏览器标签页图标会一起变色。',
      current: '当前颜色',
      auto: '跟随主题',
      autoHint: '浅色主题为黑色，深色主题为白色',
      presets: '预设颜色',
      custom: '自定义颜色',
      pickerAria: '打开调色盘',
      hexPlaceholder: '#4D6BFE',
      apply: '应用',
      reset: '恢复默认',
      saving: '保存中…',
      writeFailed: '保存失败',
      invalidHex: '请输入 #RRGGBB 格式的颜色',
      unavailable: '当前环境没有可用的设置服务，颜色无法保存。',
      loading: '正在读取颜色设置…',
      scopeNote: '颜色同时作用于侧边栏图标、新会话图标和浏览器标签页图标；浅色与深色主题使用同一色值。',
      presetBlue: '深寻蓝',
      presetCyan: '青色',
      presetTeal: '青绿',
      presetGreen: '翠绿',
      presetAmber: '琥珀',
      presetCoral: '珊瑚红',
      presetRose: '玫红',
      presetViolet: '紫罗兰',
      presetWhite: '纯白',
      presetBlack: '纯黑'
    }

    /** English copy. */
    const en = {
      sectionTitle: 'Logo color',
      sectionDescription: 'Recolor the DeepSeek logo across the Web UI: the sidebar brand mark, the mark beside the new-session headline, and the browser tab icon change together.',
      current: 'Current color',
      auto: 'Theme default',
      autoHint: 'black in the light theme, white in the dark theme',
      presets: 'Presets',
      custom: 'Custom color',
      pickerAria: 'Open the color picker',
      hexPlaceholder: '#4D6BFE',
      apply: 'Apply',
      reset: 'Reset',
      saving: 'Saving…',
      writeFailed: 'Save failed',
      invalidHex: 'Enter a color in #RRGGBB form',
      unavailable: 'The settings service is unavailable, so the color cannot be saved.',
      loading: 'Reading the color setting…',
      scopeNote: 'The color applies to the sidebar mark, the new-session mark, and the browser tab icon; both themes use the same value.',
      presetBlue: 'DeepSeek blue',
      presetCyan: 'Cyan',
      presetTeal: 'Teal',
      presetGreen: 'Green',
      presetAmber: 'Amber',
      presetCoral: 'Coral',
      presetRose: 'Rose',
      presetViolet: 'Violet',
      presetWhite: 'White',
      presetBlack: 'Black'
    }

    /** Shared card chrome, matching the surrounding Plugin Center page. */
    const sectionStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      padding: '16px',
      border: '1px solid var(--dsw-alias-border-l1)',
      borderRadius: '12px',
      background: 'var(--dsw-alias-bg-layer-1)'
    }
    const titleStyle = {
      margin: 0,
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '20px',
      color: 'var(--dsw-alias-label-primary)'
    }
    const textStyle = {
      margin: 0,
      fontSize: '12px',
      lineHeight: '18px',
      color: 'var(--dsw-alias-label-secondary)'
    }
    const groupStyle = { display: 'flex', flexDirection: 'column', gap: '8px' }
    const groupTitleStyle = {
      margin: 0,
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '18px',
      color: 'var(--dsw-alias-label-secondary)'
    }
    const buttonStyle = {
      padding: '4px 10px',
      border: '1px solid var(--dsw-alias-border-l2)',
      borderRadius: '6px',
      background: 'transparent',
      color: 'var(--dsw-alias-label-primary)',
      fontSize: '12px',
      lineHeight: '16px',
      font: 'inherit',
      cursor: 'pointer'
    }
    const inputStyle = {
      boxSizing: 'border-box',
      width: '96px',
      height: '28px',
      padding: '0 8px',
      border: '1px solid var(--dsw-alias-border-l2)',
      borderRadius: '6px',
      background: 'var(--dsw-alias-bg-layer-2)',
      color: 'var(--dsw-alias-label-primary)',
      font: 'inherit',
      fontSize: '12px',
      lineHeight: '16px'
    }
    const swatchRowStyle = { display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }
    const previewDotStyle = {
      width: '28px',
      height: '28px',
      borderRadius: '999px',
      border: '1px solid var(--dsw-alias-border-l2)',
      flex: '0 0 auto'
    }

    /** Human-readable message for an error value. */
    function messageOf(error) {
      if (error instanceof Error) return error.message
      return String(error)
    }

    /**
     * Normalize a wire color value.
     * @param value - stored value, possibly absent, `auto`, or a hex color.
     * @returns `auto` or an uppercase `#RRGGBB`; undefined for an invalid hex.
     */
    function normalizeColor(value) {
      if (value === undefined || value === null) return AUTO
      if (typeof value !== 'string') return undefined
      let text = value.trim()
      if (text === '' || text.toLowerCase() === AUTO) return AUTO
      if (!text.startsWith('#')) text = `#${text}`
      if (/^#[0-9A-Fa-f]{3}$/u.test(text)) {
        text = `#${text[1]}${text[1]}${text[2]}${text[2]}${text[3]}${text[3]}`
      }
      if (!HEX_PATTERN.test(text)) return undefined
      return text.toUpperCase()
    }

    /** The accepted color of one settings section. */
    function sectionColor(section) {
      const value = section !== null && typeof section === 'object' ? section[COLOR_FIELD] : undefined
      const color = normalizeColor(value)
      return color === undefined ? AUTO : color
    }

    /** The CSS color a preview should paint. */
    function previewColor(color) {
      return color === AUTO ? 'linear-gradient(135deg, #111 0 50%, #fff 50% 100%)' : color
    }

    /** A minimal snapshot store the brand-mark occupants and the section can bind. */
    function createStore(initial) {
      let snapshot = initial
      const listeners = new Set()
      return {
        getSnapshot() {
          return snapshot
        },
        subscribe(listener) {
          listeners.add(listener)
          return () => {
            listeners.delete(listener)
          }
        },
        set(next) {
          if (next === snapshot) return
          snapshot = next
          for (const listener of [...listeners]) listener()
        }
      }
    }

    /** Data-URL SVG of the shipped favicon painted in one color. */
    function faviconHref(color) {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><path d="${FAVICON_PATH}" fill="${color}"/></svg>`
      return `data:image/svg+xml,${encodeURIComponent(svg)}`
    }

    /** The color the recolored marks paint with (empty while `auto`). */
    const markStore = createStore({ color: AUTO })

    /**
     * Recolored brand mark. Fills the shipped fish path with the chosen color and
     * keeps the host-supplied size and class so layout and alignment do not move.
     */
    function BrandMark(props) {
      const snapshot = React.useSyncExternalStore(markStore.subscribe, markStore.getSnapshot)
      const size = typeof props.size === 'number' && props.size > 0 ? props.size : 24
      return h('svg', {
        width: size,
        height: (size * LOGO_HEIGHT) / LOGO_WIDTH,
        viewBox: `0 0 ${LOGO_WIDTH} ${LOGO_HEIGHT}`,
        className: props.className,
        fill: 'none',
        'aria-hidden': 'true'
      }, h('path', {
        d: FISH_PATH,
        fill: snapshot.color === AUTO ? 'currentColor' : snapshot.color
      }))
    }

    /**
     * Owns the recoloring side effects: shadow registrations for the two brand
     * marks, and the document favicon links. Nothing is touched while the value
     * is `auto`, so the shipped mark and the hero hover animation stay intact.
     */
    class BrandColorController {
      constructor(ctx, form) {
        this.ctx = ctx
        this.form = form
        this.color = undefined
        this.marks = []
        this.faviconRestore = null
        this.disposed = false
      }

      /** Subscribe to the durable value and reconcile the side effects. */
      start() {
        const off = this.form.subscribe(() => {
          this.sync()
        })
        this.sync()
        return () => {
          this.disposed = true
          off()
          this.dropMarks()
          this.restoreFavicon()
        }
      }

      /** Apply the current accepted color, if it changed. */
      sync() {
        if (this.disposed) return
        const color = sectionColor(this.form.getSnapshot().value)
        if (color === this.color) return
        this.color = color
        markStore.set({ color })
        if (color === AUTO) {
          this.dropMarks()
          this.restoreFavicon()
          return
        }
        this.ensureMarks()
        this.paintFavicon(color)
      }

      /** Shadow both brand marks once, at the priorities that win each single slot. */
      ensureMarks() {
        if (this.marks.length > 0 || typeof this.ctx.slots === 'undefined') return
        this.marks.push(this.ctx.slots.inject('sidebar.brand.mark', () => this.ctx.slots.register({
          name: 'sidebar.brand.mark',
          priority: -1
        }, BrandMark)))
        this.marks.push(this.ctx.slots.inject('conversation.hero.brand.mark', () => this.ctx.slots.register({
          name: 'conversation.hero.brand.mark'
        }, BrandMark)))
      }

      /** Dispose the mark registrations so the shipped occupants render again. */
      dropMarks() {
        for (const dispose of this.marks.splice(0)) {
          try {
            dispose()
          } catch {
            // A collapsed declaration already disposed its registration.
          }
        }
      }

      /** Point every tab icon at the recolored favicon, remembering the originals once. */
      paintFavicon(color) {
        if (typeof document === 'undefined') return
        if (this.faviconRestore === null) this.faviconRestore = captureFavicons()
        const href = faviconHref(color)
        for (const link of document.querySelectorAll('link[rel~="icon"]')) link.setAttribute('href', href)
      }

      /** Put the shipped tab icons back. */
      restoreFavicon() {
        if (this.faviconRestore === null) return
        const restore = this.faviconRestore
        this.faviconRestore = null
        restore()
      }
    }

    /**
     * Remember the shipped favicon links, adding one when the document declares
     * none; the returned function restores exactly that state.
     */
    function captureFavicons() {
      if (typeof document === 'undefined') return () => {}
      const originals = [...document.querySelectorAll('link[rel~="icon"]')].map((link) => ({
        link,
        href: link.getAttribute('href')
      }))
      if (originals.length > 0) {
        return () => {
          for (const { link, href } of originals) {
            if (href === null) link.removeAttribute('href')
            else link.setAttribute('href', href)
          }
        }
      }
      const link = document.createElement('link')
      link.setAttribute('rel', 'icon')
      link.setAttribute('type', 'image/svg+xml')
      document.head.appendChild(link)
      return () => {
        link.remove()
      }
    }

    /** One color chip; `auto` renders the theme-default split swatch. */
    function ColorChip(props) {
      const { color, label, selected, disabled, onSelect } = props
      return h('button', {
        type: 'button',
        title: label,
        'aria-label': label,
        'aria-pressed': selected,
        disabled,
        onClick: () => onSelect(color),
        style: {
          width: '30px',
          height: '30px',
          padding: 0,
          borderRadius: '999px',
          border: '1px solid var(--dsw-alias-border-l2)',
          background: previewColor(color),
          cursor: disabled ? 'default' : 'pointer',
          opacity: disabled ? 0.5 : 1,
          boxShadow: selected
            ? '0 0 0 2px var(--dsw-alias-bg-layer-1), 0 0 0 4px var(--dsw-alias-brand-primary)'
            : 'none'
        }
      })
    }

    /** The settings section this bundle contributes to its own Plugin Center page. */
    function LogoColorSection(props) {
      const t = typeof props.t === 'function' ? props.t : (key) => key
      const snapshot = React.useSyncExternalStore(props.subscribe, props.getSnapshot)
      const current = sectionColor(snapshot.value)
      const [hexDraft, setHexDraft] = React.useState(current === AUTO ? '' : current)
      const [busy, setBusy] = React.useState(false)
      const [error, setError] = React.useState(null)

      React.useEffect(() => {
        setHexDraft(current === AUTO ? '' : current)
      }, [current])

      const subject = props.subject
      const pkg = subject !== null && typeof subject === 'object' ? subject.pkg : undefined
      const ownBundle = pkg !== null && typeof pkg === 'object' && pkg.name === PACKAGE_NAME
      if (!ownBundle) return null

      const disabled = busy || snapshot.status === 'unavailable' || snapshot.writable === false

      /** Persist one selection and surface the Host's answer. */
      function commit(next) {
        if (next === current || disabled) return
        setError(null)
        setBusy(true)
        Promise.resolve(props.write(next)).then((accepted) => {
          setBusy(false)
          if (accepted !== true) setError(t('writeFailed'))
        }).catch((failure) => {
          setBusy(false)
          setError(`${t('writeFailed')}: ${messageOf(failure)}`)
        })
      }

      /** Apply the typed hex draft, or report the format. */
      function commitDraft() {
        const next = normalizeColor(hexDraft)
        if (next === undefined) {
          setError(t('invalidHex'))
          return
        }
        commit(next)
      }

      /** Restore the shipped mark by clearing the override. */
      function commitReset() {
        if (disabled) return
        setError(null)
        setBusy(true)
        Promise.resolve(props.reset()).then((accepted) => {
          setBusy(false)
          if (accepted !== true) setError(t('writeFailed'))
        }).catch((failure) => {
          setBusy(false)
          setError(`${t('writeFailed')}: ${messageOf(failure)}`)
        })
      }

      const body = []
      if (snapshot.status === 'unavailable') {
        body.push(h('p', { key: 'unavailable', style: { ...textStyle, color: 'var(--dsw-alias-state-error-primary)' }, role: 'alert' }, t('unavailable')))
      } else if (snapshot.status === 'loading' && snapshot.value === undefined) {
        body.push(h('p', { key: 'loading', style: textStyle, role: 'status' }, t('loading')))
      } else {
        body.push(h('div', { key: 'current', style: { display: 'flex', alignItems: 'center', gap: '10px' } }, [
          h('span', { key: 'dot', style: { ...previewDotStyle, background: previewColor(current) } }),
          h('span', { key: 'value', style: { display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 } }, [
            h('span', { key: 'label', style: { ...textStyle, color: 'var(--dsw-alias-label-primary)' } }, current === AUTO ? t('auto') : current),
            current === AUTO ? h('span', { key: 'hint', style: textStyle }, t('autoHint')) : null
          ]),
          h('button', {
            key: 'reset',
            type: 'button',
            style: { ...buttonStyle, marginLeft: 'auto' },
            disabled,
            onClick: commitReset
          }, t('reset'))
        ]))
        body.push(h('div', { key: 'presets', style: groupStyle }, [
          h('p', { key: 'title', style: groupTitleStyle }, t('presets')),
          h('div', { key: 'row', style: swatchRowStyle }, [
            h(ColorChip, {
              key: AUTO,
              color: AUTO,
              label: t('auto'),
              selected: current === AUTO,
              disabled,
              onSelect: commit
            }),
            ...PRESETS.map((preset) => h(ColorChip, {
              key: preset.hex,
              color: preset.hex,
              label: `${t(preset.nameKey)} ${preset.hex}`,
              selected: current === preset.hex,
              disabled,
              onSelect: commit
            }))
          ])
        ]))
        body.push(h('div', { key: 'custom', style: groupStyle }, [
          h('p', { key: 'title', style: groupTitleStyle }, t('custom')),
          h('div', { key: 'row', style: { display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' } }, [
            h('input', {
              key: 'picker',
              type: 'color',
              'aria-label': t('pickerAria'),
              title: t('pickerAria'),
              value: current === AUTO ? '#4D6BFE' : current,
              disabled,
              onChange: (event) => {
                const next = normalizeColor(event.target.value)
                if (next === undefined || next === AUTO) return
                setHexDraft(next)
                commit(next)
              },
              style: {
                width: '34px',
                height: '30px',
                padding: '2px',
                border: '1px solid var(--dsw-alias-border-l2)',
                borderRadius: '6px',
                background: 'var(--dsw-alias-bg-layer-2)',
                cursor: disabled ? 'default' : 'pointer'
              }
            }),
            h('input', {
              key: 'hex',
              type: 'text',
              value: hexDraft,
              placeholder: t('hexPlaceholder'),
              spellCheck: false,
              autoComplete: 'off',
              disabled,
              'aria-label': t('custom'),
              onChange: (event) => {
                setHexDraft(event.target.value)
              },
              onKeyDown: (event) => {
                if (event.key !== 'Enter') return
                event.preventDefault()
                commitDraft()
              },
              onBlur: () => {
                if (hexDraft.trim() === '') {
                  setHexDraft(current === AUTO ? '' : current)
                  return
                }
                commitDraft()
              },
              style: inputStyle
            }),
            h('button', {
              key: 'apply',
              type: 'button',
              style: buttonStyle,
              disabled,
              onClick: commitDraft
            }, t('apply')),
            busy ? h('span', { key: 'busy', style: textStyle, role: 'status' }, t('saving')) : null
          ])
        ]))
      }
      if (error !== null) {
        body.push(h('p', { key: 'error', style: { ...textStyle, color: 'var(--dsw-alias-state-error-primary)' }, role: 'alert' }, error))
      }
      body.push(h('p', { key: 'note', style: { ...textStyle, fontSize: '11px' } }, t('scopeNote')))

      return h('section', { style: sectionStyle, 'data-plugin-section': 'logo-color' }, [
        h('header', { key: 'header', style: { display: 'flex', flexDirection: 'column', gap: '4px' } }, [
          h('h4', { key: 'title', style: titleStyle }, t('sectionTitle')),
          h('p', { key: 'description', style: textStyle }, t('sectionDescription'))
        ]),
        h('div', { key: 'body', style: { display: 'flex', flexDirection: 'column', gap: '12px' } }, body)
      ])
    }

    return {
      inject: ['slots', 'locale'],
      apply(ctx) {
        ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'logo-color: dictionaries')
        // The settings domain owns the durable value, so a deployment without it
        // keeps this plugin dormant instead of failing the web boot. The
        // registers arrive and leave with the service, and the marks and tab icon
        // stay untouched whenever no durable value is reachable.
        ctx.inject(['configForms', 'slots'], (child) => {
          const form = child.configForms.get(ENTRY_ID)
          const controller = new BrandColorController(child, form)
          child.effect(() => controller.start(), 'logo-color: brand color side effects')
          const t = ctx.locale.bind(NS)
          child.slots.inject('plugins.detail.section', () => child.slots.register({
            name: 'plugins.detail.section',
            id: 'logo-color',
            order: 10,
            label: () => t('sectionTitle'),
            locale: NS,
            inject: () => ({
              subscribe: (listener) => form.subscribe(listener),
              getSnapshot: () => form.getSnapshot(),
              write: (value) => form.set(COLOR_FIELD, value),
              reset: () => form.unset(COLOR_FIELD)
            })
          }, LogoColorSection))
        })
      }
    }
  }
})
