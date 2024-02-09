import React, { FC, memo } from 'react'
import {
  Feather,
  Ionicons,
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from '@expo/vector-icons'

import N01 from '../../assets/weatherIcons/01n.svg'
import D01 from '../../assets/weatherIcons/01d.svg'
import N02 from '../../assets/weatherIcons/02n.svg'
import D02 from '../../assets/weatherIcons/02d.svg'
import N03 from '../../assets/weatherIcons/03n.svg'
import D03 from '../../assets/weatherIcons/03d.svg'
import N04 from '../../assets/weatherIcons/04n.svg'
import D04 from '../../assets/weatherIcons/04d.svg'
import N09 from '../../assets/weatherIcons/09n.svg'
import D09 from '../../assets/weatherIcons/09d.svg'
import N10 from '../../assets/weatherIcons/10n.svg'
import D10 from '../../assets/weatherIcons/10d.svg'
import N11 from '../../assets/weatherIcons/11n.svg'
import D11 from '../../assets/weatherIcons/11d.svg'
import N13 from '../../assets/weatherIcons/13n.svg'
import D13 from '../../assets/weatherIcons/13d.svg'
import N50 from '../../assets/weatherIcons/50n.svg'
import D50 from '../../assets/weatherIcons/50d.svg'
import { AppIconPropsProps } from './types'
import { COLORS } from '../../config/constants'

const AppIcon: FC<AppIconPropsProps> = ({
  set = 'ant-design',
  name = 'home',
  size = 24,
  color = COLORS.WHITE,
}: AppIconPropsProps) => {
  switch (name) {
    case '01n':
      return <N01 height={size} />
    case '01d':
      return <D01 height={size} />
    case '02n':
      return <N02 height={size} />
    case '02d':
      return <D02 height={size} />
    case '03n':
      return <N03 height={size} />
    case '03d':
      return <D03 height={size} />
    case '04n':
      return <N04 height={size} />
    case '04d':
      return <D04 height={size} />
    case '09n':
      return <N09 height={size} />
    case '09d':
      return <D09 height={size} />
    case '10n':
      return <N10 height={size} />
    case '10d':
      return <D10 height={size} />
    case '11n':
      return <N11 height={size} />
    case '11d':
      return <D11 height={size} />
    case '13n':
      return <N13 height={size} />
    case '13d':
      return <D13 height={size} />
    case '50n':
      return <N50 height={size} />
    case '50d':
      return <D50 height={size} />
    default:
      switch (set) {
        case 'material-community-icons':
          return <MaterialCommunityIcons name={name} size={size} color={color} />
        case 'material-icons':
          return <MaterialIcons name={name} size={size} color={color} />
        case 'ionicons':
          return <Ionicons name={name} size={size} color={color} />
        case 'font-awesome':
          return <FontAwesome name={name} size={size} color={color} />
        case 'font-awesome-5':
          return <FontAwesome5 name={name} size={size} color={color} />
        case 'entypo':
          return <Entypo name={name} size={size} color={color} />
        case 'ant-design':
          return <AntDesign name={name} size={size} color={color} />
        case 'feather':
        default:
          return <Feather name={name} size={size} color={color} />
      }
  }
}

export default memo(AppIcon)
