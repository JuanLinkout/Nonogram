// External Libraries
import React from 'react'

// Components

// Styles
import { Button, Container, Square } from './styles'
import { EnumCellFill } from '@services/types/Game/Board'
import { FlagSVG } from '@assets/icons/Flag'

interface Props {
  fillMode: EnumCellFill
  onFillModeChange: (fillMode: EnumCellFill) => void
}

export const BoardFooter: React.FC<Props> = ({
  fillMode,
  onFillModeChange
}) => (
  <Container>
    <Button
      isSelected={fillMode === EnumCellFill.FLAGGED}
      onPress={() => onFillModeChange(EnumCellFill.FLAGGED)}
    >
      <FlagSVG />
    </Button>

    <Button
      isSelected={fillMode === EnumCellFill.FILLED}
      onPress={() => onFillModeChange(EnumCellFill.FILLED)}
    >
      <Square />
    </Button>
  </Container>
)
