// Bibliotecas Externas
import { Platform, StatusBar } from 'react-native'
import React from 'react'

// Components

// Services
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppStack } from './stacks/AppStack'

const Stack = createStackNavigator()

export const Routes: React.FC = () => {
  // Functions
  function onFinishLoading() {
    // RNBootSplash.hide({ fade: true, duration: 900 })

    setTimeout(() => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent')
      Platform.OS === 'android' && StatusBar.setTranslucent(true)
    }, 1000)
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
