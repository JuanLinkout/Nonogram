// External Libraries
import React from 'react'

// Styles
import { CellProps, CellTouchable } from './styles'

export const BoardCell: React.FC<CellProps> = ({
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
    />
  )
}
