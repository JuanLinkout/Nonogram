import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`

export const TextContainer = styled.View`
  flex-direction: column;
  align-items: center;
`

export const Square = styled.View`
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.black};
`

export const Row = styled.View`
  align-items: center;
  gap: 6px;
  flex-direction: row;
`
