// External Libraries
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

// Components
import { Touchable } from '@components/buttons/Touchable'
import { ColoredGrid } from '@components/game/ColoredGrid'
import { Typography } from '@components/toolkit/Typography'

// Services
import { useHome } from './hooks/useHome'

// Styles
import {
  Container,
  GameContainer,
  GamesContainer,
  ItemContainer
} from './styles'
import { theme } from '@global/theme'
import { Dimensions } from 'react-native'

export const Home: React.FC = () => {
  const { top } = useSafeAreaInsets()
  const { games, handleProductPress } = useHome()

  const width = Dimensions.get('screen').width
  const cardSize = (width - 40) / 3 - 12

  return (
    <Container paddingTop={`${top}px`}>
      <Typography variant="h4" color={theme.colors.textPrimary}>
        Bem vindo
      </Typography>
      <Typography
        marginBottom="16px"
        variant="s1"
        color={theme.colors.textSecondary}
      >
        Listagem de todos os jogos
      </Typography>

      <GamesContainer>
        {games.map(item => (
          <GameContainer
            key={item.name}
            onPress={() => handleProductPress(item)}
            width={cardSize}
          >
            <ItemContainer>
              <ColoredGrid height={60} width={60} boardCells={item.solution} />
              <Typography variant="s2">{item.name}</Typography>
            </ItemContainer>
          </GameContainer>
        ))}
      </GamesContainer>
    </Container>
  )
}
