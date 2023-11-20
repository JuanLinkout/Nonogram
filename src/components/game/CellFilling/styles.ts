import styled from 'styled-components/native'

export interface ContainerProps {
  width?: string
  height?: string
}

export const Container = styled.View<ContainerProps>`
  width: ${({ width }) => width || '16px'};
  height: ${({ height }) => height || '16px'};
  background-color: ${({ theme }) => theme.colors.black};
`
