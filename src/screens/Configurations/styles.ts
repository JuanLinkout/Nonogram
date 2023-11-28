import { Touchable } from '@components/buttons/Touchable'
import { IPadding } from '@services/types/Css'
import { applyPadding } from '@utils/functions/applyCss'
import styled from 'styled-components/native'

export const Container = styled.ScrollView<IPadding>`
  height: 100%;
  width: 100%;
  padding: 0px 20px;
  background-color: ${({ theme }) => theme.colors.surface};
  ${applyPadding}
`

export const ItemContainer = styled.View`
  align-items: center;
  row-gap: 6px;
`

export const GamesContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
`

export const GameContainer = styled(Touchable)<{ width: number }>`
  padding: 12px;
  width: ${({ width }) => width}px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.darkSurface};
`
