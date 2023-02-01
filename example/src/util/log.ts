import { Alert } from 'react-native'

export const logAndAlert = (info: string) => {
  console.log(info)
  Alert.alert(info)
}
