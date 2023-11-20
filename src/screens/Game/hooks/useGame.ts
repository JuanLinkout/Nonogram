import { EnumCellFill, IBoard } from '@services/types/Game/Board'
import { useEffect, useMemo, useState } from 'react'
import { changeCell } from '../functions/changeCell'
import { NONOGRAM_MOCK } from '@utils/mocks/gameMock'
import { generateGrid } from '../functions/generateGrid'
import { generateBoardHints } from '../functions/generateBoardHints'
import { updateBoardIfCompleted } from '../functions/completeRow'
import { calculateBoardTotalFilled } from '../functions/calculateBoardTotalFilled'
import { verifyIfGameIsCorrect } from '../functions/verifyIfGameIsComplete'
import { Alert } from 'react-native'

export function useGame() {
  // States
  const [fillMode, setFillMode] = useState(EnumCellFill.FILLED)
  const [board, setBoard] = useState<IBoard>({
    schema: generateGrid(5),
    solution: NONOGRAM_MOCK,
    size: 5,
    hints: generateBoardHints(NONOGRAM_MOCK)
  })

  // Memos
  const totalFilledBlocks = useMemo(() => {
    return calculateBoardTotalFilled(board.schema)
  }, [board.schema])

  const totalBlocksToFill = useMemo(() => {
    return calculateBoardTotalFilled(board.solution)
  }, [board.solution])

  // Functions
  function handleFillModeChange(newFillMode: EnumCellFill) {
    setFillMode(newFillMode)
  }

  function handleCellChange(
    column: number,
    row: number,
    fillMode: EnumCellFill,
    onGoingFillMode: EnumCellFill,
    onGoing: boolean
  ): void {
    setBoard(prev => {
      const response = changeCell({
        board: prev,
        column,
        fillMode,
        row,
        onGoing,
        onGoingFillMode
      })

      const updatedBoard = updateBoardIfCompleted({
        fillMode: onGoing ? onGoingFillMode : fillMode,
        column,
        row,
        board: {
          ...prev,
          schema: response.schema
        }
      })

      return { ...prev, schema: updatedBoard.schema }
    })
  }

  useEffect(() => {
    if (totalBlocksToFill === totalFilledBlocks) {
      const isComplete = verifyIfGameIsCorrect({ board })
      if (isComplete) Alert.alert('Parabéns', 'Jogo concluido com sucesso')
      if (!isComplete) Alert.alert('Ops', 'Você não conseguiu completar o jogo')
    }
  }, [totalBlocksToFill, totalFilledBlocks])

  return {
    board,
    fillMode,
    totalFilledBlocks,
    totalBlocksToFill,
    handleCellChange,
    handleFillModeChange
  }
}
