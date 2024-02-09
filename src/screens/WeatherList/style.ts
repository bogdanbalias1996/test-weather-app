import { COLORS } from '../../config/constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG_MAIN,
  },
  searchContainer: {
    marginTop: 10,
    marginBottom: 25,
  },
  noResults: {
    textAlign: 'center',
    color: COLORS.GRAY_TEXT,
    fontSize: 18,
  },
})
