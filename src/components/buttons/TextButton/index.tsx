// Bibliotecas externas
import React, { useCallback } from 'react'
import { AccessibilityActionEvent, ButtonProps } from 'react-native'

// Componentes
import { ITypographyTheme, Typography } from '@components/toolkit/Typography'

// Estilização
import { Container, ContainerProps } from './styles'
import theme from '@global/theme'

interface Props extends Omit<ButtonProps, 'title'>, ContainerProps {
  label: string
  labelColor?: string
  weight?: number
  variant?: ITypographyTheme
  prefix?: JSX.Element
  onPress: () => void
}

export const TextButton: React.FC<Props> = ({
  label,
  labelColor,
  weight = 600,
  onPress,
  variant = 's2',
  prefix,
  ...rest
}) => {
  // Functions
  const getAccessibilityLabel = useCallback(() => {
    if (typeof label === 'string') return label
    else return rest.accessibilityLabel
  }, [])

  const handleAcessibilityAction = useCallback(
    (e: AccessibilityActionEvent) => {
      if (e.nativeEvent.actionName === 'activite') onPress()
    },
    []
  )

  return (
    <Container
      activeOpacity={0.7}
      onPress={onPress}
      accessible={true}
      accessibilityLabel={getAccessibilityLabel()}
      onAccessibilityAction={handleAcessibilityAction}
      accessibilityActions={[
        { name: 'activate', label: getAccessibilityLabel() }
      ]}
      {...rest}
    >
      {prefix}

      <Typography
        marginLeft={prefix ? '10px' : ''}
        variant={variant}
        weight={weight}
        color={labelColor || theme.colors.primary}
      >
        {label}
      </Typography>
    </Container>
  )
}
