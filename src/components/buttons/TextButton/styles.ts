import { IPadding, IMargin } from '@services/types/Css'
import { applyMargin, applyPadding } from '@utils/functions/applyCss'
import styled, { css } from 'styled-components/native'

export interface ContainerProps extends IPadding, IMargin {
  width?: string
  height?: string
  flex?: number
  alignSelf?: 'flex-start' | 'center' | 'flex-end'
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-self: ${({ alignSelf }) => alignSelf || 'flex-start'};

  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${props =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}
  ${props => applyMargin(props)};
  ${props => applyPadding(props)};
`

export const IconContainer = styled.View`
  margin-left: 8px;
`
