import { EnumCellFill, IBoard } from '@services/types/Game/Board'

interface Args {
  board: IBoard
}

export function verifyIfGameIsCorrect({ board }: Args) {
  const solution = board.solution
  const currentBoard = board.schema

  for (let i = 0; i < board.size; i++) {
    for (let j = 0; j < board.size; j++) {
      if (solution[i][j].filled !== EnumCellFill.FILLED) continue

      if (solution[i][j].filled !== currentBoard[i][j].filled) {
        return false
      }
    }
  }

  return true
}
