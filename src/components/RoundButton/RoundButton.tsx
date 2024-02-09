import React, { FC, memo } from 'react'
import { TouchableOpacity } from 'react-native'

import { RoundButtonPropsProps } from './types'
import { AppIcon } from '../AppIcon'
import styles from './styles'

const RoundButton: FC<RoundButtonPropsProps> = ({ onPress, containerStyle }: RoundButtonPropsProps) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      <AppIcon name='arrowright' />
    </TouchableOpacity>
  )
}

export default memo(RoundButton)
