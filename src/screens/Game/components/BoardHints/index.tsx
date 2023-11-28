// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Styles
import { Container, HintContainer } from './styles'
import { theme } from '@global/theme'
import { EnumDirection } from '@services/types/Game/Direction'
import { IMargin } from '@services/types/Css'

interface Props extends IMargin {
  data: number[][]
  direction: EnumDirection
  cellSize: number
}

export const BoardHints: React.FC<Props> = ({
  data,
  cellSize,
  direction,
  ...rest
}) => {
  return (
    <Container cellSize={cellSize} direction={direction} {...rest}>
      {data.map((item, index) => (
        <HintContainer key={index} cellSize={cellSize} direction={direction}>
          {item.length ? (
            item?.map((value, idx) => (
              <Typography
                key={idx}
                variant="s3"
                color={theme.colors.textPrimary}
              >
                {value}
              </Typography>
            ))
          ) : (
            <Typography variant="s3" color={theme.colors.textPrimary}>
              0
            </Typography>
          )}
        </HintContainer>
      ))}
    </Container>
  )
}
