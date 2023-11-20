import { EnumCellFill, IBoard, IBoardCell } from '@services/types/Game/Board'

interface Args {
  row: number
  column: number
  board: IBoard
  fillMode: EnumCellFill
}

export function changeCell({ column, board, fillMode, row }: Args): {
  schema: IBoardCell[][]
} {
  const schema = JSON.parse(JSON.stringify(board.schema))
  schema[row][column].filled = fillMode
  return { schema }
}
