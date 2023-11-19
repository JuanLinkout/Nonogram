// External Libraries
import theme from '@global/theme'
import React from 'react'
import { MaterialIndicator } from 'react-native-indicators'

// Components

// Styles
import { Container, ContainerProps } from './styles'

interface Props extends ContainerProps {
  size?: number
  color?: string
}

export const Loader: React.FC<Props> = ({ size = 18, color, ...rest }) => {
  // States

  return (
    <Container {...rest}>
      <MaterialIndicator size={size} color={color || theme.colors.white} />
    </Container>
  )
}
