// External Libraries
import theme from '@global/theme'
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Styles
import { Container } from './styles'
import { IPadding } from '@services/types/Css'

interface Props extends IPadding {
  title: string
  description: string
  backgroundColor?: string
}

export const CommonEmptyList: React.FC<Props> = ({
  description,
  title,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Typography variant="s1" color={theme.colors.textPrimary}>
        {title}
      </Typography>

      <Typography
        align="center"
        variant="b2"
        color={theme.colors.textSecondary}
      >
        {description}
      </Typography>
    </Container>
  )
}
