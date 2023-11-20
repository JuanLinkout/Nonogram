import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { Routes } from './routes'
import { StatusBar } from 'react-native'
import { theme } from '@global/theme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <Routes />
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor="transparent"
          />
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}
