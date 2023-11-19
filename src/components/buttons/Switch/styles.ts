// Estilização
import styled from 'styled-components/native'

interface ContainerProps {
  marginTop?: string
  marginRight?: string
  marginBottom?: string
  marginLeft?: string
  borderRadius?: string
  borderWitdh?: string
  borderColors?: string
}

export const Container = styled.View<ContainerProps>`
  margin-top: ${props => props.marginTop || '0px'};
  margin-right: ${props => props.marginRight || '0px'};
  margin-bottom: ${props => props.marginBottom || '0px'};
  margin-left: ${props => props.marginLeft || '0px'};

  flex-direction: row;
  align-items: center;
`
