import { EnumCellFill, IBoard } from '@services/types/Game/Board'
import { useState } from 'react'
import { changeCell } from '../functions/changeCell'
import { NONOGRAM_MOCK } from '@utils/mocks/gameMock'
import { generateGrid } from '../functions/generateGrid'

export function useGame() {
  const [fillMode, setFillMode] = useState(EnumCellFill.FILLED)
  const [board, setBoard] = useState<IBoard>({
    schema: generateGrid(5),
    solution: NONOGRAM_MOCK,
    size: 5
  })

  function handleCellChange(
    column: number,
    row: number,
    fillMode: EnumCellFill
  ): void {
    setBoard(prev => {
      const response = changeCell({ board: prev, column, fillMode, row })
      return { ...prev, schema: response.schema }
    })
  }

  return { board, fillMode, handleCellChange }
}