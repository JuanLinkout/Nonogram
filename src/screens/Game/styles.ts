import { theme } from '@global/theme'
import { IPadding } from '@services/types/Css'
import { applyPadding } from '@utils/functions/applyCss'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

export const Container = styled.View<IPadding>`
  height: 100%;
  background-color: ${theme.colors.white};
  ${applyPadding}
`

export const GameContainer = styled(Animated.View)`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
  gap: 32px;
`
