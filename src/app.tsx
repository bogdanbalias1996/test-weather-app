import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { NetworkProvider } from 'react-native-offline'

import RootNavigator from './navigation/RootNavigator'
import { navigationRef } from './navigation/RootNavigation'
import { OfflineView } from './components'

export default function App() {
  return (
    <NetworkProvider>
      <NavigationContainer ref={navigationRef}>
        <StatusBar style='auto' />
        <OfflineView />
        <RootNavigator />
      </NavigationContainer>
    </NetworkProvider>
  )
}
