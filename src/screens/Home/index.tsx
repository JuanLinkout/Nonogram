// External Libraries
import React from 'react'

// Components

// Styles
import { Container, ItemContainer } from './styles'
import { useHome } from './hooks/useHome'
import { Touchable } from '@components/buttons/Touchable'
import { Typography } from '@components/toolkit/Typography'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ColoredGrid } from '@components/game/ColoredGrid'

export const Home: React.FC = () => {
  const { top } = useSafeAreaInsets()
  const { games, handleProductPress } = useHome()

  return (
    <Container paddingTop={`${top}px`}>
      {games.map(item => (
        <Touchable key={item.name} onPress={() => handleProductPress(item)}>
          <ItemContainer>
            <ColoredGrid height={60} width={60} boardCells={item.solution} />
            <Typography variant="s2">{item.name}</Typography>
          </ItemContainer>
        </Touchable>
      ))}
    </Container>
  )
}
