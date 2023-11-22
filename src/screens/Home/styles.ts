import { IPadding } from '@services/types/Css'
import { applyPadding } from '@utils/functions/applyCss'
import styled from 'styled-components/native'

export const Container = styled.View<IPadding>`
  height: 100%;
  width: 100%;
  padding: 0px 20px;
  ${applyPadding}
`
