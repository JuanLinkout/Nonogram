// External Libraries
import React, { useEffect } from 'react'
import { useWindowDimensions } from 'react-native'

// Components
import { BoardCell } from '../BoardCell'

// Services
import { IBoard } from '@services/types/Game/Board'

// Styles
import { BoardContainer, RowContainer } from './styles'
import { shouldRenderRightBorder } from './functions/shouldRenderRightBorder'
import { shouldRenderBottomBorder } from './functions/shouldRenderBottomBorder'

interface BoardProps {
  board: IBoard
  onCellChange: (column: number, row: number) => void
}

export const Board: React.FC<BoardProps> = ({ board, onCellChange }) => {
  const { width } = useWindowDimensions()

  const minCellSize = 20
  const maxCellSize = 50
  const cellsPerRow = Math.min(
    Math.floor(width / minCellSize),
    board.schema[0].length
  )
  const cellSize = Math.max(
    Math.min(width / cellsPerRow, maxCellSize),
    minCellSize
  )

  useEffect(() => {
    const updatedCellsPerRow = Math.min(
      Math.floor(width / minCellSize),
      board.schema[0].length
    )
  }, [width, board, cellsPerRow])

  return (
    <BoardContainer>
      {board.schema.map((row, rowIndex) => (
        <RowContainer key={rowIndex}>
          {row.map((cell, colIndex) => (
            <BoardCell
              hasBottomBorder={shouldRenderBottomBorder(rowIndex, board.size)}
              hasRightBorder={shouldRenderRightBorder(colIndex, board.size)}
              key={colIndex}
              filled={cell.filled}
              onPress={() => onCellChange(colIndex, rowIndex)}
              onLongPress={() => onCellChange(colIndex, rowIndex)}
              onPressIn={() => onCellChange(colIndex, rowIndex)}
              size={cellSize}
            />
          ))}
        </RowContainer>
      ))}
    </BoardContainer>
  )
}
