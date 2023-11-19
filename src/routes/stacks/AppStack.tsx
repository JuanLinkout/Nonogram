// Bibliotecas Externas
import React from 'react'
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack'
import { Home } from '@screens/Home'
import { Game } from '@screens/Game'

// Components

const Stack = createStackNavigator()

export const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS
      })}
      initialRouteName="Game"
    >
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
