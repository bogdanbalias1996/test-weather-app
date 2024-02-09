import React from 'react'
import { Text, View } from 'react-native'
import { NetworkConsumer } from 'react-native-offline'

import styles from './styles'

const OfflineView = () => {
  return (
    <NetworkConsumer>
      {({ isConnected }) =>
        !isConnected && (
          <View style={styles.container}>
            <Text style={styles.text}>You are offline, please check your connection</Text>
          </View>
        )
      }
    </NetworkConsumer>
  )
}

export default OfflineView
