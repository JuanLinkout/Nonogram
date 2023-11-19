// External Libraries
import React, { useMemo } from 'react'
import { TextProps } from 'react-native'

// Styles
import { TypographyTheme } from './theme'
import { StyledText, StyledTextProps } from './styles'

interface Props
  extends Omit<TextProps, 'accessibilityRole'>,
    Omit<StyledTextProps, 'color' | 'size' | 'weight'> {
  color?: string
  size?: string
  weight?: number
}

export const Typography: React.FC<Props> = ({ children, variant, ...rest }) => {
  // Constants
  const safeVariant = useMemo(() => variant || 'h1', [variant])

  return (
    <StyledText {...TypographyTheme[safeVariant]} {...rest}>
      {children}
    </StyledText>
  )
}
