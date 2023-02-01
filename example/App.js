/*
 *     FRAMEWORK
 */
import { SafeAreaView, StyleSheet } from 'react-native'
/*
 *     COMPONENTS - App
 */
import App from './src/App'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
})

export default (
  <SafeAreaView style={styles.container}>
    <App />
  </SafeAreaView>
)
