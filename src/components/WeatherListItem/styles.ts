import { COLORS } from '../../config/constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.BG_COMPONENT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 15,
  },
  leftContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.WHITE,
    marginBottom: 5,
  },
  time: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.GRAY_TEXT,
  },
})
