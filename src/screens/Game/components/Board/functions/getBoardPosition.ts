interface Args {
  boardStartX: number
  boardStartY: number
  currentX: number
  currentY: number

  gridLayoutSize: number
  cellSize: number
}

export function getBoardPosition({
  boardStartX,
  boardStartY,
  currentX,
  currentY,
  cellSize,
  gridLayoutSize
}: Args): { column: number; row: number } {
  'worklet'

  const offsetX = currentX - boardStartX
  const offsetY = currentY - boardStartY

  const column = Math.floor(offsetX / cellSize)
  const row = Math.floor(offsetY / cellSize)

  const clampedColumn = Math.min(Math.max(column, 0), gridLayoutSize - 1)
  const clampedRow = Math.min(Math.max(row, 0), gridLayoutSize - 1)

  return { column: clampedColumn, row: clampedRow }
}
