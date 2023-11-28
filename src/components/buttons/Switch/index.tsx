// Bibliotecas Externas
import React, { useEffect } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

// Estilização
import { Container } from './styles'
import { theme } from '@global/theme'
import { SwitchCheckSVG } from '@assets/icons/SwitchCheck'

interface SwitchProps extends TouchableOpacityProps {
  setSelected: (value: boolean) => void
  selected: boolean

  marginTop?: string
  marginRight?: string
  marginBottom?: string
  marginLeft?: string
}

export const Switch: React.FC<SwitchProps> = ({
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  selected,
  disabled,
  setSelected
}) => {
  // Animations
  const toggled = useSharedValue(selected ? 1 : 0)

  // Effects
  useEffect(() => {
    if (selected) toggled.value = withTiming(1, { duration: 150 })
    else toggled.value = withTiming(0, { duration: 150 })
  }, [selected])

  // Styles
  const backgroundAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: 30,
      width: 50,
      borderRadius: 40,
      justifyContent: 'center',
      backgroundColor: interpolateColor(
        toggled.value,
        [0, 1],
        [
          theme.colors.border,
          !disabled ? theme.colors.black : theme.colors.darkSurface
        ]
      )
    }
  })

  const circleAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: 24,
      width: 24,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: interpolateColor(
        toggled.value,
        [0, 1],
        [theme.colors.white, theme.colors.white]
      ),
      transform: [{ translateX: interpolate(toggled.value, [0, 1], [4, 22]) }]
    }
  })

  const svgStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(toggled.value, [0, 1], [0, 1])
    }
  })

  return (
    <Container
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
    >
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.8}
        onPress={() => {
          if (toggled.value) setSelected(false)
          else setSelected(true)
        }}
      >
        <Animated.View style={backgroundAnimatedStyle}>
          <Animated.View style={[circleAnimatedStyle]}>
            {selected ? (
              <Animated.View style={svgStyle}>
                <SwitchCheckSVG />
              </Animated.View>
            ) : null}
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    </Container>
  )
}
