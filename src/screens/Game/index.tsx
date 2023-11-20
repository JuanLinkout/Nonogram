// External Libraries
import React from 'react'

// Components
import { Board } from './components/Board'

// Hooks
import { useGame } from './hooks/useGame'

// Styles
import { Container } from './styles'
import { BoardFooter } from './components/BoardFooter'

export const Game: React.FC = () => {
  const { board, fillMode, handleCellChange, handleFillModeChange } = useGame()

  return (
    <Container>
      <Board
        board={board}
        fillMode={fillMode}
        onCellChange={handleCellChange}
      />

      <BoardFooter
        fillMode={fillMode}
        onFillModeChange={handleFillModeChange}
      />
    </Container>
  )
}
