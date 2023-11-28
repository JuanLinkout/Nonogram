import { useIsFocused, useNavigation } from '@react-navigation/native'
import { NavigationProps } from '@routes/types'
import { GamesRepository } from '@services/repository/games'
import { IBoard, IListIBoard } from '@services/types/Game/Board'
import { useEffect, useState } from 'react'

export function useHome() {
  // Hooks
  const navigation = useNavigation<NavigationProps>()
  const isFocused = useIsFocused()

  // States
  const [games, setGames] = useState<IListIBoard[]>([])

  async function fetchGames() {
    const response = await GamesRepository.loadAllGames()
    const completedGames = await GamesRepository.getCompletedGames()
    const boards = response.map(item => ({
      ...item,
      completed: completedGames[item.name]
    }))
    setGames(boards)
  }

  function handleProductPress(board: IBoard) {
    navigation.navigate('Game', { board })
  }

  useEffect(() => {
    fetchGames()
  }, [isFocused])

  return { games, handleProductPress }
}
