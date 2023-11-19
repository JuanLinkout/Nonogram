// External Libraries
import React from 'react'

// Components

// Styles
import { Container, ContainerProps } from './styles'

type Props = ContainerProps

export const Divider: React.FC<Props> = ({ ...rest }) => {
  return <Container {...rest} />
}
