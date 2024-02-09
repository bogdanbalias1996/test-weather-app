import { COLORS } from '../../config/constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG_MAIN,
  },
  scrollContainer: {
    paddingHorizontal: 15,
  },
  contentScrollContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 48,
    fontWeight: 'bold',
    color: COLORS.WHITE,
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: COLORS.GRAY_TEXT,
    marginBottom: 30,
  },
  wrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 40,
  },
  item: {
    width: '48%',
    marginBottom: 10,
  },
})
