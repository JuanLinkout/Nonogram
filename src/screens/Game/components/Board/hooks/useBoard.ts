import { EnumCellFill, IBoard } from '@services/types/Game/Board'
import { useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { Gesture } from 'react-native-gesture-handler'
import { runOnJS, useSharedValue } from 'react-native-reanimated'
import { getBoardPosition } from '../functions/getBoardPosition'
import { getCellFill } from '@screens/Game/functions/getCellFill'
import { EnumDirection } from '@services/types/Game/Direction'
import { getFillingDirection } from '../functions/getFillingDirection'

interface Props {
  board: IBoard
  fillMode: EnumCellFill
  onCellChange: (column: number, row: number, fillMode: EnumCellFill) => void
}

export function useBoard({ board, fillMode, onCellChange }: Props) {
  // Hooks
  const { width } = useWindowDimensions()

  // States
  const [boardPosition, setBoardPosition] = useState({ x: 0, y: 0 })

  // Sizes
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

  // Animations
  const currentRow = useSharedValue(-1)
  const currentColumn = useSharedValue(-1)
  const currentFill = useSharedValue<EnumCellFill>(EnumCellFill.EMPTY)
  const fillingDirection = useSharedValue<EnumDirection | null>(null)

  const gestureHandler = Gesture.Pan()
    .onBegin(event => {
      const response = getBoardPosition({
        boardStartX: boardPosition.x,
        boardStartY: boardPosition.y,
        currentX: event.absoluteX,
        currentY: event.absoluteY,
        cellSize,
        gridLayoutSize: board.size
      })

      currentColumn.value = response.column
      currentRow.value = response.row

      const result = getCellFill({
        board,
        column: response.column,
        fillMode,
        row: response.row
      })
      currentFill.value = result
      runOnJS(onCellChange)(response.column, response.row, result)
    })
    .onChange(event => {
      const { column, row } = getBoardPosition({
        boardStartX: boardPosition.x,
        boardStartY: boardPosition.y,
        currentX: event.absoluteX,
        currentY: event.absoluteY,
        cellSize,
        gridLayoutSize: board.size
      })

      const isSameCoordinate =
        row === currentRow.value && column === currentColumn.value
      if (isSameCoordinate) return

      const direction = getFillingDirection({
        column,
        previousColumn: currentColumn.value,
        previousRow: currentRow.value,
        row
      })

      if (direction !== fillingDirection.value && fillingDirection.value) return

      runOnJS(onCellChange)(column, row, currentFill.value)
      fillingDirection.value = direction
      currentColumn.value = column
      currentRow.value = row
    })
    .onEnd(() => {
      fillingDirection.value = null
    })

  return { cellSize, gestureHandler, loadBoardPosition: setBoardPosition }
}
