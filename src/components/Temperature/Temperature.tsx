import React, { FC, memo, useState } from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { TemperaturePropsProps } from './types'
import { celsiusToFahrenheit } from '../../utils/helpers'
import styles from './styles'
import { AppIcon } from '../AppIcon'

const Temperature: FC<TemperaturePropsProps> = ({ containerStyle, temperature, size = 24 }: TemperaturePropsProps) => {
  const [isCelsius, setIsCelsius] = useState(true)

  const getTemperatureValue = (): string =>
    isCelsius ? `${Number(temperature.toFixed())}` : `${celsiusToFahrenheit(temperature)}`

  const onPress = (): void => setIsCelsius(!isCelsius)

  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      <Text style={[styles.temperature, { fontSize: size }]}>
        {getTemperatureValue()}{' '}
        <AppIcon
          size={size}
          set='material-community-icons'
          name={isCelsius ? 'temperature-celsius' : 'temperature-fahrenheit'}
        />
      </Text>
    </TouchableOpacity>
  )
}

export default memo(Temperature)
