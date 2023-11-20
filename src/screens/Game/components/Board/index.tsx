// External Libraries
import React from 'react'

// Components
import { BoardCell } from '../BoardCell'

// Services
import { EnumCellFill, IBoard } from '@services/types/Game/Board'
import { shouldRenderRightBorder } from './functions/shouldRenderRightBorder'
import { shouldRenderBottomBorder } from './functions/shouldRenderBottomBorder'

// Styles
import { BoardContainer, Container, ContainerRow, RowContainer } from './styles'
import {
  GestureDetector,
  PanGestureHandler
} from 'react-native-gesture-handler'
import { useBoard } from './hooks/useBoard'
import { EnumDirection } from '@services/types/Game/Direction'
import { BoardHints } from '../BoardHints'

interface BoardProps {
  board: IBoard
  fillMode: EnumCellFill
  onCellChange: (
    column: number,
    row: number,
    fillMode: EnumCellFill,
    onGoingFillMode: EnumCellFill,
    onGoing: boolean
  ) => void
}

export const Board: React.FC<BoardProps> = ({
  board,
  fillMode,
  onCellChange
}) => {
  // Hooks
  const { cellSize, viewRef, gestureHandler, loadBoardPosition } = useBoard({
    board,
    fillMode,
    onCellChange
  })

  return (
    <ContainerRow>
      <BoardHints
        marginBottom="4px"
        data={board.hints.rows}
        direction={EnumDirection.VERTICAL}
        cellSize={cellSize}
      />

      <Container>
        <BoardHints
          marginLeft="4px"
          data={board.hints.columns}
          direction={EnumDirection.HORIZONTAL}
          cellSize={cellSize}
        />

        <GestureDetector gesture={gestureHandler}>
          <BoardContainer ref={viewRef} onLayout={loadBoardPosition}>
            {board.schema.map((row, rowIndex) => (
              <RowContainer key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <BoardCell
                    hasBottomBorder={shouldRenderBottomBorder(
                      rowIndex,
                      board.size
                    )}
                    hasRightBorder={shouldRenderRightBorder(
                      colIndex,
                      board.size
                    )}
                    key={colIndex}
                    filled={cell.filled}
                    size={cellSize}
                  />
                ))}
              </RowContainer>
            ))}
          </BoardContainer>
        </GestureDetector>
      </Container>
    </ContainerRow>
  )
}
