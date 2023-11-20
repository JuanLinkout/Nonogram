import { IBoardCell } from '@services/types/Game/Board'

export function calculateGameSize(board: IBoardCell[][]) {
  return board[0].length
}
