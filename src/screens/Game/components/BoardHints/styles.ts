import { theme } from '@global/theme'
import { IMargin } from '@services/types/Css'
import { EnumDirection } from '@services/types/Game/Direction'
import { applyMargin } from '@utils/functions/applyCss'
import styled from 'styled-components/native'

interface Props extends IMargin {
  direction: EnumDirection
  cellSize: number
}

function getSize(direction: EnumDirection, cellSize: number) {
  if (direction === EnumDirection.HORIZONTAL) {
    return { width: cellSize - 8 + 'px', height: '80px' }
  }

  return { height: cellSize - 8 + 'px', width: '60px' }
}

export const Container = styled.View<Props>`
  display: flex;
  gap: 8px;
  flex-direction: ${({ direction }) =>
    direction === EnumDirection.HORIZONTAL ? 'row' : 'column'};

  ${applyMargin}
`

export const HintContainer = styled.View<Props>`
  flex-direction: ${({ direction }) =>
    direction === EnumDirection.HORIZONTAL ? 'column' : 'row'};
  border-radius: 2px;
  background-color: ${theme.colors.darkSurface};
  border-width: 1px;
  border: ${theme.colors.border};

  gap: 8px;

  align-items: center;
  justify-content: flex-end;

  padding: 8px;

  ${props => getSize(props.direction, props.cellSize)}
`
