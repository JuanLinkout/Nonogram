import { TypographyTheme } from './theme'
export type ITextAlign = 'left' | 'center' | 'right'
export type ITextDecorationLine =
  | 'none'
  | 'underline'
  | 'line-through'
  | 'underline line-through'
export type IEllipsizeMode = 'head' | 'middle' | 'tail' | 'clip'

export type ITypographyTheme = keyof typeof TypographyTheme
