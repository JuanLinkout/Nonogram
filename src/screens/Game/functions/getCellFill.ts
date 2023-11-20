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
  const isEmpty = board.schema[row][column].filled === EnumCellFill.EMPTY
  return isEmpty ? fillMode : EnumCellFill.EMPTY
}
