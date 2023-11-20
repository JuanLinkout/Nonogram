// External Libraries
import React from 'react'

// Components
import { BoardCell } from '../BoardCell'

// Services
import { EnumCellFill, IBoard } from '@services/types/Game/Board'
import { shouldRenderRightBorder } from './functions/shouldRenderRightBorder'
import { shouldRenderBottomBorder } from './functions/shouldRenderBottomBorder'

// Styles
import { BoardContainer, RowContainer } from './styles'
import {
  GestureDetector,
  PanGestureHandler
} from 'react-native-gesture-handler'
import { useBoard } from './hooks/useBoard'

interface BoardProps {
  board: IBoard
  fillMode: EnumCellFill
  onCellChange: (column: number, row: number, fillMode: EnumCellFill) => void
}

export const Board: React.FC<BoardProps> = ({
  board,
  fillMode,
  onCellChange
}) => {
  // Hooks
  const { cellSize, gestureHandler, loadBoardPosition } = useBoard({
    board,
    fillMode,
    onCellChange
  })

  return (
    <GestureDetector gesture={gestureHandler}>
      <BoardContainer onLayout={e => loadBoardPosition(e.nativeEvent.layout)}>
        {board.schema.map((row, rowIndex) => (
          <RowContainer key={rowIndex}>
            {row.map((cell, colIndex) => (
              <BoardCell
                hasBottomBorder={shouldRenderBottomBorder(rowIndex, board.size)}
                hasRightBorder={shouldRenderRightBorder(colIndex, board.size)}
                key={colIndex}
                filled={cell.filled}
                size={cellSize}
              />
            ))}
          </RowContainer>
        ))}
      </BoardContainer>
    </GestureDetector>
  )
}
