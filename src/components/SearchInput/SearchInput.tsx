import React, { FC, memo } from 'react'
import { TextInput, TouchableOpacity, View, Text } from 'react-native'

import { SearchInputPropsProps } from './types'
import { COLORS } from '../../config/constants'
import styles from './styles'

const SearchInput: FC<SearchInputPropsProps> = ({
  onCancelPress,
  containerStyle,
  handleChangeText,
  placeholder,
  value,
}: SearchInputPropsProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.inputWrapper}>
        <TextInput
          value={value}
          returnKeyType='search'
          placeholder={placeholder}
          placeholderTextColor={COLORS.GRAY_TEXT}
          onChangeText={handleChangeText}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.cancelButton} onPress={onCancelPress}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  )
}

export default memo(SearchInput)
