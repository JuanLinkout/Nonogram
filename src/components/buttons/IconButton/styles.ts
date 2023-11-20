import { IMargin } from '@services/types/Css'
import { applyMargin } from '@utils/functions/applyCss'
import styled from 'styled-components/native'

export interface ContainerProps extends IMargin {
  width?: string
  height?: string
  disabled?: boolean
  backgroundColor?: string

  borderRadius?: string
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: ${({ width }) => width || '40px'};
  height: ${({ height }) => height || '40px'};
  opacity: ${({ disabled }) => (disabled ? '0.2' : '1')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'transparent'};
  justify-content: center;
  align-items: center;
  border-radius: ${({ borderRadius }) => borderRadius || 0};

  ${props => applyMargin(props)};
`
