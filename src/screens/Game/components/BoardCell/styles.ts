import { theme } from '@global/theme'
import { EnumCellFill } from '@services/types/Game/Board'
import { View } from 'react-native'
import { ViewProps } from 'react-native'
import styled from 'styled-components/native'

export interface CellProps extends ViewProps {
  filled: EnumCellFill
  size: number
  row: number
  column: number
}

export const CellTouchable = styled(View)<CellProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  justify-content: center;
  align-items: center;

  border-right-width: 1px;
  border-bottom-width: 1px;

  border-right-color: ${({ column }) =>
    column % 5 === 0 ? theme.colors.black : theme.colors.darkBorder};
  border-bottom-color: ${({ row }) =>
    row % 5 === 0 ? theme.colors.black : theme.colors.darkBorder};
  ${({ filled }) =>
    filled === EnumCellFill.FILLED && {
      backgroundColor: theme.colors.black
    }}
`
