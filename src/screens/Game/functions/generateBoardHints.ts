import {
  EnumCellFill,
  IBoardCell,
  IBoardHints
} from '@services/types/Game/Board'

export function generateBoardHints(board: IBoardCell[][]): IBoardHints {
  const numRows = board.length
  const numCols = board[0].length

  const rowHints: number[][] = []
  const colHints: number[][] = []

  // Gerar dicas para as linhas
  for (let i = 0; i < numRows; i++) {
    const row = board[i]
    const hintsForRow = generateHintsForRowOrColumn(row)
    rowHints.push(hintsForRow)
  }

  // Gerar dicas para as colunas
  for (let j = 0; j < numCols; j++) {
    const column = board.map(row => row[j])
    const hintsForColumn = generateHintsForRowOrColumn(column)
    colHints.push(hintsForColumn)
  }

  return { rows: rowHints, columns: colHints }
}

export function generateHintsForRowOrColumn(line: IBoardCell[]): number[] {
  const hints: number[] = []
  let currentCount = 0

  for (const cell of line) {
    if (cell.filled === EnumCellFill.FILLED) {
      currentCount++
    } else if (currentCount > 0) {
      hints.push(currentCount)
      currentCount = 0
    }
  }

  if (currentCount > 0) hints.push(currentCount)

  return hints
}
