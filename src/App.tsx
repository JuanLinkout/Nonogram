import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { Routes } from './routes'
import { StatusBar } from 'react-native'
import { theme } from '@global/theme'

export function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Routes />
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="transparent"
        />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
