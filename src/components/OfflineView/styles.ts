import { COLORS } from '../../config/constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLUE,
    position: 'absolute',
    bottom: 20,
    width: '100%',
    height: 20,
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.WHITE,
    fontSize: 14,
  },
})
