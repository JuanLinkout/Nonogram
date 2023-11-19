import { EnumCellFill, IBoard, IBoardCell } from '@services/types/Game/Board'

interface Args {
  row: number
  column: number
  board: IBoard
  fillMode: EnumCellFill
}

export function changeCell({
  column,
  board,
  fillMode,
  row
}: Args): IBoardCell[][] {
  const updatedBoard = [...board.schema]
  const cell = updatedBoard[row][column]

  const isEmpty = updatedBoard[row][column].filled === EnumCellFill.EMPTY
  if (isEmpty) cell.filled = fillMode
  else cell.filled = EnumCellFill.EMPTY

  return updatedBoard
}
