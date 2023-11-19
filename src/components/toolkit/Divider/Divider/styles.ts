import { IMargin } from '@services/types/Css'
import { applyMargin } from '@utils/functions/applyCss'
import styled from 'styled-components/native'

export type ContainerProps = IMargin

export const Container = styled.View<ContainerProps>`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
  ${props => applyMargin(props)}
`
