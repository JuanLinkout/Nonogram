// Bibliotecas Externas
import React, { useEffect, useState } from 'react'
import { Platform, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Components
import { AppStack } from './stacks/AppStack'

// Services
import { GamesRepository } from '@services/repository/games'

const Stack = createStackNavigator()

export const Routes: React.FC = () => {
  const [loading, setLoading] = useState(true)

  // Functions
  async function onFinishLoading() {
    // RNBootSplash.hide({ fade: true, duration: 900 })

    setTimeout(() => {
      StatusBar.setBarStyle('dark-content')
      Platform.OS === 'android' && StatusBar.setBackgroundColor('transparent')
      Platform.OS === 'android' && StatusBar.setTranslucent(true)
    }, 1000)
  }

  useEffect(() => {
    GamesRepository.startAllGames()
    setLoading(false)
  }, [])

  if (loading) return null

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={() => ({ headerShown: false })}>
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
