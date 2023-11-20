// External Libraries
import React from 'react'

// Services
import { EnumCellFill } from '@services/types/Game/Board'

// Assets
import { FlagSVG } from '@assets/icons/Flag'
import { LightBulbSVG } from '@assets/icons/LightBulb'
import { RedoSVG } from '@assets/icons/Redo'

// Styles
import { Button, Container, FooterContainer, Square } from './styles'

interface Props {
  fillMode: EnumCellFill
  onFillModeChange: (fillMode: EnumCellFill) => void
}

export const BoardFooter: React.FC<Props> = ({
  fillMode,
  onFillModeChange
}) => (
  <FooterContainer>
    <Container>
      <Button
        isSelected={fillMode === EnumCellFill.HINT}
        onPress={() => onFillModeChange(EnumCellFill.HINT)}
      >
        <LightBulbSVG />
      </Button>
    </Container>

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

    <Container>
      <Button
        isSelected={false}
        onPress={() => onFillModeChange(EnumCellFill.FLAGGED)}
      >
        <RedoSVG />
      </Button>
    </Container>
  </FooterContainer>
)
