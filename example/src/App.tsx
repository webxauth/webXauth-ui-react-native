/*
 *     FRAMEWORK
 */
import * as React from 'react'
/*
 *     COMPONENTS - webxauth
 */
import { AuthWebView, WebViewMessage } from '@webxauth/webxauth-ui-react-native'
/*
 *     UTILS
 */
import { logAndAlert } from './util/log'

export default function App() {
  React.useEffect(() => {
    console.log('App ::: Mounting')

    return () => {
      console.log('App ::: Unmounting')
    }
  }, [])

  const onPostMessage = async (message: WebViewMessage) => {
    logAndAlert('App ::: onPostMessage ::: message ::: stringified' + JSON.stringify(message))

    // Value determining within the AuthWebView component whether to continue
    // to process callback data with onPostAction, onPostData or onPostMessage.
    return true
  }

  const onPostAction = async (action: string) => {
    logAndAlert('App ::: onPostAction ::: action' + action)
  }

  const onPostData = async (data: object) => {
    logAndAlert('App ::: onPostData ::: data ::: stringified' + JSON.stringify(data))
  }

  const onClickMetaMask = async () => {}

  const onClickWalletConnect = async () => {}

  const onErrorAuthWebView = async (error: unknown) => {
    logAndAlert('App ::: onErrorAuthWebView ::: error ::: stringified' + JSON.stringify(error))
  }

  return (
    <AuthWebView
      onClickMetaMask={onClickMetaMask}
      onClickWalletConnect={onClickWalletConnect}
      onPostAction={onPostAction}
      onPostData={onPostData}
      onPostMessage={onPostMessage}
      onError={onErrorAuthWebView}
      delay={1000}
      backgroundColor='#eaeaea'
      dependencies={[]}
    />
  )
}
