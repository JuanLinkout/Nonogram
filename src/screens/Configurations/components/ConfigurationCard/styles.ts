import { IMargin } from '@services/types/Css'
import { applyMargin } from '@utils/functions/applyCss'
import styled from 'styled-components/native'

export const ContentWrapper = styled.View<IMargin>`
  width: 100%;
  ${props => applyMargin(props)};
`

export const Container = styled.View`
  padding: 0 16px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
`
