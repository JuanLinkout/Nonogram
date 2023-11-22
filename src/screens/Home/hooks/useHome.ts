import { useNavigation } from '@react-navigation/native'
import { NavigationProps } from '@routes/types'
import { GamesRepository } from '@services/repository/games'
import { IBoard } from '@services/types/Game/Board'
import { useEffect, useState } from 'react'

export function useHome() {
  // Hooks
  const navigation = useNavigation<NavigationProps>()

  // States
  const [games, setGames] = useState<IBoard[]>([])

  async function fetchGames() {
    const response = await GamesRepository.loadAllGames()
    setGames(response)
  }

  function handleProductPress(board: IBoard) {
    navigation.navigate('Game', { board })
  }

  useEffect(() => {
    fetchGames()
  }, [])

  return { games, handleProductPress }
}
