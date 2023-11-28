// Bibliotecas Externas
import React from 'react'
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack'
import { Home } from '@screens/Home'
import { Game } from '@screens/Game'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Configurations } from '@screens/Configurations'
import { TabBar } from '@components/navigation/TabBar'

// Components

const Stack = createStackNavigator()
const TabNavigator = createBottomTabNavigator()

export const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS
      })}
      initialRouteName="TabStack"
    >
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="TabStack" component={TabStack} />
    </Stack.Navigator>
  )
}

export const TabStack: React.FC = () => {
  return (
    <TabNavigator.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={() => ({
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS
      })}
      initialRouteName="Home"
    >
      <TabNavigator.Screen name="Home" component={Home} />
      <TabNavigator.Screen name="Configurations" component={Configurations} />
    </TabNavigator.Navigator>
  )
}
