import { COLORS } from '../../config/constants'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  inputWrapper: {
    backgroundColor: COLORS.BG_COMPONENT,
    borderRadius: 15,
    flex: 1,
    padding: 10,
  },
  input: {
    fontSize: 16,
    color: COLORS.WHITE,
  },
  cancelButton: {
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.WHITE,
  },
})
