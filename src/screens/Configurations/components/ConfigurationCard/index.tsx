// External Libraries
import React, { PropsWithChildren } from 'react'

// Components
import { Typography } from '@components/toolkit/Typography'

// Services
import { IMargin } from '@services/types/Css'

// Styles
import { Container, ContentWrapper } from './styles'
import { theme } from '@global/theme'

interface Props extends IMargin {
  title?: string
}

export const ConfigurationCard: React.FC<PropsWithChildren<Props>> = ({
  title,
  children,
  ...rest
}) => {
  return (
    <ContentWrapper {...rest}>
      {title ? (
        <Typography
          variant="h6"
          color={theme.colors.textPrimary}
          marginBottom="10px"
        >
          {title}
        </Typography>
      ) : null}

      <Container>{children}</Container>
    </ContentWrapper>
  )
}
