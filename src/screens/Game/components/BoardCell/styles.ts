import { Touchable } from '@components/buttons/Touchable'
import { theme } from '@global/theme'
import { EnumCellFill } from '@services/types/Game/Board'
import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

export interface CellProps extends TouchableOpacityProps {
  filled: EnumCellFill
  size: number
  hasBottomBorder: boolean
  hasRightBorder: boolean
}

export const CellTouchable = styled(Touchable)<CellProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  border-right-width: ${({ hasRightBorder }) =>
    hasRightBorder ? '1px' : '0px'};
  border-bottom-width: ${({ hasBottomBorder }) =>
    hasBottomBorder ? '1px' : '0px'};

  border-right-color: ${({ hasRightBorder }) =>
    hasRightBorder && theme.colors.darkBorder};
  border-bottom-color: ${({ hasBottomBorder }) =>
    hasBottomBorder && theme.colors.darkBorder};
  ${({ filled }) =>
    filled === EnumCellFill.FILLED && { backgroundColor: theme.colors.black }}
`
