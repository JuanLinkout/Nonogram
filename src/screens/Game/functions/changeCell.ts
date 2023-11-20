import { EnumCellFill, IBoard, IBoardCell } from '@services/types/Game/Board'

interface Args {
  row: number
  onGoing: boolean
  column: number
  board: IBoard
  fillMode: EnumCellFill
}

export function changeCell({ column, board, fillMode, row, onGoing }: Args): {
  schema: IBoardCell[][]
} {
  const schema = JSON.parse(JSON.stringify(board.schema))
  const currentValue = schema[row][column]

  if (
    onGoing &&
    currentValue.filled === EnumCellFill.FILLED &&
    fillMode === EnumCellFill.FLAGGED
  ) {
    return { schema }
  }

  currentValue.filled = fillMode
  return { schema }
}
