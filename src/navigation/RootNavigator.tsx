import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { OnBoarding } from '../screens/OnBoarding'
import { WeatherList } from '../screens/WeatherList'
import { WeatherDetail } from '../screens/WeatherDetail'
import { COLORS } from '../config/constants'
import { AppIcon } from '../components'
import { TouchableOpacity } from 'react-native'
import { goBack } from './RootNavigation'

const Stack = createNativeStackNavigator()

// Main Stack Navigator

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='OnBoarding'
        component={OnBoarding}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='WeatherList'
        component={WeatherList}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name='WeatherDetail'
        component={WeatherDetail}
        options={{
          title: 'Weather Details',
          headerStyle: {
            backgroundColor: COLORS.BG_MAIN,
          },
          headerTintColor: COLORS.WHITE,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => goBack()}>
              <AppIcon name='left' />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  )
}

export default RootNavigator
