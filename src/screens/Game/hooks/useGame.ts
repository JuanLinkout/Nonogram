import { EnumCellFill, IBoard } from '@services/types/Game/Board'
import { useState } from 'react'
import { changeCell } from '../functions/changeCell'
import { NONOGRAM_MOCK } from '@utils/mocks/gameMock'
import { generateGrid } from '../functions/generateGrid'
import { generateBoardHints } from '../functions/generateBoardHints'
import { updateBoardIfCompleted } from '../functions/completeRow'

export function useGame() {
  const [fillMode, setFillMode] = useState(EnumCellFill.FILLED)
  const [board, setBoard] = useState<IBoard>({
    schema: generateGrid(5),
    solution: NONOGRAM_MOCK,
    size: 5,
    hints: generateBoardHints(NONOGRAM_MOCK)
  })

  function handleFillModeChange(newFillMode: EnumCellFill) {
    setFillMode(newFillMode)
  }

  function handleCellChange(
    column: number,
    row: number,
    fillMode: EnumCellFill,
    onGoing: boolean
  ): void {
    setBoard(prev => {
      const response = changeCell({
        board: prev,
        column,
        fillMode,
        row,
        onGoing
      })

      const updatedBoard = updateBoardIfCompleted({
        ...prev,
        schema: response.schema
      })

      return { ...prev, schema: updatedBoard.schema }
    })
  }

  return { board, fillMode, handleCellChange, handleFillModeChange }
}
