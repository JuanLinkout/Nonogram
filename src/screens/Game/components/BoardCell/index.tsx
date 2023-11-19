// External Libraries
import React from 'react'

// Styles
import { CellProps, CellTouchable } from './styles'

export const BoardCell: React.FC<CellProps> = ({
  filled,
  onPress,
  onLongPress,
  size,
  hasBottomBorder,
  hasRightBorder
}) => {
  return (
    <CellTouchable
      onPress={onPress}
      onLongPress={onLongPress}
      size={size}
      filled={filled}
      hasBottomBorder={hasBottomBorder}
      hasRightBorder={hasRightBorder}
    />
  )
}
