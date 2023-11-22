import { IBoard } from '@services/types/Game/Board'

export type RootStackParamList = {
  Home: undefined
  Game: { board: IBoard }
}
