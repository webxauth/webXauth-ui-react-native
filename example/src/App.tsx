import * as React from 'react'

import { AuthWebView, WebViewMessage } from 'webxauth-ui-react-native'

export default function App() {

  const onPostMessage = async (message: WebViewMessage) => {
    console.log('App ::: onPostMessage ::: message ::: stringified', JSON.stringify(message))

    // Value determining within the AuthWebView component whether to continue
    // to process callback data with onPostAction, onPostData or onPostMessage.
    return true
  }

  const onPostAction = async (action: string) => {
    console.log('App ::: onPostAction ::: action', action)
  }

  const onPostData = async (data: object) => {
    console.log('App ::: onPostData ::: data ::: stringified', JSON.stringify(data))
  }

  const onClickMetaMask = async () => {}

  const onClickWalletConnect = async () => {}

  const onErrorAuthWebView = async (error: unknown) => {
    console.log('App ::: onErrorAuthWebView ::: error ::: stringified', JSON.stringify(error))
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
