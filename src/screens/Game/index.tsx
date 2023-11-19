// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'
import { Board } from './components/Board'
import { useGame } from './hooks/useGame'

export const Game: React.FC = () => {
  const { board, handleCellChange } = useGame()

  return (
    <Container>
      <Board board={board} onCellChange={handleCellChange} />
    </Container>
  )
}
