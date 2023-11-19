import { theme } from '@global/theme'
import { View } from 'react-native'
import styled from 'styled-components/native'

export const BoardContainer = styled(View)`
  flex-direction: column;
  align-items: center;
  border-width: 1px;
  border-color: ${theme.colors.black};
`

export const RowContainer = styled(View)`
  flex-direction: row;
`
