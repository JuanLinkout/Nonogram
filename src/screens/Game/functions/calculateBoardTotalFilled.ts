import { EnumCellFill, IBoardCell } from '@services/types/Game/Board'

export function calculateBoardTotalFilled(board: IBoardCell[][]) {
  let sum = 0

  board.forEach(row => {
    row.forEach(column => {
      if (column.filled === EnumCellFill.FILLED) sum += 1
    })
  })

  return sum
}
