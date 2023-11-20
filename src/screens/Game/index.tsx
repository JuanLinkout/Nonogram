// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'
import { Board } from './components/Board'
import { useGame } from './hooks/useGame'

export const Game: React.FC = () => {
  const { board, fillMode, handleCellChange } = useGame()

  return (
    <Container>
      <Board
        board={board}
        fillMode={fillMode}
        onCellChange={handleCellChange}
      />
    </Container>
  )
}
