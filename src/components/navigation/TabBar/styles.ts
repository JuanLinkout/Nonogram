import styled from 'styled-components/native'

interface ContainerProps {
  paddingBottom: number
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  position: relative;

  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.border};
  background-color: ${props => props.theme.colors.white};

  padding-top: 15px;
  padding-bottom: ${({ paddingBottom }) => `${paddingBottom}px`};
`

export const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const IconContainer = styled.View`
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  margin-bottom: 7px;
  margin-top: 4px;
`
