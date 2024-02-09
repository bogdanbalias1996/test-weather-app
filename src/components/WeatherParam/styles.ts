import { COLORS } from '../../config/constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.BG_COMPONENT,
    borderRadius: 15,
    padding: 15,
  },
  name: {
    fontSize: 16,
    color: COLORS.GRAY_TEXT,
    marginBottom: 5,
  },
  value: {
    fontSize: 24,
    color: COLORS.WHITE,
  },
})
