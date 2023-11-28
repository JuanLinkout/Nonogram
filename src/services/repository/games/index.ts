import { useStorage } from '@hooks/useStorage'
import { ASTRONAUT_GAME } from '@services/games/astronaut'
import { BEACH } from '@services/games/beach'
import { LION_GAME } from '@services/games/lion'
import { SATURN } from '@services/games/saturn'
import { SOCCER } from '@services/games/soccer'
import { startGameByBoardCellMatrix } from '@utils/functions/startGameByBoardCellMatrix'

const { getItem, saveItem } = useStorage()
const TOKEN = 'nonogram/games'

export class GamesRepository {
  static async loadAllGames() {
    return await getItem(TOKEN)
  }

  static async startAllGames() {
    const response = await this.loadAllGames()
    if (response?.length) {
      const games = []

      // Adicionar mais jogos
      const lionGame = startGameByBoardCellMatrix(LION_GAME, 'Lion')
      const astronaut = startGameByBoardCellMatrix(ASTRONAUT_GAME, 'Astronaut')
      const beach = startGameByBoardCellMatrix(BEACH, 'Beach')
      const saturn = startGameByBoardCellMatrix(SATURN, 'Saturn')
      const soccer = startGameByBoardCellMatrix(SOCCER, 'Soccer')
      games.push(lionGame)
      games.push(astronaut)
      games.push(beach)
      games.push(saturn)
      games.push(soccer)

      await saveItem(TOKEN, games)
    }
  }
}
