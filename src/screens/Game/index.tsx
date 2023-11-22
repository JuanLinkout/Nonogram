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
import { FadeIn } from 'react-native-reanimated'
import { mapSizeToDificulty } from '@utils/functions/mapSizeToDificulty'

export const Game: React.FC = () => {
  const { top } = useSafeAreaInsets()
  const {
    board,
    fillMode,
    totalFilledBlocks,
    totalBlocksToFill,
    showingBoard,
    handleCellChange,
    handleRedoPress,
    handleFillModeChange
  } = useGame()

  return (
    <Container paddingTop={`${top}px`}>
      <BoardHeader
        name={board.name}
        dificulty={mapSizeToDificulty(board.size)}
        totalFilledBlocks={totalFilledBlocks}
        totalBlocksToFill={totalBlocksToFill}
      />

      {showingBoard ? (
        <GameContainer entering={FadeIn}>
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
      ) : null}
    </Container>
  )
}
