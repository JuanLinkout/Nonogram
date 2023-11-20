import { theme } from '@global/theme'
import { View } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View``

export const ContainerRow = styled.View`
  flex-direction: row;
  align-items: flex-end;
`

export const BoardContainer = styled(View)`
  flex-direction: column;
  align-items: center;
  border-width: 1px;
  border-color: ${theme.colors.black};
`

export const RowContainer = styled(View)`
  flex-direction: row;
`
