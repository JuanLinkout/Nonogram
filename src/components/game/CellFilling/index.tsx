// External Libraries
import React from 'react'

// Components

// Styles
import { Container, ContainerProps } from './styles'

export const CellFilling: React.FC<ContainerProps> = ({ ...rest }) => {
  return <Container {...rest}></Container>
}
