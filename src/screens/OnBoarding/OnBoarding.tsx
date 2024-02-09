import React, { memo } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RoundButton } from '../../components'
import { NAVIGATION } from '../../config/constants'
import Umbrella from '../../assets/umbrella.svg'
import styles from './style'

export default memo(() => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()

  const navigateToWeatherList = (): void => navigation.navigate(NAVIGATION.MAIN_ROUTE.WEATHER_LIST)

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Umbrella height={110} />
        <View style={styles.textWrapper}>
          <Text style={styles.title}>Breeze</Text>
          <Text style={styles.subTitle}>Weather App</Text>
        </View>
        <RoundButton onPress={navigateToWeatherList} />
      </SafeAreaView>
    </>
  )
})
