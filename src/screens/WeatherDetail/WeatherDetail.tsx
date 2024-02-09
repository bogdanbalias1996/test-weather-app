import React, { memo } from 'react'
import { SafeAreaView, Text, ScrollView, View } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { AppIcon, Temperature, WeatherParam } from '../../components'
import styles from './style'

export default memo(() => {
  const route = useRoute()
  const cityWeather = route.params.cityWeather
  const { name, weather, main, wind, visibility } = cityWeather

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentScrollContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{weather[0].description}</Text>
          <AppIcon name={weather[0].icon} size={200} />
          <Temperature temperature={main.temp} size={48} />
          <View style={styles.wrap}>
            <View style={styles.item}>
              <WeatherParam name='Wind' value={`${wind.speed} m/s`} />
            </View>
            <View style={styles.item}>
              <WeatherParam name='Humidity' value={`${main.humidity} %`} />
            </View>
            <View style={styles.item}>
              <WeatherParam name='Pressure' value={`${main.pressure} hPa`} />
            </View>
            <View style={styles.item}>
              <WeatherParam name='Visibility' value={`${visibility} m`} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
})
