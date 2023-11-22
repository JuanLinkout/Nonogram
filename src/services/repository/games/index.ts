import { useStorage } from '@hooks/useStorage'
import { LION_GAME } from '@services/games/lion'
import { startGameByBoardCellMatrix } from '@utils/functions/startGameByBoardCellMatrix'

const { getItem, saveItem } = useStorage()
const TOKEN = 'nonogram/games'

export class GamesRepository {
  static async loadAllGames() {
    return await getItem(TOKEN)
  }

  static async startAllGames() {
    const response = await this.loadAllGames()
    if (!response?.length) {
      const games = []

      // Adicionar mais jogos
      const lionGame = startGameByBoardCellMatrix(LION_GAME, 'Lion')
      games.push(lionGame)

      await saveItem(TOKEN, games)
    }
  }
}
