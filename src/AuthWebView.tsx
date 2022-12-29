/*
 *    FRAMEWORK
 */
import React, { useEffect, useMemo, useState } from 'react'
import { ActivityIndicator, useWindowDimensions } from 'react-native'
import { View } from 'react-native'
import { Platform } from 'react-native'
/*
 *    COMPONENTS
 */
import WebView from 'react-native-webview'
/*
 *    UTILS
 */
import { buildUserAgentString, runBeforeFirst, runFirst } from './utils/webview'
import MessageBroker, {
  WebViewMessage,
  WebViewMessageBrokerConfig,
} from './utils/WebViewMessageBroker'

type AuthWebViewProps = {
  messageBroker?: MessageBroker
  delay: number
  backgroundColor: string
  onPostMessage?: (message: WebViewMessage) => Promise<boolean>
  onPostAction?: (action: string) => Promise<void>
  onPostData?: (data: object) => Promise<void>
  onClickWalletConnect?: () => Promise<void>
  onClickMetaMask?: () => Promise<void>
  onError: (error: unknown) => Promise<void>
  dependencies: unknown[]
}

const LoadingIndicator = ({ height, width, backgroundColor }: any) => (
  <View
    style={[
      {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        height,
        width,
        backgroundColor,
      },
    ]}>
    <ActivityIndicator size='small' color='#FFA34E' />
  </View>
)

const AuthWebView = ({
  delay,
  backgroundColor,
  onPostMessage,
  onPostAction: onPostActionOuter,
  onPostData,
  onClickMetaMask,
  onClickWalletConnect,
  onError,
  dependencies,
}: AuthWebViewProps) => {
  const [isWebViewLoaded, setIsWebViewLoaded] = useState(false)
  const { width, height } = useWindowDimensions()

  const [isDelaying, setIsDelaying] = useState(true)

  const onPostAction = async (action: string) => {
    if (action === 'walletconnect') onClickWalletConnect && (await onClickWalletConnect())
    else if (action === 'metamask') onClickMetaMask && (await onClickMetaMask())

    onPostActionOuter && onPostActionOuter(action)
  }
  const config: WebViewMessageBrokerConfig = {
    onPostAction,
    onPostData,
    onPostMessage,
    onError,
  }
  const messageBroker = useMemo(() => new MessageBroker(config), dependencies)

  const isfullyLoaded = isWebViewLoaded && !isDelaying

  useEffect(() => {
    setTimeout(() => setIsDelaying(false), delay)
  }, [])

  return (
    <>
      {!isfullyLoaded && (
        <LoadingIndicator width={width} height={height} backgroundColor={backgroundColor} />
      )}

      <WebView
        source={{ uri: 'https://auth.bonuz.market/logout' }}
        onMessage={async (event) => messageBroker!.handleOnMessage(event)}
        injectedJavaScript={runFirst}
        injectedJavaScriptBeforeContentLoaded={runBeforeFirst}
        userAgent={buildUserAgentString(Platform.OS)}
        onLoadEnd={() => setIsWebViewLoaded(true)}
        startInLoadingState={true}
      />
    </>
  )
}

export { AuthWebView, AuthWebViewProps }
