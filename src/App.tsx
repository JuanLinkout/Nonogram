import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components/native'
import { Routes } from './routes'
import { StatusBar } from 'react-native'
import ThemeConfig from '@global/theme'

export function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={ThemeConfig}>
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
