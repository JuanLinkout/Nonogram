// External Libraries
import React from 'react'

// Components
import { IconButton } from '@components/buttons/IconButton'
import { Typography } from '@components/toolkit/Typography'
import { CellFilling } from '@components/game/CellFilling'

// Assets
import { ChevronLeftSVG } from '@assets/icons/ChevronLeft'

// Services
import { EnumDificulty } from '@services/types/Game/Dificulty'
import { IBoardCell } from '@services/types/Game/Board'
import { calculateBoardTotalFilled } from '@screens/Game/functions/calculateBoardTotalFilled'

// Styles
import { Container, Row, TextContainer } from './styles'
import { theme } from '@global/theme'
import { mapDificultyTitle } from '@utils/functions/mapDificultyTitle'
import { useNavigation } from '@react-navigation/native'

interface Props {
  dificulty: EnumDificulty
  name: string
  totalFilledBlocks: number
  totalBlocksToFill: number
}

export const BoardHeader: React.FC<Props> = ({
  dificulty,
  name,
  totalBlocksToFill,
  totalFilledBlocks
}) => {
  const navigation = useNavigation()

  return (
    <Container>
      <IconButton icon={<ChevronLeftSVG />} onPress={navigation.goBack} />

      <TextContainer>
        <Typography variant="s2" color={theme.colors.textPrimary}>
          {name}
        </Typography>
        <Typography variant="b2" color={theme.colors.textSecondary}>
          {mapDificultyTitle(dificulty)}
        </Typography>

        <Row>
          <CellFilling />

          <Typography variant="s1" color={theme.colors.textPrimary}>
            {totalFilledBlocks}/{totalBlocksToFill}
          </Typography>
        </Row>
      </TextContainer>

      <IconButton disabled />
    </Container>
  )
}
