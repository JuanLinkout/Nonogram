import { IMargin } from '@services/types/Css'
import { applyMargin } from '@utils/functions/applyCss'
import styled from 'styled-components/native'

export type ContainerProps = IMargin

export const Container = styled.View<ContainerProps>`
  ${props => applyMargin(props)}
`
