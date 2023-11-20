import { EnumCellFill, IBoard } from '@services/types/Game/Board'
import { useRef, useState } from 'react'
import { View, useWindowDimensions } from 'react-native'
import { Gesture } from 'react-native-gesture-handler'
import { runOnJS, useSharedValue } from 'react-native-reanimated'
import { getBoardPosition } from '../functions/getBoardPosition'
import { getCellFill } from '@screens/Game/functions/getCellFill'
import { EnumDirection } from '@services/types/Game/Direction'
import { getFillingDirection } from '../functions/getFillingDirection'

interface Props {
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

export function useBoard({ board, fillMode, onCellChange }: Props) {
  // Hooks
  const { width } = useWindowDimensions()

  // States
  const [boardPosition, setBoardPosition] = useState({ x: 0, y: 0 })

  // Refs
  const viewRef = useRef<View>(null)

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

  function loadBoardPosition() {
    if (viewRef.current) {
      viewRef.current.measure((x, y, width, height, pageX, pageY) => {
        setBoardPosition({ x: pageX, y: pageY })
      })
    }
  }

  // Animations
  const previousRow = useSharedValue(-1)
  const previousColumn = useSharedValue(-1)
  const onGoingFillMode = useSharedValue<EnumCellFill>(EnumCellFill.EMPTY)
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

      previousColumn.value = response.column
      previousRow.value = response.row

      const cellFillMode = getCellFill({
        board,
        column: response.column,
        fillMode,
        row: response.row
      })
      onGoingFillMode.value = cellFillMode
      runOnJS(onCellChange)(
        response.column,
        response.row,
        onGoingFillMode.value,
        fillMode,
        false
      )
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
        row === previousRow.value && column === previousColumn.value
      if (isSameCoordinate) return

      const direction = getFillingDirection({
        column,
        previousColumn: previousColumn.value,
        previousRow: previousRow.value,
        row
      })

      if (direction !== fillingDirection.value && fillingDirection.value) return

      runOnJS(onCellChange)(column, row, onGoingFillMode.value, fillMode, true)
      fillingDirection.value = direction
      previousColumn.value = column
      previousRow.value = row
    })
    .onEnd(() => {
      fillingDirection.value = null
    })

  return { cellSize, viewRef, gestureHandler, loadBoardPosition }
}
