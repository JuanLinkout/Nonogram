// External Libraries
import React from 'react'

// Components

// Styles
import { Container, ContainerProps } from './styles'

interface Props extends ContainerProps {
  icon?: JSX.Element
  onPress?: () => void
  onLongPress?: () => void
}

export const IconButton: React.FC<Props> = ({
  width,
  height,
  icon,
  disabled,
  onPress,
  onLongPress,
  ...rest
}) => {
  return (
    <Container
      width={width}
      height={height}
      disabled={disabled}
      onPress={disabled ? undefined : onPress}
      onLongPress={disabled ? undefined : onLongPress}
      activeOpacity={0.6}
      {...rest}
    >
      {icon}
    </Container>
  )
}
