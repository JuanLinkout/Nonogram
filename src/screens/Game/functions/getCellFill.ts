import { EnumCellFill, IBoard } from '@services/types/Game/Board'

interface Args {
  row: number
  column: number
  board: IBoard
  fillMode: EnumCellFill
}

export function getCellFill({
  column,
  board,
  fillMode,
  row
}: Args): EnumCellFill {
  'worklet'

  if (board.schema[row][column].filled === fillMode) return EnumCellFill.EMPTY
  return fillMode
}
