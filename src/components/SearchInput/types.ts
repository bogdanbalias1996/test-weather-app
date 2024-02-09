import { StyleProp } from 'react-native'

export type SearchInputPropsProps = {
  onCancelPress: () => void
  containerStyle?: StyleProp<Record<string, any>>
  handleChangeText: (value: string) => void
  placeholder: string
  value: string
}
