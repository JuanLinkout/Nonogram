// External Libraries
import { AccessibilityActionEvent, ButtonProps } from 'react-native'
import React, { useCallback, useEffect, useMemo } from 'react'
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

// Components
import { ITypographyTheme, Typography } from '@components/toolkit/Typography'
import { Loader } from '@components/toolkit/Loader'

// Services
import { ButtonVariants } from './types'

// Styles
import theme from '../../../global/theme'
import { Container, ContainerProps } from './styles'

interface Props
  extends Omit<ButtonProps, 'title'>,
    Omit<ContainerProps, 'variant'> {
  label: string | JSX.Element
  labelVariant?: ITypographyTheme
  labelColor?: string
  variant?: ButtonVariants
  loading?: boolean
  onPress: () => void
}

export const Button: React.FC<Props> = ({
  label,
  labelVariant,
  labelColor,
  variant = 'filled',
  loading,
  onPress,
  ...rest
}) => {
  // Animations
  const opacity = useSharedValue(1)
  const style = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
    }
  }, [])

  // Effects
  useEffect(() => {
    if (loading) opacity.value = withTiming(0, { duration: 100 })
    else opacity.value = withTiming(1)
  }, [loading])

  // Variants
  const labelVariantColor: Record<ButtonVariants, string> = useMemo(
    () => ({
      filled: theme.colors.white,
      outlined: theme.colors.black,
      transparent: theme.colors.black,
      secondary: theme.colors.black,
      blueOutlined: theme.colors.primary
    }),
    []
  )

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
      {...rest}
      disabled={rest.disabled || loading}
      accessible={true}
      onPress={onPress}
      variant={variant}
      accessibilityLabel={getAccessibilityLabel()}
      onAccessibilityAction={handleAcessibilityAction}
      accessibilityActions={[
        { name: 'activate', label: getAccessibilityLabel() }
      ]}
    >
      <Animated.View
        style={style}
        entering={FadeIn.duration(100)}
        exiting={FadeOut.duration(100)}
      >
        <Typography
          numberOfLines={1}
          variant={labelVariant || 's2'}
          color={labelVariantColor[variant] || labelColor}
        >
          {label}
        </Typography>
      </Animated.View>

      {loading ? (
        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          entering={FadeIn.duration(100)}
          exiting={FadeOut.duration(100)}
        >
          <Loader />
        </Animated.View>
      ) : null}
    </Container>
  )
}
