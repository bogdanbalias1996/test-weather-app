import React, { memo, useCallback, useState } from 'react'
import { SafeAreaView, KeyboardAvoidingView, Text, Platform, ActivityIndicator } from 'react-native'
import debounce from 'lodash/debounce'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { SearchInput, WeatherListItem } from '../../components'
import { api } from '../../api/api'
import { Endpoints } from '../../api/endpoints'
import { COLORS, NAVIGATION } from '../../config/constants'
import styles from './style'

export default memo(() => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>()
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [cityWeather, setCityWeather] = useState(null)

  // Fetching Weather by city name, state code, country code

  const getCitiesWeather = async (value: string): Promise<void> => {
    try {
      const response = await api.get(Endpoints.GET_CITIES_WEATHER, { params: { q: value, units: 'metric' } })
      setLoading(false)

      setCityWeather(response.data)
    } catch (error: Error) {
      setLoading(false)
      setCityWeather(null)
    }
  }

  const onCancelPress = (): void => {
    setSearchValue('')
    setCityWeather(null)
  }

  const debounceFn = useCallback(debounce(getCitiesWeather, 1000), [])

  const handleChangeText = (value: string): void => {
    debounceFn(value)
    setSearchValue(value)
    setLoading(true)
  }

  const renderCity = (): JSX.Element => {
    return cityWeather ? (
      <WeatherListItem
        icon={cityWeather.weather[0].icon}
        title={cityWeather.name}
        temperature={cityWeather.main.temp}
        timezone={cityWeather.timezone}
        onPress={navigateToDetail}
      />
    ) : (
      <Text style={styles.noResults}>No results</Text>
    )
  }

  const navigateToDetail = (): void => navigation.navigate(NAVIGATION.MAIN_ROUTE.WEATHER_DETAIL, { cityWeather })

  const renderLoader = (): JSX.Element => {
    return loading && <ActivityIndicator size={'small'} color={COLORS.WHITE} />
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding' enabled={Platform.OS === 'ios'} style={styles.container}>
          <SearchInput
            value={searchValue}
            handleChangeText={handleChangeText}
            placeholder='City Name'
            onCancelPress={onCancelPress}
            containerStyle={styles.searchContainer}
          />
          {!loading && renderCity()}
          {renderLoader()}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  )
})
