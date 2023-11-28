// External Libraries
import React from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Assets

// Styles
import {
  Container,
  EndContainer,
  IconContainer,
  LeftWrapper,
  TextContainer
} from './styles'
import { theme } from '@global/theme'

interface Props {
  title: string
  description: string
  icon?: JSX.Element
  endComponent?: JSX.Element
  disabled?: boolean
  newComponent?: boolean
  onPress?: () => void
}

export const ConfigurationItem: React.FC<Props> = ({
  description,
  title,
  icon,
  endComponent,
  disabled,
  newComponent,
  onPress
}) => {
  return (
    <Container disabled={disabled} onPress={onPress}>
      <LeftWrapper>
        <TextContainer>
          <Typography variant="s2" color={theme.colors.textPrimary}>
            {title}
          </Typography>
          <Typography variant="b3" color={theme.colors.textSecondary}>
            {description}
          </Typography>
        </TextContainer>
      </LeftWrapper>

      <EndContainer>{endComponent}</EndContainer>
    </Container>
  )
}
