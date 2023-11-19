import { IMargin, IPadding } from '@services/types/Css'
import {
  IEllipsizeMode,
  ITextAlign,
  ITextDecorationLine,
  ITypographyTheme
} from './types'
import styled from 'styled-components/native'
import { applyMargin, applyPadding } from '@utils/functions/applyCss'

export interface StyledTextProps extends IMargin, IPadding {
  variant?: ITypographyTheme

  align?: ITextAlign
  textDecorationLine?: ITextDecorationLine

  color?: string
  size?: string
  weight?: number
  fontFamily?: string
  letterSpacing?: string
  lineHeight?: string
  numberOfLines?: number
  ellipsizeMode?: IEllipsizeMode

  backgroundColor?: string
  maxWidth?: string
  display?: string
}

export const StyledText = styled.Text<StyledTextProps>`
  ${({ align }) => (align ? { textAlign: align } : {})};
  ${({ fontFamily }) => (fontFamily ? { fontFamily } : {})};
  ${({ letterSpacing }) => (letterSpacing ? { letterSpacing } : {})};
  ${({ textDecorationLine }) =>
    textDecorationLine ? { textDecorationLine } : {}};
  ${({ backgroundColor }) => (backgroundColor ? { backgroundColor } : {})};
  ${({ lineHeight }) => (lineHeight ? { lineHeight } : {})};
  ${({ maxWidth }) => (maxWidth ? { maxWidth } : {})};

  color: ${({ color }) => color || 'black'};
  font-size: ${({ size }) => size || '16px'};
  font-weight: ${({ weight }) => weight || 400};
  display: ${({ display }) => display || 'flex'};

  ${props => applyMargin(props)};
  ${props => applyPadding(props)};
`
