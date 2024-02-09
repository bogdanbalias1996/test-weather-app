import { createNavigationContainerRef, ParamListBase } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

export function navigate(name: string, params: ParamListBase) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack()
  }
}
