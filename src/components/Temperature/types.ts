import { StyleProp } from 'react-native'

export type TemperaturePropsProps = {
  containerStyle?: StyleProp<Record<string, any>>
  temperature: number
  size?: number
}
