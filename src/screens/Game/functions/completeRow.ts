import { EnumCellFill, IBoard } from '@services/types/Game/Board'
import { generateBoardHints } from './generateBoardHints'

export function updateBoardIfCompleted(board: IBoard): IBoard {
  const { schema, hints } = board
  const numRows = schema.length
  const numCols = schema[0].length
  let isBoardUpdated = false

  const schemaHints = generateBoardHints(schema)

  // Check and update each row
  for (let i = 0; i < numRows; i++) {
    console.log(schemaHints.rows[i], hints.rows[i])

    if (arraysEqual(schemaHints.rows[i], hints.rows[i])) {
      schema[i] = schema[i].map(cell => {
        const updatedValue = { ...cell }
        if (cell.filled !== EnumCellFill.FILLED) {
          updatedValue.filled = EnumCellFill.FLAGGED
        }

        return updatedValue
      })

      isBoardUpdated = true
    }
  }

  // Check and update each column
  for (let j = 0; j < numCols; j++) {
    if (arraysEqual(schemaHints.columns[j], hints.columns[j])) {
      for (let i = 0; i < numRows; i++) {
        if (schema[i][j].filled !== EnumCellFill.FILLED) {
          schema[i][j] = { filled: EnumCellFill.FLAGGED }
        }
      }

      isBoardUpdated = true
    }
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
