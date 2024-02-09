import React, { FC, memo } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { WeatherListItemPropsProps } from './types'
import { AppIcon } from '../AppIcon'
import { Temperature } from '../Temperature'
import styles from './styles'
import { getLocalDate } from '../../utils/helpers'

const WeatherListItem: FC<WeatherListItemPropsProps> = ({
  icon,
  title,
  temperature,
  timezone,
  onPress,
  containerStyle,
}: WeatherListItemPropsProps) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      <View style={styles.leftContainer}>
        <AppIcon name={icon} size={48} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{getLocalDate(timezone)}</Text>
        </View>
      </View>
      <Temperature temperature={temperature} />
    </TouchableOpacity>
  )
}

export default memo(WeatherListItem)
