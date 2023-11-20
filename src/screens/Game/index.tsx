// External Libraries
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// Components
import { Board } from './components/Board'
import { BoardFooter } from './components/BoardFooter'
import { BoardHeader } from './components/BoardHeader'

// Hooks
import { useGame } from './hooks/useGame'
import { EnumDificulty } from '@services/types/Game/Dificulty'

// Styles
import { Container, GameContainer } from './styles'

export const Game: React.FC = () => {
  const { top } = useSafeAreaInsets()
  const {
    board,
    fillMode,
    totalFilledBlocks,
    totalBlocksToFill,
    handleCellChange,
    handleRedoPress,
    handleFillModeChange
  } = useGame()

  return (
    <Container paddingTop={`${top}px`}>
      <BoardHeader
        dificulty={EnumDificulty.EASY}
        totalFilledBlocks={totalFilledBlocks}
        totalBlocksToFill={totalBlocksToFill}
      />

      <GameContainer>
        <Board
          board={board}
          fillMode={fillMode}
          onCellChange={handleCellChange}
        />

        <BoardFooter
          onRedoPress={handleRedoPress}
          fillMode={fillMode}
          onFillModeChange={handleFillModeChange}
        />
      </GameContainer>
    </Container>
  )
}
