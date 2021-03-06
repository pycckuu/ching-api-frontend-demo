// @flow

const COLOR = {
  CYAN: '#5EBAA0',
  WHITE: '#FFFFFF',
  LIGHTER_BLUE: '#EBECF5',
  LIGHT_BLUE: '#EDEFF6',
  BLUE: '#333963',
  YELLOW: '#FDC134',
  YELLOWISH_GREY: '#E7E4DE',
  GREY: '#C3C4CB',
  RED: '#FB525C',
  GREEN: '#3ECF8E',

  TRANSPARENT: 'transparent',

  TRANSLUCENT_BLACK: 'rgba(0, 0, 0, 0.25)',
  TRANSLUCENT_CYAN: 'rgba(94, 186, 160, 0.2)',

  COINBASE: '#0B36F0',
  STATUS: '#5B6DEE',
  TRUST: '#3375BB',
  GOOGLE: '#D94F3D',
  GITHUB: '#191717',
  FAKEBOOK: '#39579A',
}
export type ColorType = $Values<typeof COLOR>

const FONT_WEIGHT = {
  HAIRLINE: 100,
  LIGHTER: 200,
  LIGHT: 300,
  NORMAL: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  BOLDER: 800,
  BOLDEST: 900,
}

const FONT_LETTER_SPACING = {
  TINY: '-0.02em',
}

const FONT = {
  WEIGHT: FONT_WEIGHT,
  LETTER_SPACING: FONT_LETTER_SPACING,
}

const PRESETS = {
  ABSOLUTE_FILL: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
}

export default {
  COLOR,
  FONT,
  ...PRESETS,
}
