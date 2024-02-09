import { COLORS } from '../../config/constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG_MAIN,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWrapper: {
    marginVertical: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 52,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
  subTitle: {
    fontSize: 22,
    color: COLORS.GRAY_TEXT,
  },
})
