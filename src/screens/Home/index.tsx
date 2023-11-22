// External Libraries
import React from 'react'

// Components

// Styles
import { Container } from './styles'
import { useHome } from './hooks/useHome'
import { Touchable } from '@components/buttons/Touchable'
import { Typography } from '@components/toolkit/Typography'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const Home: React.FC = () => {
  const { top } = useSafeAreaInsets()
  const { games, handleProductPress } = useHome()

  return (
    <Container paddingTop={`${top}px`}>
      {games.map(item => (
        <Touchable key={item.name} onPress={() => handleProductPress(item)}>
          <Typography variant="s2">{item.name}</Typography>
        </Touchable>
      ))}
    </Container>
  )
}
