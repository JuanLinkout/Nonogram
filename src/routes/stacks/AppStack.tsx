// Bibliotecas Externas
import React from 'react'
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack'
import { Home } from '@screens/Home'

// Components

const Stack = createStackNavigator()

export const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS
      })}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
