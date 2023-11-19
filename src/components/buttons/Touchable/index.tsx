// External Libraries
import React, { PropsWithChildren } from 'react'
import { TouchableOpacityProps } from 'react-native'

// Components

// Styles
import { Container } from './styles'

type Props = TouchableOpacityProps

export const Touchable: React.FC<PropsWithChildren<Props>> = ({
  children,
  ...rest
}) => {
  return (
    <Container {...rest} activeOpacity={0.6}>
      {children}
    </Container>
  )
}
