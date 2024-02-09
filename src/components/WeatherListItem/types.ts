import { StyleProp } from 'react-native'

export type WeatherListItemPropsProps = {
  icon: string
  title: string
  temperature: number
  timezone: number
  onPress: () => void
  containerStyle?: StyleProp<Record<string, any>>
}
