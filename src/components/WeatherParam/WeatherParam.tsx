import React, { FC, memo } from 'react'
import { View, Text } from 'react-native'

import { WeatherParamPropsProps } from './types'
import styles from './styles'

const WeatherParam: FC<WeatherParamPropsProps> = ({ name, value, containerStyle }: WeatherParamPropsProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.name}>{name.toUpperCase()}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

export default memo(WeatherParam)
