import { calculateGameSize } from '@screens/Game/functions/calculateGameSize'
import { generateBoardHints } from '@screens/Game/functions/generateBoardHints'
import { generateGrid } from '@screens/Game/functions/generateGrid'
import { IBoard, IBoardCell } from '@services/types/Game/Board'

export function startGameByBoardCellMatrix(
  game: IBoardCell[][],
  title: string
): IBoard {
  return {
    hints: generateBoardHints(game),
    name: title,
    schema: generateGrid(calculateGameSize(game)),
    size: calculateGameSize(game),
    solution: game
  }
}
