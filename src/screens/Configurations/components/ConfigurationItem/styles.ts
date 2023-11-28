import { Touchable } from '@components/buttons/Touchable'
import { theme } from '@global/theme'
import styled from 'styled-components/native'

export const Container = styled(Touchable)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0px;
  width: 100%;
`

export const LeftWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

export const IconContainer = styled.View`
  margin-right: 12px;
`

export const TextContainer = styled.View`
  flex: 1;
`

export const EndContainer = styled.View``
