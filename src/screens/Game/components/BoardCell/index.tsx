// External Libraries
import React, { memo } from 'react'

// Styles
import { CellProps, CellTouchable } from './styles'
import { EnumCellFill } from '@services/types/Game/Board'
import { FlagSVG } from '@assets/icons/Flag'

const BoardCellComponent: React.FC<CellProps> = ({
  filled,
  size,
  hasBottomBorder,
  hasRightBorder,
  ...rest
}) => {
  return (
    <CellTouchable
      size={size}
      filled={filled}
      hasBottomBorder={hasBottomBorder}
      hasRightBorder={hasRightBorder}
      {...rest}
    >
      {filled === EnumCellFill.FLAGGED ? <FlagSVG /> : null}
    </CellTouchable>
  )
}

export const BoardCell = memo(BoardCellComponent, (prev, next) => {
  if (prev.filled === next.filled) {
    return true
  }

  return false
})
