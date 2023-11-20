import { Touchable } from '@components/buttons/Touchable'
import { theme } from '@global/theme'
import styled from 'styled-components/native'

export const FooterContainer = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 0px 32px;

  justify-content: space-between;
`

export const Container = styled.View`
  border-radius: 4px;
  padding: 6px;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.darkSurface};
  border-color: ${({ theme }) => theme.colors.border};
  border-width: 1px;
  gap: 16px;
`

export const Button = styled(Touchable)<{ isSelected: boolean }>`
  height: 40px;
  width: 40px;

  justify-content: center;
  align-items: center;

  border-radius: 3px;
  background-color: ${({ isSelected }) =>
    isSelected ? theme.colors.white : theme.colors.darkSurface};
`

export const Square = styled.View`
  height: 25px;
  width: 25px;
  background-color: ${theme.colors.black};
`
