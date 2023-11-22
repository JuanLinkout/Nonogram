import { EnumCellFill, IBoard } from '@services/types/Game/Board'
import { generateBoardHints } from './generateBoardHints'

interface Args {
  board: IBoard
  column: number
  row: number
  fillMode: EnumCellFill
}

export function updateBoardIfCompleted({
  board,
  column,
  fillMode,
  row
}: Args): IBoard {
  if (fillMode !== EnumCellFill.FILLED && fillMode !== EnumCellFill.HINT) {
    return board
  }

  const { schema, hints } = board
  const numRows = schema.length
  let isBoardUpdated = false

  const schemaHints = generateBoardHints(schema)

  if (arraysEqual(schemaHints.rows[row], hints.rows[row])) {
    schema[row] = schema[row].map(cell => {
      const updatedValue = { ...cell }
      if (cell.filled !== EnumCellFill.FILLED) {
        updatedValue.filled = EnumCellFill.FLAGGED
      }

      return updatedValue
    })

    isBoardUpdated = true
  }

  // Check and update each column
  if (arraysEqual(schemaHints.columns[column], hints.columns[column])) {
    for (let i = 0; i < numRows; i++) {
      if (schema[i][column].filled !== EnumCellFill.FILLED) {
        schema[i][column] = { filled: EnumCellFill.FLAGGED }
      }
    }

    isBoardUpdated = true
  }

  return isBoardUpdated ? { ...board, schema: [...schema] } : board
}

// Helper function to check if two arrays are equal
function arraysEqual(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}
