import { IPadding } from '@services/types/Css'
import { applyPadding } from '@utils/functions/applyCss'
import styled from 'styled-components/native'

interface Props extends IPadding {
  backgroundColor?: string
}

export const Container = styled.View<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;

  ${({ backgroundColor, theme }) => backgroundColor || theme.colors.white};
  ${props => applyPadding(props)};
`
