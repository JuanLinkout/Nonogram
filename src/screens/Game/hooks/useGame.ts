import { EnumCellFill, IBoard, IBoardCell } from '@services/types/Game/Board'
import { useEffect, useMemo, useRef, useState } from 'react'
import { changeCell } from '../functions/changeCell'
import { updateBoardIfCompleted } from '../functions/completeRow'
import { calculateBoardTotalFilled } from '../functions/calculateBoardTotalFilled'
import { verifyIfGameIsCorrect } from '../functions/verifyIfGameIsComplete'
import { Alert, InteractionManager } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { GameDetailsRouteProp, NavigationProps } from '@routes/types'
import { GamesRepository } from '@services/repository/games'

export function useGame() {
  // Hooks
  const { params } = useRoute<GameDetailsRouteProp>()
  const navigation = useNavigation<NavigationProps>()

  // States
  const [fillMode, setFillMode] = useState(EnumCellFill.FILLED)
  const [board, setBoard] = useState<IBoard>(params.board)
  const [showingBoard, setShowingBoard] = useState(false)

  // Refs
  const actionQueue = useRef<IBoardCell[][][]>([board.schema])

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

  function handleRedoPress() {
    if (actionQueue.current.length > 1) {
      actionQueue.current.pop()
      const schema = actionQueue.current[actionQueue.current.length - 1]
      setBoard(prev => ({ ...prev, schema: schema }))
    }
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

      actionQueue.current.push(updatedBoard.schema)

      return { ...prev, schema: updatedBoard.schema }
    })
  }

  function handleGameVerification() {
    const isComplete = verifyIfGameIsCorrect({ board })
    if (isComplete) {
      Alert.alert('Parabéns', 'Jogo concluido com sucesso', [
        {
          onPress: () => {
            GamesRepository.addCompletedGame(board.name)
            navigation.goBack()
          }
        }
      ])
    }
    if (!isComplete)
      Alert.alert('Ops', 'Você não conseguiu completar o jogo', [
        { text: 'Continuar' },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: navigation.goBack
        }
      ])
  }

  useEffect(() => {
    if (totalBlocksToFill === totalFilledBlocks) handleGameVerification()
  }, [totalBlocksToFill, totalFilledBlocks])

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setShowingBoard(true)
    })
  }, [])

  return {
    board,
    fillMode,
    showingBoard,
    totalFilledBlocks,
    totalBlocksToFill,
    handleCellChange,
    handleRedoPress,
    handleFillModeChange
  }
}
