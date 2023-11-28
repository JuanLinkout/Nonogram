// External Libraries
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

// Assets

// Styles
import { Container, ButtonContainer, IconContainer } from './styles'
import { HomeSVG } from '@assets/icons/Home'
import { theme } from '@global/theme'
import { ConfigurationSVG } from '@assets/icons/Configuration'
import { Typography } from '@components/toolkit/Typography'

export const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation
}) => {
  // Hooks
  const insets = useSafeAreaInsets()

  // Functions
  function handleIconPress(key: string, routeName: string, index: number) {
    const isFocused = state.index === index

    const event = navigation.emit({
      type: 'tabPress',
      target: key,
      canPreventDefault: true
    })

    if (!isFocused && !event.defaultPrevented) navigation.navigate(routeName)
  }

  function handleIconLongPress(key: string) {
    navigation.emit({ type: 'tabLongPress', target: key })
  }

  function getRouteInfos(routeName: string, index: number) {
    const isSelected = index === state.index

    if (routeName === 'Home')
      return {
        label: 'Home',
        icon: (
          <HomeSVG
            stroke={
              isSelected ? theme.colors.black : theme.colors.textSecondary
            }
          />
        )
      }
    else if (routeName === 'Configurations')
      return {
        label: 'Configurations',
        icon: (
          <ConfigurationSVG
            stroke={
              isSelected ? theme.colors.black : theme.colors.textSecondary
            }
          />
        )
      }
    else return { label: '', icon: null }
  }

  return (
    <Container paddingBottom={Math.max(insets.bottom, 16)}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const { label, icon } = getRouteInfos(route.name, index)
        const isSelected = index === state.index

        console.log(isSelected)
        return (
          <ButtonContainer
            key={label}
            accessibilityRole="button"
            testID={options.tabBarTestID}
            onPress={() => handleIconPress(route.key, route.name, index)}
            onLongPress={() => handleIconLongPress(route.key)}
            accessibilityLabel={options.tabBarAccessibilityLabel}
          >
            <IconContainer>{icon}</IconContainer>
            <Typography
              variant="b2"
              color={
                isSelected
                  ? theme.colors.textPrimary
                  : theme.colors.textSecondary
              }
            >
              {label}
            </Typography>
          </ButtonContainer>
        )
      })}
    </Container>
  )
}
